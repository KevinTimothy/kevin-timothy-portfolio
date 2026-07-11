import { useReveal } from '../hooks/useReveal'
import { GraduationCap, MapPin, Award, ExternalLink } from 'lucide-react'
import { personal, certifications } from '../data/portfolio'

export default function About({ dark }) {
  const ref = useReveal()

  const cardStyle = {
    background: dark ? '#1a1a19' : '#ffffff',
    borderColor: dark ? '#2c2c2a' : '#e1e0d9',
  }

  return (
    <section id="about" className="py-24 px-6" style={{ background: dark ? '#0d0d0d' : '#f9f9f7' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-14">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#6758e8' }}
            >
              About
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
            >
              The story so far
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Bio */}
            <div>
              <p
                className="text-base leading-loose mb-6"
                style={{ color: dark ? '#c3c2b7' : '#52514e' }}
              >
                I'm an AI/ML Technical Lead at Zeb, Chennai, where I design and ship
                enterprise-grade Generative AI systems across AWS and Azure. My work spans
                multi-agent orchestration frameworks, RAG pipelines, agentic SaaS platforms,
                and production ML deployments — always with a focus on scalable architecture
                and real business impact.
              </p>
              <p
                className="text-base leading-loose"
                style={{ color: dark ? '#c3c2b7' : '#52514e' }}
              >
                I started as an intern building LLM prototypes and grew into leading
                cross-functional teams that architect systems consumed by enterprise clients
                globally. I care deeply about building things that work, that hold up under
                load, and that genuinely solve hard problems.
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm"
                  style={{ ...cardStyle }}
                >
                  <MapPin size={13} style={{ color: '#6758e8' }} />
                  <span style={{ color: dark ? '#c3c2b7' : '#52514e' }}>{personal.location}</span>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm"
                  style={{ ...cardStyle }}
                >
                  <GraduationCap size={13} style={{ color: '#6758e8' }} />
                  <span style={{ color: dark ? '#c3c2b7' : '#52514e' }}>
                    CGPA {personal.education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Education + Certifications */}
            <div className="space-y-5">
              {/* Education card */}
              <div
                className="rounded-xl p-5 border shadow-card"
                style={cardStyle}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(103,88,232,0.12)' }}
                  >
                    <GraduationCap size={17} style={{ color: '#6758e8' }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: dark ? '#ffffff' : '#0b0b0b' }}>
                      {personal.education.degree}
                    </div>
                    <div className="text-sm" style={{ color: dark ? '#c3c2b7' : '#52514e' }}>
                      {personal.education.institution}
                    </div>
                    <div className="text-xs mt-1" style={{ color: '#898781' }}>
                      {personal.education.year} · CGPA {personal.education.cgpa}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certification cards */}
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.badge}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl p-5 border shadow-card transition-all duration-200 hover:scale-[1.01] hover:border-accent-500 group"
                  style={cardStyle}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cert.color}18` }}
                  >
                    <Award size={17} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-semibold leading-snug"
                      style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
                    >
                      {cert.title}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: '#898781' }}>
                      {cert.issuer}
                    </div>
                  </div>
                  <ExternalLink
                    size={13}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#6758e8' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
