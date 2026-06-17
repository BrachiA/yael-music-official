'use client'

import GlowText from '@/components/GlowText'

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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal mb-8 leading-normal py-2"
            style={{
              fontFamily: '"Brush Script MT", cursive',
              letterSpacing: '0.08em',
            }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-rose-400">
              Yael Engel
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2">כל מה שתצטרכו להפקת שיר</p>
          <p className="text-gray-300 text-lg mb-12">מהמילים והלחן ועד שלב המיקס</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/studio"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pink-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path>
              </svg>
              <span className="text-pink-600 text-xs tracking-wider uppercase font-medium">אודות</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              נעים להכיר <span className="text-[#FF4B6E]">:)</span>
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
          <p className="text-center text-[#FF4B6E] tracking-[0.4em] text-sm mb-4">השירותים  שלנו</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            מהרעיון לשיר <span className="text-[#FF4B6E]">מוגמר</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            כל מה שתצטרכו להפקת שיר מושלם — הכל תחת קורת גג אחת
          </p>
<div className="grid md:grid-cols-3 gap-6">

            {/* כתיבת מילים */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 text-right">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">כתיבת מילים</h3>
              <p className="text-gray-400 text-sm leading-relaxed">טקסטים מקוריים שנכתבים מהלב, מותאמים אישית לכל לקוח ולכל אירוע.</p>
            </div>

            {/* הלחנה */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 text-right">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">הלחנה</h3>
              <p className="text-gray-400 text-sm leading-relaxed">מנגינות מקוריות שנשארות בראש, עם סגנון ייחודי ומודרני.</p>
            </div>

            {/* הפקה מוזיקלית */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 text-right">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">הפקה מוזיקלית</h3>
              <p className="text-gray-400 text-sm leading-relaxed">הפקה מקצועית מלאה עם צליל עשיר ומודרני.</p>
            </div>

            {/* הקלטה */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 text-right">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">הקלטה</h3>
              <p className="text-gray-400 text-sm leading-relaxed">הקלטת שירה מקצועית באולפן עם ציוד ברמה הגבוהה ביותר.</p>
            </div>

            {/* מיקס ומאסטרינג */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 text-right">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">מיקס ומאסטרינג</h3>
              <p className="text-gray-400 text-sm leading-relaxed">עיבוד סאונד מדויק לתוצאה סופית מושלמת.</p>
            </div>

            {/* פליבקים */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 text-right">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">פליבקים</h3>
              <p className="text-gray-400 text-sm leading-relaxed">פליבקים מקצועיים מוכנים לרכישה בסגנונות מגוונים.</p>
            </div>

          </div>
        </div>
      </section>

      {/* STUDIO Y CTA */}
      <section className="py-16 px-4 bg-[#0f0f1e]" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-right">
              <p className="text-[#FF4B6E] tracking-[0.4em] text-xs mb-3">אולפן הפקה</p>
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
          <p className="text-[#FF4B6E] tracking-[0.4em] text-sm mb-4">בואו ניצור יחד</p>
          <GlowText text="יש לכם שיר בראש?" />
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
