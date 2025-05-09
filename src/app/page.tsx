import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { ArrowUpRight, CheckCircle2, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Product Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">אוסף הדבש שלנו</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              נאסף בקפידה מהכוורות המקומיות שלנו, הדבש שלנו שומר על כל הטוב
              הטבעי ללא תוספים או עיבוד.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1587049352847-4f5a5b2fce68?w=600&q=80",
                title: "דבש טהור גולמי - 250 גרם",
                description:
                  "דבש גולמי בצנצנת נוחה של 250 גרם, מושלם לשימוש יומיומי.",
                price: "₪49.90",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1558642891-54be180f6a0e?w=600&q=80",
                title: "דבש טהור גולמי - 500 גרם",
                description:
                  "צנצנת גדולה יותר של 500 גרם דבש טהור גולמי, אידיאלי למשפחות וחובבי דבש.",
                price: "₪89.90",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <span className="text-lg font-bold text-amber-600">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center px-4 py-2 text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                  >
                    לפרטים נוספים
                    <ArrowUpRight className="mr-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-amber-50 text-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80"
                alt="Beekeeper with hives"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                סיפור גידול הדבורים שלנו
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                במשך למעלה משלושה דורות, המשפחה שלנו מטפלת בדבורים ואוספת דבש
                בשיטות מסורתיות המכבדות את האיזון העדין של הטבע. אנו מאמינים
                בשיטות גידול דבורים בנות-קיימא המגנות על המאביקים שלנו תוך ייצור
                הדבש הטהור ביותר האפשרי.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors"
              >
                קרא את הסיפור המלא שלנו
                <ArrowUpRight className="mr-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">יש לך שאלות על הדבש שלנו?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            נשמח לשמוע ממך! בין אם אתה סקרן לגבי שיטות גידול הדבורים שלנו או
            רוצה להזמין הזמנה גדולה, אנחנו כאן לעזור.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors"
            >
              צור קשר
              <ArrowUpRight className="mr-2 w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 text-gray-800 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors"
            >
              קנה את המוצרים שלנו
              <ArrowUpRight className="mr-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
