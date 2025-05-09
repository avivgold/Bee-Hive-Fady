import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1200&q=80')",
          opacity: 0.3,
        }}
      />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              דבש{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                טהור גולמי
              </span>{" "}
              מהטבע ישר לשולחן שלך
            </h1>

            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              נאסף מקומית, לא מעובד, ומלא בטעמים טבעיים. הדבש שלנו שומר על כל
              האנזימים והרכיבים התזונתיים שהופכים דבש גולמי למתנה אמיתית מהטבע.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors text-lg font-medium"
              >
                לקנייה
                <ArrowUpRight className="mr-2 w-5 h-5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 text-gray-800 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors text-lg font-medium"
              >
                הסיפור שלנו
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-500" />
                <span>100% טהור וטבעי</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-500" />
                <span>נאסף מקומית</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-500" />
                <span>שיטות בר-קיימא</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
