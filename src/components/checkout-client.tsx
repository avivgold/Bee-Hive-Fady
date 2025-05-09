"use client";

import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CheckoutClient() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartItems = JSON.parse(savedCart);
      setItems(cartItems);

      // Set hidden form fields for server action
      const cartItemsInput = document.getElementById(
        "cartItems",
      ) as HTMLInputElement;
      const totalAmountInput = document.getElementById(
        "totalAmount",
      ) as HTMLInputElement;

      if (cartItemsInput && totalAmountInput) {
        cartItemsInput.value = JSON.stringify(cartItems);
        const total = cartItems.reduce(
          (sum: number, item: CartItem) => sum + item.price * item.quantity,
          0,
        );
        totalAmountInput.value = total.toString();
      }

      // Update the order summary
      updateOrderSummary(cartItems);
    }
    setIsLoaded(true);
  }, []);

  const updateOrderSummary = (cartItems: CartItem[]) => {
    const summaryElement = document.getElementById("checkout-summary");
    if (!summaryElement) return;

    if (cartItems.length === 0) {
      summaryElement.innerHTML = `<p class="text-gray-500 text-center py-8">הסל שלך ריק</p>`;
      return;
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const shipping = 30; // Fixed shipping cost
    const total = subtotal + shipping;

    let html = `
      <div class="space-y-4 mb-6">
        ${cartItems
          .map(
            (item) => `
          <div class="flex justify-between border-b pb-3">
            <div>
              <p class="font-medium">${item.name}</p>
              <p class="text-sm text-gray-600">כמות: ${item.quantity}</p>
            </div>
            <p class="font-medium">₪${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span>סכום ביניים:</span>
          <span>₪${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>משלוח:</span>
          <span>₪${shipping.toFixed(2)}</span>
        </div>
        <div class="flex justify-between font-bold pt-2 border-t">
          <span>סה"כ:</span>
          <span>₪${total.toFixed(2)}</span>
        </div>
      </div>
    `;

    summaryElement.innerHTML = html;
  };

  if (!isLoaded) {
    return null;
  }

  return null; // This component doesn't render anything visible
}
