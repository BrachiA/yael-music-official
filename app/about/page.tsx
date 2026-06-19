'use client'

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-[#0f0f1e]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pink-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path>
              </svg>
              <span className="text-pink-600 text-xs tracking-wider uppercase font-medium">אודות</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              נעים להכיר <span className="text-[#FF4B6E]">:)</span>
            </h1>
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
                <div className="text-4xl font-bold">מאות</div>
                <div className="text-gray-500 text-sm mt-1">שירים הופקו</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">7</div>
                <div className="text-gray-500 text-sm mt-1">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-gray-500 text-sm mt-1">נשמה ורגש</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-[500px] shadow-2xl">
            <img
              src="/about-hero.png"
              alt="יעל אנגל על הבמה"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
