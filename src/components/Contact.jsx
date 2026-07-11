import { useReveal } from '../hooks/useReveal'
import { Mail, Phone, Send } from 'lucide-react'

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import { personal } from '../data/portfolio'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99441 77193',
    href: `tel:+919944177193`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'kevin-timothy',
    href: personal.linkedin,
    external: true,
  },
]

export default function Contact({ dark }) {
  const ref = useReveal()

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: dark ? '#0d0d0d' : '#f9f9f7' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6758e8' }}>
              Contact
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
            >
              Let's build something
            </h2>
            <p
              className="mt-3 text-base max-w-md mx-auto"
              style={{ color: dark ? '#c3c2b7' : '#52514e' }}
            >
              Open to AI/ML consulting, technical collaborations, and senior engineering roles.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 hover:border-accent-500/50 hover:-translate-y-0.5 group"
                style={{
                  background: dark ? '#1a1a19' : '#ffffff',
                  borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                  boxShadow: dark
                    ? '0 1px 3px rgba(0,0,0,0.3)'
                    : '0 1px 3px rgba(11,11,11,0.05)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: 'rgba(103,88,232,0.10)' }}
                >
                  <Icon size={18} style={{ color: '#6758e8' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium mb-0.5" style={{ color: '#898781' }}>
                    {label}
                  </div>
                  <div
                    className="text-sm font-medium truncate"
                    style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
                  >
                    {value}
                  </div>
                </div>
                <Send
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: '#6758e8' }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
