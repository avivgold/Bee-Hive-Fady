import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Star } from "lucide-react";
import Cart from "@/components/cart";
import { createClient } from "../../../supabase/server";
import AddToCartButton from "@/components/add-to-cart-button";

export default async function ProductsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">אוסף הדבש שלנו</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              דבש טהור, גולמי ונאסף מקומית עם כל הטוב הטבעי שלו שמור
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* 250g Product */}
            <div
              id="250g"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587049352847-4f5a5b2fce68?w=800&q=80"
                  alt="דבש טהור גולמי - 250 גרם"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">דבש טהור גולמי</h2>
                  <span className="text-xl font-bold text-amber-600">
                    ₪49.90
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    צנצנת 250 גרם
                  </span>
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                    <span className="text-sm text-gray-600 mr-1">
                      (24 ביקורות)
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  דבש גולמי בצנצנת נוחה של 250 גרם, מושלם לשימוש יומיומי. לדבש
                  פרחי הבר הזה יש פרופיל טעם עשיר ומורכב עם נגיעות פרחוניות
                  עדינות ומרקם חלק.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">למה תאהבו אותו:</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• לא מחומם ומסונן באופן מינימלי</li>
                    <li>• מכיל אבקת פרחים ואנזימים טבעיים</li>
                    <li>• נאסף משדות פרחי בר מקומיים</li>
                    <li>• גודל מושלם לקונים בפעם הראשונה</li>
                  </ul>
                </div>
                <AddToCartButton
                  id="250g"
                  name="דבש טהור גולמי - 250 גרם"
                  price={49.9}
                />
              </div>
            </div>

            {/* 500g Product */}
            <div
              id="500g"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558642891-54be180f6a0e?w=800&q=80"
                  alt="דבש טהור גולמי - 500 גרם"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">דבש טהור גולמי</h2>
                  <span className="text-xl font-bold text-amber-600">
                    ₪89.90
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    צנצנת 500 גרם
                  </span>
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                    <span className="text-sm text-gray-600 mr-1">
                      (42 ביקורות)
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  צנצנת גדולה יותר של 500 גרם דבש טהור גולמי, אידיאלי למשפחות
                  וחובבי דבש. זהו הגודל הפופולרי ביותר שלנו, המציע ערך מעולה תוך
                  שמירה על כל הטוב הטבעי.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">למה תאהבו אותו:</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• לא מחומם ומסונן באופן מינימלי</li>
                    <li>• מכיל אבקת פרחים ואנזימים טבעיים</li>
                    <li>• נאסף משדות פרחי בר מקומיים</li>
                    <li>• הערך הטוב ביותר למשתמשי דבש קבועים</li>
                  </ul>
                </div>
                <AddToCartButton
                  id="500g"
                  name="דבש טהור גולמי - 500 גרם"
                  price={89.9}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honey Information Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              על הדבש שלנו
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">תהליך האיסוף</h3>
                <p className="text-gray-700">
                  הדבש שלנו נאסף בקפידה ביד מהכוורות שלנו, תוך הבטחת הפרעה
                  מינימלית לדבורים. אנו משתמשים בתהליך מיצוי קר השומר על כל
                  האנזימים הטבעיים והתכונות המועילות של דבש גולמי.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">פרופיל טעם</h3>
                <p className="text-gray-700">
                  לדבש פרחי הבר שלנו יש צבע ענבר עשיר עם פרופיל טעם מורכב המשתנה
                  בעדינות עם העונות. תבחינו בנגיעות פרחוניות עדינות מאוזנות עם
                  מתיקות טבעית שאינה מציפה לעולם.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">טיפים לאחסון</h3>
                <p className="text-gray-700">
                  אחסנו את הדבש שלכם בטמפרטורת החדר, הרחק מאור שמש ישיר. אם
                  מתרחשת התגבשות (תהליך טבעי המעיד על דבש גולמי איכותי), פשוט
                  הניחו את הצנצנת במים חמימים כדי להחזיר אותו בעדינות למצב
                  נוזלי.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Cart />
    </div>
  );
}
