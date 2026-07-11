import { personal } from '../data/portfolio'

export default function Footer({ dark }) {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{
        background: dark ? '#0d0d0d' : '#f9f9f7',
        borderColor: dark ? '#2c2c2a' : '#e1e0d9',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm font-semibold text-gradient">{personal.name}</span>
        <span className="text-xs" style={{ color: '#898781' }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
