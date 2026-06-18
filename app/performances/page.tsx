'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface Performance {
  id: string
  title: string
  date: string
  location: string
  ticket_url: string
}

export default function Performances() {
  const [performances, setPerformances] = useState<Performance[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from('performances')
        .select('*')
        .order('date', { ascending: true })
      setPerformances(data || [])
      setLoading(false)
    }
    fetch()
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0f0f1e]" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-[#FF4B6E]">הופעות</span>
        </h1>
        <p className="text-gray-400 text-center mb-16">לוח הופעות קרובות</p>

        {loading ? (
          <p className="text-center text-gray-400">טוען...</p>
        ) : performances.length === 0 ? (
          <p className="text-center text-gray-400">אין הופעות מתוכננות כרגע</p>
        ) : (
          <div className="space-y-4">
            {performances.map(p => (
              <div key={p.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FF4B6E]/40 transition flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm">📅 {new Date(p.date).toLocaleDateString('he-IL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  {p.location && <p className="text-gray-400 text-sm">📍 {p.location}</p>}
                </div>
                {p.ticket_url && (
                  <a href={p.ticket_url} target="_blank" rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl text-white font-semibold text-sm whitespace-nowrap transition hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}>
                    קנה כרטיס
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}