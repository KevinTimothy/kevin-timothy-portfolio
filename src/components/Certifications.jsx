import { useReveal } from '../hooks/useReveal'
import { ExternalLink, ShieldCheck } from 'lucide-react'
import { certifications } from '../data/portfolio'

const issuerMeta = {
  AWS: {
    label: 'Amazon Web Services',
    bg: 'rgba(255,153,0,0.10)',
    border: 'rgba(255,153,0,0.25)',
    text: '#FF9900',
    logoBg: 'rgba(255,153,0,0.12)',
  },
  Databricks: {
    label: 'Databricks',
    bg: 'rgba(255,54,33,0.08)',
    border: 'rgba(255,54,33,0.22)',
    text: '#FF3621',
    logoBg: 'rgba(255,54,33,0.12)',
  },
  Anthropic: {
    label: 'Anthropic',
    bg: 'rgba(201,106,46,0.08)',
    border: 'rgba(201,106,46,0.22)',
    text: '#c96a2e',
    logoBg: 'rgba(201,106,46,0.12)',
  },
}

export default function Certifications({ dark }) {
  const ref = useReveal()

  const cardBase = {
    background: dark ? '#1a1a19' : '#ffffff',
    borderColor: dark ? '#2c2c2a' : '#e1e0d9',
  }

  return (
    <section
      id="certifications"
      className="py-24 px-6"
      style={{ background: dark ? '#0d0d0d' : '#f9f9f7' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6758e8' }}>
              Credentials
            </span>
            <div className="flex items-end gap-4 mt-2">
              <h2 className="text-4xl font-bold" style={{ color: dark ? '#ffffff' : '#0b0b0b' }}>
                Certifications
              </h2>
              <span
                className="mb-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(103,88,232,0.12)', color: '#6758e8' }}
              >
                {certifications.length} earned
              </span>
            </div>
            <p className="mt-2 text-sm" style={{ color: dark ? '#898781' : '#898781' }}>
              Industry-recognised certifications across cloud, AI, and agentic systems.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {certifications.map((cert, i) => {
              const meta = issuerMeta[cert.issuerShort] || issuerMeta.AWS
              return (
                <a
                  key={i}
                  href={cert.badge}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl p-5 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col gap-4"
                  style={{
                    ...cardBase,
                    boxShadow: dark
                      ? '0 1px 3px rgba(0,0,0,0.4)'
                      : '0 1px 3px rgba(11,11,11,0.06), 0 4px 16px rgba(11,11,11,0.05)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
                  />

                  {/* Issuer badge + verify icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
                      style={{ background: meta.bg, borderColor: meta.border, color: meta.text }}
                    >
                      <ShieldCheck size={11} />
                      {cert.issuerShort}
                    </div>
                    <ExternalLink
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#6758e8' }}
                    />
                  </div>

                  {/* Logo circle */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                    style={{ background: meta.logoBg, color: cert.color }}
                  >
                    {cert.issuerShort === 'AWS' ? '☁' : cert.issuerShort === 'Databricks' ? '⟡' : '◈'}
                  </div>

                  {/* Title + issuer */}
                  <div className="flex-1">
                    <div
                      className="text-sm font-bold leading-snug"
                      style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
                    >
                      {cert.title}
                    </div>
                    <div className="text-xs mt-1.5" style={{ color: '#898781' }}>
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Verify link */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-medium mt-auto pt-3 border-t"
                    style={{ borderColor: dark ? '#2c2c2a' : '#e1e0d9', color: '#6758e8' }}
                  >
                    <ShieldCheck size={12} />
                    Verify on Credly
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
