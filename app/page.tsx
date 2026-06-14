'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f1e] text-white" dir="rtl">

      {/* HERO - עם רקע קהל/קונצרט */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - concert crowd */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/50 to-[#0f0f1e]/90" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gray-200 tracking-[0.5em] text-sm mb-6">
            יוצרת &nbsp;·&nbsp; מלחינה &nbsp;·&nbsp; מפיקה
          </p>
          <h1
            className="text-7xl md:text-9xl font-bold italic mb-8"
            style={{
              fontFamily: '"Dancing Script", "Pacifico", cursive, Georgia, serif',
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FF4B6E 50%, #FFB347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Yael Engel
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2">כל מה שתצטרכו להפקת שיר</p>
          <p className="text-gray-300 text-lg mb-12">מהמילים והלחן ועד שלב המיקס</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="px-10 py-4 rounded-full font-semibold text-lg text-white transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FF4B6E, #FF8C69)' }}>
              בואו נעבוד ביחד
            </Link>
            <Link href="/albums"
              className="px-10 py-4 rounded-full font-semibold text-lg text-white border border-white/40 hover:border-white/80 transition backdrop-blur-sm">
              האלבום החדש
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-2xl animate-bounce">↓</div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4 bg-white" dir="rtl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-[#0f0f1e] order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-300 text-[#FF4B6E] text-sm mb-6">
              <span>⚙️</span> אודות
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              נעים להכיר <span className="text-[#FF4B6E]">(:)</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              יעלי אנגל, בת 19, יוצרת, מלחינה ומפיקה מוזיקלית. מגיל צעיר חיה ונושמת מוזיקה, ומביאה את הרגש והיצירתיות שלה לכל שיר שהיא נוגעת בו.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              יעלי מלווה את הלקוחות שלה לאורך כל הדרך — מכתיבת המילים והלחנת המנגינה, דרך ההפקה המוזיקלית המלאה ועד לשלב המיקס והמאסטרינג הסופי.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              תחת המותג <strong>STUDIO Y</strong>, יעלי מציעה חוויית הפקה מקצועית ואישית, עם תשומת לב לכל פרט ופרט.
            </p>
            <div className="flex gap-12 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0f0f1e]">מאות</div>
                <div className="text-gray-500 text-sm mt-1">שירים הופקו</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0f0f1e]">7</div>
                <div className="text-gray-500 text-sm mt-1">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0f0f1e]">100%</div>
                <div className="text-gray-500 text-sm mt-1">נשמה ורגש</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-[500px] order-1 md:order-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
              alt="יעל אנגל על הבמה"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-[#0f0f1e]" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#FF4B6E] tracking-[0.4em] text-sm mb-4">ה ש י ר ו ת י ם   ש ל נ ו</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            מהרעיון לשיר <span className="text-[#FF4B6E]">מוגמר</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            כל מה שתצטרכו להפקת שיר מושלם — הכל תחת קורת גג אחת
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎧', title: 'הפקה מוזיקלית', desc: 'הפקה מקצועית מלאה עם צליל עשיר ומודרני.' },
              { icon: '🎵', title: 'הלחנה', desc: 'מנגינות מקוריות שנשארות בראש, עם סגנון ייחודי ומודרני.' },
              { icon: '✍️', title: 'כתיבת מילים', desc: 'טקסטים מקצועיים שנכתבים מהלב, מותאמים אישית לכל קול ולכל אירוע.' },
              { icon: '✨', title: 'פליבקים', desc: 'פליבקים מקצועיים מוכנים לרכישה בסגנונות מגוונים.' },
              { icon: '🎛️', title: 'מיקס ומאסטרינג', desc: 'עיבוד סאונד מדויק לתוצאה סופית מושלמת.' },
              { icon: '🎤', title: 'הקלטה', desc: 'הקלטת שירה מקצועית באולפן עם ציוד ברמה הגבוהה ביותר.' },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#FF4B6E]/40 transition text-right">
                <div className="w-14 h-14 rounded-xl bg-[#FF4B6E]/20 flex items-center justify-center text-2xl mb-6 mr-auto">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO Y CTA */}
      <section className="py-16 px-4 bg-[#0f0f1e]" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-right">
              <p className="text-[#FF4B6E] tracking-[0.4em] text-xs mb-3">א ו ל פ ן   ה פ ק ה</p>
              <h2 className="text-4xl font-bold mb-4">STUDIO Y</h2>
              <p className="text-gray-400 leading-relaxed max-w-lg text-sm">
                אולפן הפקה מקצועי בניהול יעלי אנגל — כתיבה, הלחנה, הפקה, הקלטה, מיקס ומאסטרינג. כל מה שצריך להפקת שיר מושלם, תחת קורת גג אחת.
              </p>
            </div>
            <Link href="/studio"
              className="whitespace-nowrap px-8 py-3 rounded-full font-semibold text-white flex items-center gap-2 transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}>
              ← לאולפן STUDIO Y
            </Link>
          </div>
        </div>
      </section>

      {/* SONG IN HEAD CTA */}
      <section className="relative py-32 px-4 overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-[#0f0f1e]/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#FF4B6E] tracking-[0.4em] text-sm mb-4">ב ו א ו   נ י צ ו ר   ב י ח ד</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">יש לכם שיר בראש?</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            בואו נהפוך אותו למציאות. מהרעיון הראשון ועד לתוצר המוגמר — אני כאן בשבילכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/playbacks"
              className="px-10 py-4 border-2 border-white/40 text-white hover:border-white rounded-full font-semibold transition text-lg">
              חנות הפליבקים
            </Link>
            <Link href="/contact"
              className="px-10 py-4 rounded-full font-semibold text-white text-lg transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}>
              ← דברו איתי
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
