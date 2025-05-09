import { redirect } from "next/navigation";
import { createClient } from "../../../../supabase/server";
import DashboardNavbar from "@/components/dashboard-navbar";
import { InfoIcon } from "lucide-react";

export default async function OrdersPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch user's orders
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("email", user.email)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
  }

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">ההזמנות שלי</h1>
          </header>

          {/* Orders Section */}
          <section className="bg-card rounded-xl p-6 border shadow-sm">
            {!orders || orders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">לא נמצאו הזמנות</p>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">
                          הזמנה #{order.order_id}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.created_at).toLocaleDateString(
                            "he-IL",
                          )}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₪{order.total_amount}</p>
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(
                            order.status,
                          )}`}
                        >
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-medium mb-2">פריטים:</h4>
                      <ul className="space-y-2">
                        {order.items.map((item: any, index: number) => (
                          <li key={index} className="flex justify-between">
                            <span>
                              {item.name} x {item.quantity}
                            </span>
                            <span>
                              ₪{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-medium mb-2">פרטי משלוח:</h4>
                      <p>{order.address}</p>
                      <p>
                        {order.city}, {order.postal_code}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "shipped":
      return "bg-purple-100 text-purple-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    case "pending":
    default:
      return "bg-amber-100 text-amber-800";
  }
}

function getStatusText(status: string): string {
  switch (status.toLowerCase()) {
    case "completed":
      return "הושלם";
    case "processing":
      return "בעיבוד";
    case "shipped":
      return "נשלח";
    case "cancelled":
      return "בוטל";
    case "pending":
    default:
      return "ממתין";
  }
}
