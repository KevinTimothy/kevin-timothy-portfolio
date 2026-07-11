import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/portfolio'

const categoryIcons = {
  'AI & GenAI':            '🤖',
  'Cloud & Infra':         '☁️',
  'Backend':               '⚙️',
  'Frontend':              '🖥️',
  'Data & Messaging':      '🗄️',
  'MLOps & Observability': '📊',
}

// Each category gets a subtle accent from the validated palette
const categoryAccents = {
  'AI & GenAI':            '#6758e8',
  'Cloud & Infra':         '#1baf7a',
  'Backend':               '#eda100',
  'Frontend':              '#4a3aa7',
  'Data & Messaging':      '#1baf7a',
  'MLOps & Observability': '#eb6834',
}

export default function Skills({ dark }) {
  const ref = useReveal()

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: dark ? '#111110' : '#ffffff' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6758e8' }}>
              Skills
            </span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: dark ? '#ffffff' : '#0b0b0b' }}>
              Tech stack
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], ci) => {
              const accent = categoryAccents[category]
              return (
                <div
                  key={category}
                  className="rounded-2xl p-5 border"
                  style={{
                    background: dark ? '#1a1a19' : '#fcfcfb',
                    borderColor: dark ? '#2c2c2a' : '#e1e0d9',
                    boxShadow: dark
                      ? '0 1px 3px rgba(0,0,0,0.3)'
                      : '0 1px 3px rgba(11,11,11,0.05)',
                  }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                      style={{ background: `${accent}15` }}
                    >
                      {categoryIcons[category]}
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: dark ? '#ffffff' : '#0b0b0b' }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all duration-150 hover:scale-105 cursor-default"
                        style={{
                          background: dark
                            ? `${accent}18`
                            : `${accent}0f`,
                          color: dark ? adjustHex(accent, 0.75) : accent,
                          border: `1px solid ${accent}25`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Lighten hex for dark mode text (simple pass-through, accent is legible)
function adjustHex(hex, _) {
  return hex
}
