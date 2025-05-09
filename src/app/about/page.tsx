import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              סיפור גידול הדבורים שלנו
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              תשוקה לדבש טהור ושיטות גידול דבורים בנות-קיימא
            </p>
          </div>
        </div>
      </section>

      {/* Beekeeper Story */}
      <section className="py-16" id="beekeeping">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=800&q=80"
                alt="Beekeeper tending to hives"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                הכר את מגדל הדבורים שלך
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                המסע שלי לגידול דבורים החל לפני למעלה מ-15 שנה עם כוורת אחת
                וסקרנות לגבי יצורים מדהימים אלה. מה שהתחיל כתחביב הפך במהירות
                לתשוקה כאשר גיליתי את העולם המדהים של הדבורים והדבש הטהור והטבעי
                שהן מייצרות.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                כיום, העסק המשפחתי הקטן שלנו מחזיק עשרות כוורות בשדות פרחי בר
                מקומיים וחוות אורגניות, ומבטיח שלדבורים שלנו יש גישה למקורות צוף
                מגוונים וחופשיים מחומרי הדברה לאורך כל העונות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            תהליך איסוף הדבש שלנו
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "גידול דבורים אתי",
                description:
                  "אנו מיישמים שיטות גידול דבורים בנות-קיימא שמעדיפות את בריאות הדבורים וחוזק המושבה על פני ייצור דבש מקסימלי.",
                image:
                  "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=600&q=80",
              },
              {
                title: "מיצוי זהיר",
                description:
                  "הדבש שלנו מופק בקור ומסונן באופן מינימלי כדי לשמר את כל האנזימים הטבעיים, האבקה והתכונות המועילות.",
                image:
                  "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&q=80",
              },
              {
                title: "טהור וגולמי",
                description:
                  "אנחנו לעולם לא מחממים או מפסטרים את הדבש שלנו, מה שמבטיח שתקבלו את כל הטעמים הטבעיים והיתרונות הבריאותיים בדיוק כפי שהטבע התכוון.",
                image:
                  "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&q=80",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16" id="sustainability">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              המחויבות שלנו לקיימות
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              אנו מאמינים בשיטות גידול דבורים התומכות הן באוכלוסיות דבורי הדבש
              והן בסביבה.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  סביבות ידידותיות לדבורים
                </h3>
                <p className="text-gray-700">
                  אנו עובדים עם בעלי קרקעות מקומיים כדי ליצור ולתחזק שדות פרחי
                  בר ומרחבים ידידותיים למאביקים התומכים באוכלוסיות דבורים
                  מגוונות.
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">התערבות מינימלית</h3>
                <p className="text-gray-700">
                  גישת גידול הדבורים שלנו מתמקדת ביצירת מושבות חזקות, עמידות
                  באופן טבעי שדורשות טיפול או התערבות מינימליים.
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  אריזות ידידותיות לסביבה
                </h3>
                <p className="text-gray-700">
                  אנו משתמשים בצנצנות זכוכית וחומרים ממוחזרים לכל האריזות שלנו
                  כדי למזער את ההשפעה הסביבתית.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">שאלות נפוצות</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "מה הופך דבש ל'גולמי'?",
                answer:
                  "דבש גולמי הוא דבש שלא חומם מעל לטמפרטורות הטבעיות של הכוורת (בסביבות 35°C) או סונן להסרת אבקה ופרופוליס מועילים. זה משמר את כל האנזימים הטבעיים, נוגדי החמצון והתכונות המועילות.",
              },
              {
                question: "האם הדבש שלכם מתגבש?",
                answer:
                  "כן, כל דבש טהור וגולמי יתגבש באופן טבעי עם הזמן. זהו סימן לאיכות וטוהר! פשוט הניחו את הצנצנת במים חמימים כדי להחזיר אותו בעדינות למצב נוזלי מבלי לפגוע בתכונותיו המועילות.",
              },
              {
                question: "האם הדבש שלכם אורגני?",
                answer:
                  'בעוד שאנו עוקבים אחר שיטות אורגניות, הדבורים מלקטות ברדיוס של 5-8 ק"מ מהכוורות שלהן, מה שהופך את זה לבלתי אפשרי להבטיח שהן מבקרות רק בצמחים אורגניים. עם זאת, אנו ממקמים את הכוורות שלנו באזורים הרחוקים מחקלאות קונבנציונלית ושימוש בחומרי הדברה.',
              },
              {
                question: "איך לאחסן את הדבש שלי?",
                answer:
                  "אחסנו את הדבש בטמפרטורת החדר במקום יבש. אין צורך לקרר אותו - דבש הוא אחד המזונות הבודדים שלעולם אינם מתקלקלים!",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            מוכנים לנסות את הדבש שלנו?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            חוו את ההבדל שדבש טהור, גולמי, שנאסף מקומית עושה.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors"
          >
            קנו את הדבש שלנו
            <ArrowUpRight className="mr-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
