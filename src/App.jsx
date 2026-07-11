import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <div className={dark ? 'dark' : ''}>
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <Experience dark={dark} />
        <Projects dark={dark} />
        <Skills dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  )
}
