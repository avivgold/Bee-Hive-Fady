import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">צור קשר</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              יש לך שאלות על הדבש או גידול הדבורים שלנו? נשמח לשמוע ממך!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Information */}
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-6">צור איתנו קשר</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full ml-4">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">המיקום שלנו</h3>
                      <p className="text-gray-600">
                        רחוב הדבש 123
                        <br />
                        תל אביב, ישראל
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full ml-4">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">שלח לנו מייל</h3>
                      <p className="text-gray-600">hello@purerawhoney.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full ml-4">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">התקשר אלינו</h3>
                      <p className="text-gray-600">03-1234567</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:w-2/3">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">שלח לנו הודעה</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          השם שלך
                        </label>
                        <Input id="name" placeholder="ישראל ישראלי" />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          כתובת אימייל
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="israel@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        נושא
                      </label>
                      <Input id="subject" placeholder="איך נוכל לעזור לך?" />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        הודעה
                      </label>
                      <Textarea
                        id="message"
                        placeholder="ההודעה שלך כאן..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700"
                    >
                      שלח הודעה
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              בקר בחווה שלנו
            </h2>
            <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full flex items-center justify-center bg-amber-100">
                <p className="text-amber-800 font-medium">המפה תוצג כאן</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
