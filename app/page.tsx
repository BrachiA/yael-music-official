'use client'

import GlowText from '@/components/GlowText'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

export default function Home() {
  // 1. הגדרת הטיפוסים מפורשות ל-Variants פותרת את שגיאות ה-TypeScript
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const h1Variants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const statsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const statItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  // 2. הפתרון שלך - הגדרת מערך הנתונים מחוץ ל-return כדי למנוע שגיאות parsing
  const services = [
    { title: "כתיבת מילים", desc: "טקסטים מקוריים שנכתבים מהלב, מותאמים אישית לכל לקוח ולכל אירוע.", icon: <><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></> },
    { title: "הלחנה", desc: "מנגינות מקוריות שנשארות בראש, עם סגנון ייחודי ומודרני.", icon: <><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></> },
    { title: "הפקה מוזיקלית", desc: "הפקה מקצועית מלאה עם צליל עשיר ומודרני.", icon: <><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></> },
    { title: "הקלטה", desc: "הקלטת שירה מקצועית באולפן עם ציוד ברמה הגבוהה ביותר.", icon: <><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/></> },
    { title: "מיקס ומאסטרינג", desc: "עיבוד סאונד מדויק לתוצאה סופית מושלמת.", icon: <><circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"/></> },
    { title: "פליבקים", desc: "פליבקים מקצועיים מוכנים לרכישה בסגנונות מגוונים.", icon: <><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></> }
  ];

  return (
    <main className="min-h-screen bg-[#0f0f1e] text-white overflow-x-hidden" dir="rtl">

      {/* HERO - עם רקע קהל/קונצרט */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - עם הנפשת זום-אין הדרגתית בטעינה */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80')",
            filter: "blur(6px)"
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/50 to-[#0f0f1e]/90" />

        {/* Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-gray-200 tracking-[0.5em] text-sm mb-6"
          >
            זמרת &nbsp;·&nbsp; יוצרת &nbsp;·&nbsp; מפיקה
          </motion.p>
          
          <motion.h1 
            variants={h1Variants}
            className="text-6xl md:text-8xl lg:text-9xl font-normal mb-8 leading-normal py-2"
            style={{
              fontFamily: '"Brush Script MT", cursive',
              letterSpacing: '0.08em',
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-rose-400">
              yael engl
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-semibold mb-2">כל מה שתצטרכו להפקת שיר</motion.p>
          <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-12">מהמילים והלחן ועד שלב המיקס</motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/studio"
              className="px-10 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
              style={{ background: 'linear-gradient(135deg, #FF4B6E, #FF8C69)' }}>
              בואו נעבוד ביחד
            </Link>
            <Link href="/albums"
              className="px-10 py-4 rounded-full font-semibold text-lg text-white border border-white/40 hover:border-white/80 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95">
              האלבום החדש
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-2xl animate-bounce">↓</div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4 bg-white overflow-hidden" dir="rtl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* טקסט אודות - נכנס חלק משמאל למרכז בגלילה */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#0f0f1e] order-2 md:order-1"
          >
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
            
            {/* סטטיסטיקות - נחשפות בצורה מדורגת קופצנית ועדינה */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statsContainerVariants}
              className="flex gap-12 mt-10"
            >
              {[
                { title: "מאות", desc: "שירים הופקו" },
                { title: "7", desc: "שנות ניסיון" },
                { title: "100%", desc: "נשמה ורגש" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={statItemVariants}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-[#0f0f1e]">{stat.title}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* תמונת אודות - נכנסת עם זווית אלגנטית מימין */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden h-[500px] order-1 md:order-2 shadow-2xl"
          >
            <img
              src="/about-hero.png"
              alt="יעל אנגל על הבמה"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-[#0f0f1e]" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#FF4B6E] tracking-[0.4em] text-sm mb-4">השירותים שלנו</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            מהרעיון לשיר <span className="text-[#FF4B6E]">מוגמר</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            כל מה שתצטרכו להפקת שיר מושלם — הכל תחת קורת גג אחת
          </p>

          {/* 3. שימוש במערך שהגדרנו מחוץ ל-return (זה נכון מאוד!) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all text-right"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-pink-400">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STUDIO Y CTA */}
      <section className="py-16 px-4 bg-[#0f0f1e]" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-right">
              <p className="text-[#FF4B6E] tracking-[0.4em] text-xs mb-3">אולפן הפקה</p>
              <h2 className="text-4xl font-bold mb-4">STUDIO Y</h2>
              <p className="text-gray-400 leading-relaxed max-w-lg text-sm">
                אולפן הפקה מקצועי בניהול יעלי אנגל — כתיבה, הלחנה, הפקה, הקלטה, מיקס ומאסטרינג. כל מה שצריך להפקת שיר מושלם, תחת קורת גג אחת.
              </p>
            </div>
            <Link href="/studio"
              className="whitespace-nowrap px-8 py-3 rounded-full font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/10"
              style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}>
              ← לאולפן STUDIO Y
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SONG IN HEAD CTA */}
      <section className="relative py-32 px-4 overflow-hidden" dir="rtl">
        {/* רקע עם אפקט זום איטי מאוד בריחוף/גלילה */}
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80')" }} 
        />
        <div className="absolute inset-0 bg-[#0f0f1e]/80" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-[#FF4B6E] tracking-[0.4em] text-sm mb-4">בואו ניצור יחד</p>
          <GlowText text="יש לכם שיר בראש?" />
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            בואו נהפוך אותו למציאות. מהרעיון הראשון ועד לתוצר המוגמר — אני כאן בשבילכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/playbacks"
              className="px-10 py-4 border-2 border-white/40 text-white hover:border-white rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
              חנות הפליבקים
            </Link>
            <Link href="/contact"
              className="px-10 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20"
              style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}>
              ← דברו איתי
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}