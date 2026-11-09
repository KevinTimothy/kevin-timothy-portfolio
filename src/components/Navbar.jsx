import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = dark
    ? scrolled ? 'bg-[#0d0d0d]/90 border-[#2c2c2a]' : 'bg-transparent border-transparent'
    : scrolled ? 'bg-[#f9f9f7]/90 border-[#e1e0d9]' : 'bg-transparent border-transparent'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${bg}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight"
          style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
        >
          <span className="text-gradient">KT</span>
          <span className={dark ? 'text-[#c3c2b7]' : 'text-[#52514e]'}> ·</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  dark ? 'text-[#c3c2b7]' : 'text-[#52514e]'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border ${
              dark
                ? 'bg-[#1a1a19] border-[#2c2c2a] text-[#c3c2b7] hover:border-accent-500 hover:text-accent-400'
                : 'bg-white border-[#e1e0d9] text-[#52514e] hover:border-accent-500 hover:text-accent-500'
            }`}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
              dark
                ? 'bg-[#1a1a19] border-[#2c2c2a] text-[#c3c2b7]'
                : 'bg-white border-[#e1e0d9] text-[#52514e]'
            }`}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden border-t ${
            dark ? 'bg-[#0d0d0d]/95 border-[#2c2c2a]' : 'bg-[#f9f9f7]/95 border-[#e1e0d9]'
          }`}
        >
          <ul className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                    dark ? 'text-[#c3c2b7]' : 'text-[#52514e]'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
