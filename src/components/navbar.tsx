import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-xl font-bold text-amber-700 flex items-center gap-2"
        >
          <span className="text-2xl">🐝</span> דבש טהור גולמי
        </Link>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>לוח בקרה</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                אודות
              </Link>
              <Link
                href="/products"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                חנות
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                צור קשר
              </Link>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                התחברות
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
