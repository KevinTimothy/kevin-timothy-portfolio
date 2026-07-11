import { useEffect, useRef } from 'react'
import { ArrowDown, Mail } from 'lucide-react'

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import { personal } from '../data/portfolio'

export default function Hero({ dark }) {
  const canvasRef = useRef(null)

  // Particle field background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const count = 55
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = dark ? '103, 88, 232' : '86, 71, 212'

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${color}, ${0.12 * (1 - dist / 110)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [dark])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: dark ? '#0d0d0d' : '#f9f9f7' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(103,88,232,0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(103,88,232,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{
                background: dark ? 'rgba(103,88,232,0.12)' : 'rgba(103,88,232,0.08)',
                borderColor: dark ? 'rgba(103,88,232,0.3)' : 'rgba(103,88,232,0.2)',
                color: dark ? '#9485f5' : '#5647d4',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Open to opportunities
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4"
              style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
            >
              {personal.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="text-gradient">{personal.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p
              className="text-xl font-semibold mb-4"
              style={{ color: dark ? '#9485f5' : '#5647d4' }}
            >
              {personal.role}
            </p>

            <p
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: dark ? '#c3c2b7' : '#52514e' }}
            >
              {personal.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-glow"
                style={{ background: 'linear-gradient(135deg, #5647d4, #7c6ef0)' }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                  color: dark ? '#c3c2b7' : '#52514e',
                  background: dark ? '#1a1a19' : '#ffffff',
                }}
              >
                Get in Touch
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:scale-105 hover:border-accent-500"
                style={{
                  borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                  color: dark ? '#c3c2b7' : '#52514e',
                  background: dark ? '#1a1a19' : '#ffffff',
                }}
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:scale-105 hover:border-accent-500"
                style={{
                  borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                  color: dark ? '#c3c2b7' : '#52514e',
                  background: dark ? '#1a1a19' : '#ffffff',
                }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-40"
                style={{ background: 'linear-gradient(135deg, #5647d4, #9485f5)', transform: 'scale(1.05)' }}
              />
              {/* Animated border */}
              <div
                className="relative rounded-2xl p-0.5"
                style={{ background: 'linear-gradient(135deg, #5647d4, #9485f5, #5647d4)', backgroundSize: '200% 200%' }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ width: 320, height: 380 }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Kevin Timothy J"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badge — years of exp */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl shadow-lg border"
                style={{
                  background: dark ? '#1a1a19' : '#ffffff',
                  borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                }}
              >
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-xs" style={{ color: dark ? '#898781' : '#898781' }}>
                  Years in AI/ML
                </div>
              </div>

              {/* Floating badge — projects */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl shadow-lg border"
                style={{
                  background: dark ? '#1a1a19' : '#ffffff',
                  borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                }}
              >
                <div className="text-2xl font-bold text-gradient">14+</div>
                <div className="text-xs" style={{ color: dark ? '#898781' : '#898781' }}>
                  Projects Built
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: dark ? '#898781' : '#898781' }}>
            Scroll
          </span>
          <ArrowDown size={14} style={{ color: dark ? '#898781' : '#898781' }} />
        </div>
      </div>
    </section>
  )
}
