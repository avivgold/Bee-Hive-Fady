import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCheckout } from "../actions";
import CheckoutClient from "@/components/checkout-client";

export default async function CheckoutPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Get cart items from localStorage (this will be empty on server side)
  // We'll handle this on the client side in the checkout-form component

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">תשלום</h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">פרטי משלוח</h2>

              <form action={createCheckout} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">שם פרטי</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">שם משפחה</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">אימייל</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user?.email || ""}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">טלפון</Label>
                  <Input id="phone" name="phone" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="address">כתובת</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city">עיר</Label>
                    <Input id="city" name="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">מיקוד</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h2 className="text-xl font-semibold mb-6">פרטי תשלום</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    התשלום יתבצע באמצעות מערכת Tranzilla המאובטחת
                  </p>

                  <input type="hidden" name="cartItems" id="cartItems" />
                  <input type="hidden" name="totalAmount" id="totalAmount" />

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    המשך לתשלום
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-6">
              <h2 className="text-xl font-semibold mb-4">סיכום הזמנה</h2>
              <div id="checkout-summary" className="space-y-4">
                <p className="text-gray-500 text-center py-8">
                  טוען פרטי הזמנה...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CheckoutClient />
    </div>
  );
}
