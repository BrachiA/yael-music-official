'use client'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">יעל אנגל</h3>
            <p className="text-gray-400">יוצרת, מלחינה ומפיקה מוזיקה עם חזון ייחודי וקול אמיתי.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ניווט</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-primary transition">בית</a></li>
              <li><a href="/albums" className="hover:text-primary transition">אלבומים</a></li>
              <li><a href="/studio" className="hover:text-primary transition">סטודיו</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">צור קשר</h4>
            <p className="text-gray-400 text-sm">
              <a href="mailto:y.e0525787073@gmail.com" className="hover:text-primary transition">
                y.e0525787073@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-2">050-410-5887</p>
          </div>

          {/* STUDIO Y */}
          <div>
            <h4 className="text-lg font-semibold mb-4">STUDIO Y</h4>
            <p className="text-gray-400 text-sm">
              רחוב הלל, 11, ברן<br />
              שירותי הפקה מקצועיים
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 יעל אנגל - כל הזכויות שמורות</p>
          <p>בנוי עם Next.js + Supabase</p>
        </div>
      </div>
    </footer>
  )
}
