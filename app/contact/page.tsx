'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Send to Supabase
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLoading(false)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-dark">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-primary">צור קשר</span>
        </h1>
        <p className="text-gray-400 text-center mb-12">
          רוצה לשתף משהו? לשאל שאלה? בואי נדבר!
        </p>

        <form onSubmit={handleSubmit} className="bg-dark/50 border border-primary/30 rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">שם מלא</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark/50 border border-primary/30 rounded-lg text-white focus:border-primary outline-none transition"
              placeholder="שמך"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">דוא"ל</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark/50 border border-primary/30 rounded-lg text-white focus:border-primary outline-none transition"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">נושא</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark/50 border border-primary/30 rounded-lg text-white focus:border-primary outline-none transition"
              placeholder="נושא השיחה"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">הודעה</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-dark/50 border border-primary/30 rounded-lg text-white focus:border-primary outline-none transition resize-none"
              placeholder="כתבי את ההודעה שלך כאן..."
            />
          </div>

          {submitted && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
              ✓ ההודעה נשלחה בהצלחה! תודה על ההודעה שלך.
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-primary hover:bg-primary/90 disabled:bg-gray-600 rounded-lg text-white font-semibold transition"
          >
            {loading ? 'שולח...' : 'שלח הודעה'}
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-primary">דוא"ל</h3>
            <p className="text-gray-400">
              <a href="mailto:y.e0525787073@gmail.com" className="hover:text-primary transition">
                y.e0525787073@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-primary">טלפון</h3>
            <p className="text-gray-400">050-410-5887</p>
          </div>
        </div>
      </div>
    </main>
  )
}
