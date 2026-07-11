import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Tag, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { projects } from '../data/portfolio'

const filters = ['All', 'Production', 'POC', 'Demo']

const typeColors = {
  Production: { bg: 'rgba(12,163,12,0.10)', text: '#0ca30c', border: 'rgba(12,163,12,0.25)' },
  POC:        { bg: 'rgba(103,88,232,0.10)', text: '#6758e8', border: 'rgba(103,88,232,0.25)' },
  Demo:       { bg: 'rgba(235,104,52,0.10)', text: '#eb6834', border: 'rgba(235,104,52,0.25)' },
}

function ProjectCard({ project, dark, index }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useReveal(0.08)

  const cardBg = dark ? '#1a1a19' : '#ffffff'
  const borderCol = dark ? '#2c2c2a' : '#e1e0d9'
  const tc = typeColors[project.type]

  const descShort = project.description.length > 140
    ? project.description.slice(0, 140) + '…'
    : project.description
  const needsExpand = project.description.length > 140

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 4) + 1} rounded-2xl p-5 border group transition-all duration-200 hover:border-accent-500/40 hover:-translate-y-0.5`}
      style={{
        background: cardBg,
        borderColor: project.highlight ? 'rgba(103,88,232,0.35)' : borderCol,
        boxShadow: dark
          ? '0 1px 3px rgba(0,0,0,0.35)'
          : '0 1px 3px rgba(11,11,11,0.05), 0 4px 12px rgba(11,11,11,0.04)',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium border"
            style={{ background: tc.bg, color: tc.text, borderColor: tc.border }}
          >
            {project.type}
          </span>
          <span className="text-xs" style={{ color: '#898781' }}>
            {project.domain}
          </span>
        </div>
        {project.highlight && (
          <Star
            size={14}
            fill="#6758e8"
            style={{ color: '#6758e8', flexShrink: 0 }}
          />
        )}
      </div>

      {/* Title */}
      <h3
        className="text-base font-semibold leading-snug mb-2.5"
        style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4" style={{ color: dark ? '#c3c2b7' : '#52514e' }}>
        {expanded ? project.description : descShort}
      </p>
      {needsExpand && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="text-xs font-medium flex items-center gap-1 mb-4 transition-colors hover:opacity-80"
          style={{ color: '#6758e8' }}
        >
          {expanded ? <><ChevronUp size={12} />Show less</> : <><ChevronDown size={12} />Read more</>}
        </button>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 6).map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md"
            style={{
              background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(11,11,11,0.05)',
              color: dark ? '#c3c2b7' : '#52514e',
            }}
          >
            <Tag size={9} />
            {tag}
          </span>
        ))}
        {project.tags.length > 6 && (
          <span
            className="text-xs px-2 py-0.5 rounded-md"
            style={{
              background: dark ? 'rgba(103,88,232,0.10)' : 'rgba(103,88,232,0.08)',
              color: '#6758e8',
            }}
          >
            +{project.tags.length - 6} more
          </span>
        )}
      </div>
    </div>
  )
}

export default function Projects({ dark }) {
  const [active, setActive] = useState('All')
  const headerRef = useReveal()

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

  return (
    <section id="projects" className="py-24 px-6" style={{ background: dark ? '#0d0d0d' : '#f9f9f7' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6758e8' }}>
            Work
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-2">
            <h2 className="text-4xl font-bold" style={{ color: dark ? '#ffffff' : '#0b0b0b' }}>
              Projects
            </h2>

            {/* Filter tabs */}
            <div
              className="flex gap-1 p-1 rounded-xl border"
              style={{
                background: dark ? '#1a1a19' : '#ffffff',
                borderColor: dark ? '#2c2c2a' : '#e1e0d9',
              }}
            >
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={
                    active === f
                      ? {
                          background: 'linear-gradient(135deg, #5647d4, #7c6ef0)',
                          color: '#ffffff',
                        }
                      : {
                          background: 'transparent',
                          color: dark ? '#898781' : '#898781',
                        }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-3 text-sm" style={{ color: '#898781' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''} ·{' '}
            <span style={{ color: '#6758e8' }}>★ starred</span> are flagship builds
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} dark={dark} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
