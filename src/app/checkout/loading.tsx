import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-6"></div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div>
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>

                <div>
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div>
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div>
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-5 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>

                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-6">
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-4">
                <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
