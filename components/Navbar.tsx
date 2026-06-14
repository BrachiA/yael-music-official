'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'בית' },
    { href: '/albums', label: 'אלבומים' },
    { href: '/performances', label: 'הופעות' },
    { href: '/playbacks', label: 'פליבקים' },
    { href: '/studio', label: 'סטודיו' },
    { href: '/contact', label: 'צור קשר' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            יעל אנגל ♪
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/admin" className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition text-white font-semibold">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-primary transition font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/admin" className="block w-full text-center px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition text-white font-semibold">
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
