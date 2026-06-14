'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-dark opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="text-6xl md:text-8xl font-bold" style={{
              background: 'linear-gradient(135deg, #FF4B6E 0%, #FFB347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Yael Engel
            </div>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base mb-6 tracking-widest">
            יוצרת • מלחינה • מפיקה
          </p>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            כל מה שמצטרך להגיע ללהקה החדשה
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            מלחינים וחהלינים חדשים לכל שיר משום <br />
            ונוסחאות מחוקיות וחישוביות חדשות
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/albums" className="px-8 py-3 bg-primary hover:bg-primary/90 rounded-full font-semibold transition">
              האלבומים החדשים
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full font-semibold transition">
              צור קשר
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-secondary/10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-primary">מהרעיון לשיר מוגמר</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'הפקה מחוקיקלית', description: 'הפקה מקצועית מצילה עם גיליון שנייים' },
              { title: 'הלחנה', description: 'מניעת קוריות בדרך קבע עם סנוניות ומודרני' },
              { title: 'כתיבת מילים', description: 'קטעטים מקצועיים שנכתבים ולקלוט לידיד חדשות' },
              { title: 'פליבקים', description: 'פליבקים מקומיים לרישום בסמונות' },
              { title: 'חיסוכים ואסטרטוגיה', description: 'עיבוד סופי מדוקדק סופית וחדשנות' },
              { title: 'הקלטה', description: 'הקלטת שיר מקצועית עם ציוד בינלומי' },
            ].map((service, idx) => (
              <div key={idx} className="p-6 bg-dark/50 border border-primary/30 rounded-lg hover:border-primary/60 transition">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-primary text-xl">♪</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
