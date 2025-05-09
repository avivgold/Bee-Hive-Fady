import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertCircle className="h-16 w-16 text-red-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">התשלום בוטל</h1>
          <p className="text-xl text-gray-700 mb-8">
            ההזמנה שלך לא הושלמה מכיוון שהתשלום בוטל.
          </p>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">מה לעשות עכשיו?</h2>
            <p className="text-gray-700 mb-2">
              אתה יכול לנסות שוב או לחזור מאוחר יותר.
            </p>
            <p className="text-gray-700">
              אם אתה נתקל בבעיות בתהליך התשלום, אנא צור איתנו קשר לעזרה.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                נסה שוב
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                חזרה לדף הבית
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
