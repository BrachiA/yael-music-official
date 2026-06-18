'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

interface Song {
  id: string
  title: string
  artist: string
  album: string
  audio_url: string
  cover_url: string
}

export default function Albums() {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    async function fetchSongs() {
      const { data } = await supabase
        .from('songs')
        .select('*')
        .order('created_at', { ascending: false })
      setSongs(data || [])
      setLoading(false)
    }
    fetchSongs()
  }, [])

  useEffect(() => {
    if (currentIndex === null) return
    const song = songs[currentIndex]
    if (!song?.audio_url) return

    if (audioRef.current) {
      audioRef.current.pause()
    }

    const audio = new Audio(song.audio_url)
    audioRef.current = audio

    audio.addEventListener('timeupdate', () => {
      setProgress(audio.currentTime)
    })
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })
    audio.addEventListener('ended', () => {
      // מעבר לשיר הבא
      if (currentIndex < songs.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setIsPlaying(false)
        setCurrentIndex(null)
      }
    })

    audio.play()
    setIsPlaying(true)

    return () => {
      audio.pause()
    }
  }, [currentIndex])

  const togglePlay = (index: number) => {
    if (currentIndex === index) {
      if (isPlaying) {
        audioRef.current?.pause()
        setIsPlaying(false)
      } else {
        audioRef.current?.play()
        setIsPlaying(true)
      }
    } else {
      setCurrentIndex(index)
    }
  }

  const playNext = () => {
    if (currentIndex !== null && currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const playPrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const currentSong = currentIndex !== null ? songs[currentIndex] : null

  return (
    <main className="min-h-screen pt-24 pb-36 px-4 bg-[#0f0f1e]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-[#FF4B6E]">שירים</span>
        </h1>
        <p className="text-gray-400 text-center mb-16">כל השירים של יעל אנגל</p>

        {loading ? (
          <p className="text-center text-gray-400">טוען...</p>
        ) : songs.length === 0 ? (
          <p className="text-center text-gray-400">אין שירים עדיין</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song, index) => (
              <div key={song.id}
                className={`bg-white/5 border rounded-2xl overflow-hidden transition cursor-pointer ${
                  currentIndex === index ? 'border-[#FF4B6E]/70' : 'border-white/10 hover:border-[#FF4B6E]/40'
                }`}
                onClick={() => togglePlay(index)}>

                {/* תמונה + כפתור */}
                <div className="h-48 bg-gradient-to-br from-[#FF4B6E]/30 to-[#6B5B95]/30 flex items-center justify-center relative">
                  {song.cover_url ? (
                    <img src={song.cover_url} alt={song.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl">♪</span>
                  )}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
  <div className="w-14 h-14 rounded-full bg-[#FF4B6E] flex items-center justify-center">
    {currentIndex === index && isPlaying
      ? <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
      : <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
    }
  </div>
                  </div>
                  {currentIndex === index && isPlaying && (
                    <div className="absolute bottom-2 left-2 flex gap-1">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-1 bg-[#FF4B6E] rounded-full animate-bounce"
                          style={{ height: '12px', animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* פרטים */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{song.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {song.artist}{song.album && ` • ${song.album}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* נגן תחתון */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f1e]/95 backdrop-blur border-t border-white/10 px-6 py-4 z-50" dir="rtl">
          <div className="max-w-6xl mx-auto flex items-center gap-6">

            {/* תמונה + שם */}
            <div className="flex items-center gap-3 w-48 flex-shrink-0">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#FF4B6E]/20 flex items-center justify-center">
                {currentSong.cover_url
                  ? <img src={currentSong.cover_url} alt={currentSong.title} className="w-full h-full object-cover" />
                  : <span>♪</span>}
              </div>
              <div>
                <p className="font-semibold text-sm truncate">{currentSong.title}</p>
                <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
              </div>
            </div>

            {/* כפתורים */}
            <div className="flex items-center gap-4 flex-shrink-0">
<button onClick={playPrev} disabled={currentIndex === 0}
  className="text-gray-400 hover:text-white disabled:opacity-30 transition">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
</button>
<button onClick={() => togglePlay(currentIndex!)}
  className="w-10 h-10 rounded-full bg-[#FF4B6E] flex items-center justify-center hover:bg-[#e03d5f] transition">
  {isPlaying
    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
    : <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
  }
</button>
<button onClick={playNext} disabled={currentIndex === songs.length - 1}
  className="text-gray-400 hover:text-white disabled:opacity-30 transition">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/></svg>
</button>
            </div>

            {/* Progress bar */}
            <div className="flex-1 flex items-center gap-3">
              <span className="text-gray-400 text-xs w-10 text-left">{formatTime(progress)}</span>
              <div className="flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer"
                onClick={e => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const ratio = 1 - (e.clientX - rect.left) / rect.width
                  if (audioRef.current) {
                    audioRef.current.currentTime = ratio * duration
                  }
                }}>
                <div className="h-full bg-[#FF4B6E] rounded-full"
                  style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }} />
              </div>
              <span className="text-gray-400 text-xs w-10">{formatTime(duration)}</span>
            </div>

          </div>
        </div>
      )}
    </main>
  )
}