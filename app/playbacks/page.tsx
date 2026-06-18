/*'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

interface Playback {
  id: string
  title: string
  genre: string
  price: number
  audio_url: string
}

export default function Playbacks() {
  const [playbacks, setPlaybacks] = useState<Playback[]>([])
  const [loading, setLoading] = useState(true)
  const [playing, setPlaying] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from('playbacks')
        .select('*')
        .order('created_at', { ascending: false })
      setPlaybacks(data || [])
      setLoading(false)
    }
    fetch()
  }, [])

  const togglePlay = (pb: Playback) => {
    if (playing === pb.id) {
      audioRef.current?.pause()
      setPlaying(null)
    } else {
      if (audioRef.current) audioRef.current.pause()
      audioRef.current = new Audio(pb.audio_url)
      audioRef.current.play()
      audioRef.current.onended = () => setPlaying(null)
      setPlaying(pb.id)
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0f0f1e]" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-[#FF4B6E]">פליבקים</span>
        </h1>
        <p className="text-gray-400 text-center mb-16">
          פליבקים מקצועיים לרכישה
        </p>

        {loading ? (
          <p className="text-center text-gray-400">טוען...</p>
        ) : playbacks.length === 0 ? (
          <p className="text-center text-gray-400">אין פליבקים עדיין</p>
        ) : (
          <div className="space-y-4">
            {playbacks.map(pb => (
              <div key={pb.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FF4B6E]/40 transition flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{pb.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {pb.genre && `${pb.genre} • `}
                    {pb.price && <span className="text-[#FF4B6E] font-semibold">₪{pb.price}</span>}
                  </p>
                </div>
                <div className="flex gap-3">
                  {pb.audio_url && (
                    <button onClick={() => togglePlay(pb)}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold transition">
                      {playing === pb.id ? '⏸ עצור' : '▶ האזן'}
                    </button>
                  )}
                  {pb.audio_url && (
                    <a href={pb.audio_url} download
                      className="px-4 py-2 rounded-xl text-white text-sm font-semibold transition hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}>
                      הורד
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
}*/
'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

interface Playback {
  id: string
  title: string
  genre: string
  price: number
  audio_url: string
}

export default function Playbacks() {
  const [playbacks, setPlaybacks] = useState<Playback[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // שליפת הפליבקים מהדאטהבייס
  useEffect(() => {
    async function fetchPlaybacks() {
      const { data } = await supabase
        .from('playbacks')
        .select('*')
        .order('created_at', { ascending: false })
      setPlaybacks(data || [])
      setLoading(false)
    }
    fetchPlaybacks()
  }, [])

  // ניהול מחזור החיים של האודיו ומעבר אוטומטי לפליבק הבא
  useEffect(() => {
    if (currentIndex === null) return
    const pb = playbacks[currentIndex]
    if (!pb?.audio_url) return

    if (audioRef.current) {
      audioRef.current.pause()
    }

    const audio = new Audio(pb.audio_url)
    audioRef.current = audio

    audio.addEventListener('timeupdate', () => {
      setProgress(audio.currentTime)
    })
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })
    audio.addEventListener('ended', () => {
      // מעבר אוטומטי לפליבק הבא ברשימה
      if (currentIndex < playbacks.length - 1) {
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
  }, [currentIndex, playbacks])

  // פונקציית הפעלה ועצירה
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

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0f0f1e]" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-[#FF4B6E]">פליבקים</span>
        </h1>
        <p className="text-gray-400 text-center mb-16">פליבקים מקצועיים לרכישה</p>

        {loading ? (
          <p className="text-center text-gray-400">טוען...</p>
        ) : playbacks.length === 0 ? (
          <p className="text-center text-gray-400">אין פליבקים עדיין</p>
        ) : (
          <div className="space-y-4">
            {playbacks.map((pb, index) => (
              <div 
                key={pb.id}
                onClick={() => togglePlay(index)}
                className={`bg-white/5 border rounded-2xl p-6 transition flex flex-col cursor-pointer ${
                  currentIndex === index ? 'border-[#FF4B6E]/70 bg-white/10' : 'border-white/10 hover:border-[#FF4B6E]/40'
                }`}
              >
                {/* שורה עליונה: כפתור נגן, פרטים וכפתור הזמנה */}
                <div className="flex items-center justify-between gap-4 w-full">
                  
                  <div className="flex items-center gap-4 flex-1">
                    {/* 1. כפתור הפעלה עגול ומעוצב עם SVG */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); togglePlay(index); }}
                      className="w-12 h-12 rounded-full bg-[#FF4B6E] flex items-center justify-center hover:bg-[#e03d5f] transition-all duration-300 text-white shrink-0 shadow-lg shadow-[#FF4B6E]/20"
                    >
                      {currentIndex === index && isPlaying ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-0.5">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>

                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{pb.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {pb.genre && `${pb.genre} • `}
                        {pb.price ? <span className="text-[#FF4B6E] font-semibold">₪{pb.price}</span> : 'חינם'}
                      </p>
                    </div>
                  </div>

                  {/* 2. כפתור להזמנה עם Query Parameter מקודד דינמית */}
                  <div className="flex gap-3 shrink-0" onClick={e => e.stopPropagation()}>
                    <a 
                      href={`/contact?subject=${encodeURIComponent(`מעוניין ברכישת הפלייבק: ${pb.title}`)}`}
                      className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                      style={{ background: 'linear-gradient(135deg, #FF4B6E, #FFB347)' }}
                    >
                      להזמנה
                    </a>
                  </div>
                </div>

                {/* 3. מד התקדמות (Progress Bar) פנימי ואישי - מופיע רק כשהפליבק מתנגן */}
                {currentIndex === index && (
                  <div 
                    className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3 w-full animate-fadeIn"
                    onClick={e => e.stopPropagation()}
                  >
                    <span className="text-gray-400 text-xs w-10 text-left select-none">{formatTime(progress)}</span>
                    
                    {/* קו התקדמות מותאם לחלוטין ל-RTL */}
                    <div 
                      className="flex-1 h-1.5 bg-white/10 rounded-full cursor-pointer relative group"
                      onClick={e => {
                        const rect = e.currentTarget.getBoundingClientRect()
                        // חישוב המיקום לפי כיווניות ימין לשמאל (RTL)
                        const ratio = (rect.right - e.clientX) / rect.width
                        if (audioRef.current) {
                          audioRef.current.currentTime = Math.max(0, Math.min(1, ratio)) * duration
                        }
                      }}
                    >
                      <div 
                        className="h-full bg-[#FF4B6E] rounded-full absolute right-0 top-0 transition-all duration-100 group-hover:bg-[#e03d5f]"
                        style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }} 
                      />
                    </div>
                    
                    <span className="text-gray-400 text-xs w-10 select-none">{formatTime(duration)}</span>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}