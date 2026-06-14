'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t border-white/10 py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-right">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-end">
              <span className="font-bold text-lg text-white">יעלי אנגל</span>
              <div className="w-8 h-8 rounded-lg bg-[#FF4B6E] flex items-center justify-center text-white text-sm">♪</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              יוצרת, מלחינה ומפיקה מוזיקלית. כל מה שתצטרכו להפקת שיר מושלם.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-right">
            <h4 className="font-semibold mb-4 text-white">ניווט מהיר</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { href: '/', label: 'בית' },
                { href: '/about', label: 'אודות' },
                { href: '/albums', label: 'אלבומים' },
                { href: '/playbacks', label: 'פליבקים' },
                { href: '/performances', label: 'הופעות' },
                { href: '/contact', label: 'צרו קשר' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#FF4B6E] transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Y */}
          <div className="text-right">
            <h4 className="font-semibold mb-4 text-white">STUDIO Y</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>אולפן הפקה מקצועי</li>
              <li>בהנהלת יעלי אנגל</li>
              <li>רח׳ הלח״י 11, בני ברק</li>
              <li>
                <a href="mailto:y.e0525787073@gmail.com" className="hover:text-[#FF4B6E] transition">
                  y.e0525787073@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+972504105887" className="hover:text-[#FF4B6E] transition">
                  050-410-5887
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>מוזיקה עם נשמה</p>
          <p>© 2026 יעלי אנגל. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
