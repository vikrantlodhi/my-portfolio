import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}