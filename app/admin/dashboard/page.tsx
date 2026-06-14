'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('songs')
  const router = useRouter()

  useEffect(() => {
    const isAuth = sessionStorage.getItem('admin_authenticated') === 'true'
    if (!isAuth) {
      router.push('/admin')
    } else {
      setAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated')
    router.push('/admin')
  }

  if (!authenticated) {
    return <div className="min-h-screen flex items-center justify-center">טוען...</div>
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="bg-dark/50 border-b border-primary/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-primary/20 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('songs')}
            className={`px-4 py-2 font-semibold whitespace-nowrap transition ${
              activeTab === 'songs'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            שירים
          </button>
          <button
            onClick={() => setActiveTab('performances')}
            className={`px-4 py-2 font-semibold whitespace-nowrap transition ${
              activeTab === 'performances'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            הופעות
          </button>
          <button
            onClick={() => setActiveTab('playbacks')}
            className={`px-4 py-2 font-semibold whitespace-nowrap transition ${
              activeTab === 'playbacks'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            פליבקים
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 font-semibold whitespace-nowrap transition ${
              activeTab === 'messages'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            הודעות
          </button>
        </div>

        {/* Content */}
        <div className="bg-dark/50 border border-primary/30 rounded-lg p-8">
          {activeTab === 'songs' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">ניהול שירים</h2>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg transition font-semibold mb-6">
                + הוסף שיר חדש
              </button>
              <p className="text-gray-400">כאן תוכל להוסיף, לערוך ולמחוק שירים. התחבר ל-Supabase כדי להתחיל.</p>
            </div>
          )}

          {activeTab === 'performances' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">ניהול הופעות</h2>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg transition font-semibold mb-6">
                + הוסף הופעה חדשה
              </button>
              <p className="text-gray-400">כאן תוכל להוסיף, לערוך ולמחוק הופעות. התחבר ל-Supabase כדי להתחיל.</p>
            </div>
          )}

          {activeTab === 'playbacks' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">ניהול Playbacks</h2>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg transition font-semibold mb-6">
                + הוסף Playback חדש
              </button>
              <p className="text-gray-400">כאן תוכל להעלות קבצי backing tracks. התחבר ל-Supabase כדי להתחיל.</p>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">הודעות ממלחים</h2>
              <p className="text-gray-400">הודעות שהתקבלו דרך טופס יצירת הקשר יופיעו כאן.</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">צעד הבא: התחבר ל-Supabase</h3>
          <p className="text-gray-300 text-sm mb-4">
            כדי שדשבורד זה יעבוד באופן מלא, אתה צריך:
          </p>
          <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
            <li>ליצור חשבון ב-Supabase (supabase.com)</li>
            <li>ליצור טבלאות עבור Songs, Performances, Playbacks, Messages</li>
            <li>להוסיף את המפתחות ל-.env.local</li>
            <li>לחזור לעמוד זה והטבלאות יתחברו אוטומטית</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
