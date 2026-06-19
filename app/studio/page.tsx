'use client'

import Link from 'next/link'

export default function Studio() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-primary">STUDIO Y</span>
        </h1>

        <div className="bg-dark/50 border border-primary/30 rounded-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-4">שירותי הפקה מקצועיים</h2>
          <p className="text-gray-300 text-lg mb-6">
            אולפן הפקה מלא בעיצוב ייחודי של יעל אנגל - בהנהלת יעל אנגל כמעצבת הסאונד של STUDIO Y
          </p>
          <p className="text-gray-400 mb-8">
            בSTUDIO Y אנחנו מספקים שירותי הפקה מקצועיים שכוללים:
            הלחנה, כתיבת מילים, הקלטה, מיקס, מסטרינג וייצור של שיר מוגמר. כל מה שצריך לשיר משלך בחיים!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-dark/50 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">שירותים</h3>
              <ul className="space-y-2 text-gray-400">
                <li>✓ הלחנה וארנג'</li>
                <li>✓ כתיבת מילים</li>
                <li>✓ הקלטה ומיקס</li>
                <li>✓ מסטרינג</li>
                <li>✓ יזם מוזיקלי</li>
                <li>✓ ייצור מוגמר</li>
              </ul>
            </div>

            <div className="bg-dark/50 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">פרטים</h3>
              <p className="text-gray-400 mb-2">
                <strong>כתובת:</strong><br />
                רחוב 600, 11, בני ברק
              </p>
              <p className="text-gray-400 mb-2">
                <strong>מייל:</strong><br />
                <a href="mailto:y.e0525787073@gmail.com" className="text-primary hover:underline">
                  y.e0525787073@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <strong>טלפון:</strong><br />
                050-410-5887
              </p>
            </div>
          </div>

          <Link href="/contact" className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 rounded-lg text-white font-semibold transition">
            צור קשר עבור ייעוץ
          </Link>
        </div>
      </div>
    </main>
  )
}
