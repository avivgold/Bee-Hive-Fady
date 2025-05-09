import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PaymentSuccessLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          </div>

          <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-80 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
            <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
