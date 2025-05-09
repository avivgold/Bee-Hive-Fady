"use server";

import { encodedRedirect } from "@/utils/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../../supabase/server";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("full_name")?.toString() || "";
  const supabase = await createClient();
  const origin = headers().get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        full_name: fullName,
        email: email,
      },
    },
  });

  console.log("After signUp", error);

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  if (user) {
    try {
      // Use service role client for admin operations that bypass RLS
      const supabaseAdmin = await createClient({ admin: true });

      const { error: updateError } = await supabaseAdmin.from("users").insert({
        id: user.id,
        name: fullName,
        full_name: fullName,
        email: email,
        user_id: user.id,
        token_identifier: user.id,
        created_at: new Date().toISOString(),
      });

      if (updateError) {
        console.error("Error updating user profile:", updateError);
      }
    } catch (err) {
      console.error("Error in user profile creation:", err);
    }
  }

  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link.",
  );
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const createCheckout = async (formData: FormData) => {
  // Get form data
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const postalCode = formData.get("postalCode") as string;
  const cartItems = formData.get("cartItems") as string;
  const totalAmount = formData.get("totalAmount") as string;

  // Validate required fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !postalCode ||
    !cartItems ||
    !totalAmount
  ) {
    return encodedRedirect("error", "/checkout", "כל השדות הם חובה");
  }

  try {
    // Parse cart items
    const items = JSON.parse(cartItems);
    if (!items || items.length === 0) {
      return encodedRedirect("error", "/checkout", "הסל שלך ריק");
    }

    // Create order in database
    const supabase = await createClient({ admin: true });

    // Generate a unique order ID
    const orderId = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Create order record
    const { error: orderError } = await supabase.from("orders").insert({
      order_id: orderId,
      customer_name: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
      address: address,
      city: city,
      postal_code: postalCode,
      total_amount: parseFloat(totalAmount),
      status: "pending",
      items: items,
    });

    if (orderError) {
      console.error("Error creating order:", orderError);
      return encodedRedirect("error", "/checkout", "אירעה שגיאה ביצירת ההזמנה");
    }

    // Redirect to Tranzilla payment page
    // In a real implementation, you would generate a proper Tranzilla payment URL
    // with the correct parameters for your merchant account

    // For demonstration purposes, we'll redirect to a payment success page
    return redirect(`/payment/success?order=${orderId}`);

    // In a real implementation with Tranzilla:
    // const tranzillaUrl = `https://direct.tranzila.com/yourmerchant/iframenew.php?sum=${totalAmount}&currency=1&cred_type=1&order_id=${orderId}`;
    // return redirect(tranzillaUrl);
  } catch (error) {
    console.error("Checkout error:", error);
    return encodedRedirect("error", "/checkout", "אירעה שגיאה בתהליך התשלום");
  }
};
