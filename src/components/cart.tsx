"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage on client side
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }

    // Add global function to window for adding items to cart
    window.addToCart = (
      id: string,
      name: string,
      price: number,
      quantity: number,
    ) => {
      const newItem = { id, name, price, quantity };
      setItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex((item) => item.id === id);
        let newItems;

        if (existingItemIndex >= 0) {
          // Update quantity if item exists
          newItems = [...prevItems];
          newItems[existingItemIndex].quantity += quantity;
        } else {
          // Add new item
          newItems = [...prevItems, newItem];
        }

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(newItems));
        return newItems;
      });

      // Open cart when adding items
      setIsOpen(true);
    };
  }, []);

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      );
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="relative z-50">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 bg-amber-600 text-white p-3 rounded-full shadow-md hover:bg-amber-700 transition-colors"
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">סל הקניות שלך</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-8">הסל שלך ריק</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b pb-4"
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-amber-600 font-medium">
                          ₪{item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="bg-gray-200 px-2 rounded-l"
                          >
                            -
                          </button>
                          <span className="bg-gray-100 px-3">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="bg-gray-200 px-2 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-end">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <span className="font-medium">
                          ₪{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold mb-4">
                    <span>סה"כ:</span>
                    <span>₪{subtotal.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    המשך לתשלום
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
