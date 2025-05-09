"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCartButton({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}) {
  return (
    <Button
      className="w-full bg-amber-600 hover:bg-amber-700"
      onClick={() => window.addToCart(id, name, price, 1)}
    >
      <ShoppingCart className="ml-2 h-4 w-4" /> הוסף לסל
    </Button>
  );
}
