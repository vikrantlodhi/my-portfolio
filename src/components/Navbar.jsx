import { useState } from 'react'
import profile from '../assets/profile.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ['About', 'Work', 'Education', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/60 backdrop-blur-xl">
      <div className="w-[90%] mx-auto grid grid-cols-2 xl:grid-cols-3 items-center py-4 md:py-5">

        {/* Left - Full Name */}
        <a href="#" className="text-white font-script font-normal text-3xl md:text-4xl xl:text-5xl tracking-tight leading-none justify-self-start">
          Vikrant Lodhi<span className="text-[#5ED9A0]">.</span>
        </a>

        {/* Center - Nav Menus (desktop only, xl and up) */}
        <ul className="hidden xl:flex items-center gap-1 justify-self-center border border-[#27272a] rounded-full px-2 h-11 bg-white/[0.02]">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="group relative text-sm px-4 rounded-full inline-flex items-center overflow-hidden h-8"
              >
                <span className="block text-[#9ca3af] transition-transform duration-300 group-hover:-translate-y-8">
                  {item}
                </span>
                <span className="absolute left-4 block text-[#5ED9A0] italic font-script text-lg leading-none translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                  {item.toLowerCase()}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Button + Profile (desktop) / Hamburger (mobile+tablet+ipad) */}
        <div className="flex items-center gap-3 justify-self-end">
          <a
            href="#contact"
            className="hidden xl:inline-flex group relative bg-[#5ED9A0] text-black font-semibold px-5 rounded-full text-sm overflow-hidden items-center h-10"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-10">
              Let's Connect
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-10 transition-transform duration-500 group-hover:translate-y-0">
              Say Hello ✦
            </span>
          </a>

          <img
            src={profile}
            alt="Vikrant Lodhi"
            className="hidden xl:block w-10 h-10 rounded-full object-cover border border-[#27272a]"
          />

          {/* Hamburger button (mobile + tablet + ipad) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-[#27272a] rounded-full"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

      </div>

      {/* Mobile + Tablet + iPad menu dropdown */}
      <div className={`xl:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] border-t border-[#27272a]' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center w-[90%] mx-auto py-6 gap-3 text-center">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-[#9ca3af] hover:text-[#5ED9A0] text-lg font-medium py-1 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#5ED9A0] text-black font-semibold px-6 py-2 rounded-full text-sm"
            >
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}