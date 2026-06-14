'use client'

import { useState, useEffect } from 'react'

interface Playback {
  id: string
  title: string
  artist: string
  downloadUrl: string
  size: string
}

export default function Playbacks() {
  const [playbacks, setPlaybacks] = useState<Playback[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch from Supabase
    setLoading(false)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-primary">פליבקים</span>
        </h1>
        <p className="text-gray-400 text-center mb-16">
          הורד backing tracks להרקעה של השירים שלי
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">טוען...</p>
          </div>
        ) : playbacks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">אין playbacks זמינים כרגע</p>
          </div>
        ) : (
          <div className="space-y-4">
            {playbacks.map((pb) => (
              <div key={pb.id} className="bg-dark/50 border border-primary/30 rounded-lg p-6 hover:border-primary/60 transition flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{pb.title}</h3>
                  <p className="text-gray-400 text-sm">{pb.artist} • {pb.size}</p>
                </div>
                <a href={pb.downloadUrl} download
                   className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg transition text-white font-semibold whitespace-nowrap">
                  הורד
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
