import { useReveal } from '../hooks/useReveal'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience({ dark }) {
  const ref = useReveal()

  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ background: dark ? '#111110' : '#ffffff' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6758e8' }}>
              Experience
            </span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: dark ? '#ffffff' : '#0b0b0b' }}>
              Career timeline
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
              style={{ background: dark ? '#2c2c2a' : '#e1e0d9' }}
            />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute left-0 w-10 h-10 rounded-full items-center justify-center border-2"
                    style={{
                      background: exp.current
                        ? 'linear-gradient(135deg, #5647d4, #7c6ef0)'
                        : dark ? '#1a1a19' : '#ffffff',
                      borderColor: exp.current ? '#6758e8' : dark ? '#2c2c2a' : '#e1e0d9',
                    }}
                  >
                    <Briefcase size={14} style={{ color: exp.current ? '#ffffff' : '#898781' }} />
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-6 border transition-all duration-200 hover:border-accent-500/40"
                    style={{
                      background: dark ? '#1a1a19' : '#fcfcfb',
                      borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                      boxShadow: dark
                        ? '0 1px 3px rgba(0,0,0,0.3)'
                        : '0 1px 3px rgba(11,11,11,0.05)',
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
                        >
                          {exp.title}
                        </h3>
                        <div className="text-sm font-medium mt-0.5" style={{ color: '#6758e8' }}>
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: 'rgba(103,88,232,0.12)',
                              color: '#6758e8',
                            }}
                          >
                            Current
                          </span>
                        )}
                        <span className="text-xs" style={{ color: '#898781' }}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: dark ? '#c3c2b7' : '#52514e' }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
