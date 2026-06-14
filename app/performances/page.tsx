'use client'

import { useState, useEffect } from 'react'

interface Performance {
  id: string
  title: string
  date: string
  time: string
  location: string
  ticketUrl?: string
}

export default function Performances() {
  const [performances, setPerformances] = useState<Performance[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch from Supabase
    setLoading(false)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-primary">הופעות</span>
        </h1>
        <p className="text-gray-400 text-center mb-16">
          בואו לראות אותי בהופעה! לוח הזמנים של ההופעות שלי
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">טוען...</p>
          </div>
        ) : performances.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">אין הופעות מתוכננות כרגע. בואי חוזרי בקרוב!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {performances.map((perf) => (
              <div key={perf.id} className="bg-dark/50 border border-primary/30 rounded-lg p-6 hover:border-primary/60 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{perf.title}</h3>
                    <p className="text-gray-400 mb-1">📅 {perf.date} • {perf.time}</p>
                    <p className="text-gray-400">📍 {perf.location}</p>
                  </div>
                  {perf.ticketUrl && (
                    <a href={perf.ticketUrl} target="_blank" rel="noopener noreferrer"
                       className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg transition text-white font-semibold whitespace-nowrap">
                      קנה כרטיס
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
