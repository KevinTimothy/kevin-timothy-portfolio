import { useReveal } from '../hooks/useReveal'
import { GraduationCap, MapPin } from 'lucide-react'
import { personal } from '../data/portfolio'

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

          <div className="grid md:grid-cols-2 gap-10 items-start">
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

            {/* Education */}
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
