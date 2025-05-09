import { redirect } from "next/navigation";
import { createClient } from "../../../../supabase/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { order?: string };
}) {
  const orderId = searchParams.order;

  if (!orderId) {
    redirect("/");
  }

  // In a real implementation, you would verify the payment status with Tranzilla
  // and update the order status in your database

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">התשלום התקבל בהצלחה!</h1>
          <p className="text-xl text-gray-700 mb-8">
            תודה על הזמנתך. מספר הזמנה: {orderId}
          </p>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">פרטי ההזמנה</h2>
            <p className="text-gray-700 mb-2">
              קיבלת אימייל עם פרטי ההזמנה המלאים.
            </p>
            <p className="text-gray-700">
              ההזמנה שלך תישלח בימים הקרובים. אנו נעדכן אותך כאשר ההזמנה תישלח.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                חזרה לדף הבית
              </Button>
            </Link>
            <Link href="/products">
              <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                המשך לקנות
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
