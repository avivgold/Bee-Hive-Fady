import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">חנות</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-amber-600"
                >
                  כל המוצרים
                </Link>
              </li>
              <li>
                <Link
                  href="/products#250g"
                  className="text-gray-600 hover:text-amber-600"
                >
                  דבש 250 גרם
                </Link>
              </li>
              <li>
                <Link
                  href="/products#500g"
                  className="text-gray-600 hover:text-amber-600"
                >
                  דבש 500 גרם
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-amber-600"
                >
                  החשבון שלי
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">אודות</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-amber-600"
                >
                  הסיפור שלנו
                </Link>
              </li>
              <li>
                <Link
                  href="/about#beekeeping"
                  className="text-gray-600 hover:text-amber-600"
                >
                  תהליך גידול הדבורים
                </Link>
              </li>
              <li>
                <Link
                  href="/about#sustainability"
                  className="text-gray-600 hover:text-amber-600"
                >
                  קיימות
                </Link>
              </li>
              <li>
                <Link
                  href="/about#faq"
                  className="text-gray-600 hover:text-amber-600"
                >
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">משאבים</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-amber-600"
                >
                  יתרונות הדבש
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/recipes"
                  className="text-gray-600 hover:text-amber-600"
                >
                  מתכונים
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/bees"
                  className="text-gray-600 hover:text-amber-600"
                >
                  הצילו את הדבורים
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-amber-600"
                >
                  מידע על משלוחים
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">משפטי</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-600">
                  פרטיות
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-600">
                  תנאים
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-600">
                  אבטחה
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-amber-600">
                  עוגיות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} דבש טהור גולמי. כל הזכויות שמורות.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
