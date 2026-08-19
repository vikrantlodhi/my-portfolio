import profile from '../assets/aboutimg.jpeg'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      <div className="w-[90%] mx-auto relative z-10">

        {/* Big statement heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-black leading-[0.95] tracking-tighter max-w-5xl mb-16">
          Turning ideas into <span className="font-script font-normal text-[#5ED9A0]">code</span> that ships.
        </h2>

        {/* Two column: portrait + info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">

          {/* Left - Portrait, no frame */}
          <div className="relative">
  <img
  src={profile}
  alt="Vikrant Lodhi"
  className="w-full max-w-md h-auto object-cover rotate-[-4deg] transition-transform duration-500 border-[0px] border-[#FFF200]"
/>
 <span className="font-script font-bold text-[#FFBB00] text-5xl md:text-7xl absolute -top-8 -right-6 rotate-[-8deg] drop-shadow-lg">
  that's me →
</span>
          </div>

          {/* Right - Body text */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I'm a <span className="text-black font-semibold">Java Developer</span> based in Indore, designing and shipping enterprise-grade applications with Java, Spring Boot, Hibernate, and React.js.
            </p>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I care about clean architecture, performant APIs, and interfaces that feel effortless. On the side, I mentor developers and contribute to open source.
            </p>

            {/* Meta info row */}
            <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <p className="text-gray-600">Based in</p>
                <p className="text-black font-semibold">Indore, India</p>
              </div>
              <div>
                <p className="text-gray-600">Currently</p>
                <p className="text-black font-semibold">Java Developer</p>
              </div>
              <div>
                <p className="text-gray-600">Focus</p>
                <p className="text-black font-semibold">Java · Spring · React</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}