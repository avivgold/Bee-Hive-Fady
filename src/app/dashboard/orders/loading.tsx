import DashboardNavbar from "@/components/dashboard-navbar";

export default function OrdersLoading() {
  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          </header>

          {/* Orders Section */}
          <section className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="text-right">
                      <div className="h-6 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="space-y-2">
                      {[1, 2].map((j) => (
                        <div key={j} className="flex justify-between">
                          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
