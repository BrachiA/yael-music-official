'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'בית' },
    { href: '/about', label: 'אודות' },
    { href: '/albums', label: 'אלבומים' },
    { href: '/playbacks', label: 'פליבקים' },
    { href: '/performances', label: 'הופעות' },
    { href: '/contact', label: 'צרו קשר' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f1e]/95 backdrop-blur border-b border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-[#FF4B6E]">♪</span> יעל אנגל
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => {
            const isActive = pathname === l.href
            return (
              <Link key={l.href} href={l.href}
                className={`text-sm font-medium pb-1 border-b-2 transition-all duration-200 ${
                  isActive
                    ? 'text-[#FF4B6E] border-[#FF4B6E]'
                    : 'text-gray-300 border-transparent hover:text-white'
                }`}>
                {l.label}
              </Link>
            )
          })}
          <Link href="/admin"
            className="px-4 py-1.5 bg-[#FF4B6E] hover:bg-[#e03d5f] text-white rounded-lg text-sm font-semibold transition">
            Admin
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f0f1e] border-t border-white/10 px-6 py-4 space-y-4">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`block text-sm font-medium transition ${
                pathname === l.href ? 'text-[#FF4B6E]' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/admin"
            className="block text-center px-4 py-2 bg-[#FF4B6E] text-white rounded-lg text-sm font-semibold"
            onClick={() => setIsOpen(false)}>
            Admin
          </Link>
        </div>
      )}
    </nav>
  )
}
