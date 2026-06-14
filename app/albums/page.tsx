'use client'

import { useState, useEffect } from 'react'

interface Song {
  id: string
  title: string
  artist: string
  album: string
  year: number
  spotifyUrl?: string
  appleMusicUrl?: string
}

export default function Albums() {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch from Supabase
    setLoading(false)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-primary">אלבומים</span>
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          גלה את כל השירים וה-EPs של יעל אנגל
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">טוען...</p>
          </div>
        ) : songs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">אין שירים עדיין. הם יוסיפו כאן בקרוב!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {songs.map((song) => (
              <div key={song.id} className="bg-dark/50 border border-primary/30 rounded-lg overflow-hidden hover:border-primary/60 transition">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-6xl">♪</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{song.artist}</p>
                  <p className="text-gray-500 text-sm mb-4">{song.album} • {song.year}</p>
                  <div className="flex gap-3">
                    {song.spotifyUrl && (
                      <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" 
                         className="flex-1 text-center px-3 py-2 bg-green-600 hover:bg-green-700 rounded transition text-white text-sm font-semibold">
                        Spotify
                      </a>
                    )}
                    {song.appleMusicUrl && (
                      <a href={song.appleMusicUrl} target="_blank" rel="noopener noreferrer"
                         className="flex-1 text-center px-3 py-2 bg-primary hover:bg-primary/90 rounded transition text-white text-sm font-semibold">
                        Apple Music
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
