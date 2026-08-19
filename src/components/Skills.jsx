export default function Skills() {
  const skills = [
    { name: 'Java', color: 'text-[#FFFF00]' },         // neon yellow
    { name: 'Spring Boot', color: 'text-[#00FFFF]' },  // neon cyan
    { name: 'Hibernate', color: 'text-[#FF6600]' },    // neon orange
    { name: 'React.js', color: 'text-[#BC13FE]' },     // neon purple
    { name: 'JavaScript', color: 'text-[#39FF14]' },   // neon lime
    { name: 'PostgreSQL', color: 'text-[#FF3131]' },   // neon red
    { name: 'MySQL', color: 'text-[#1E90FF]' },        // neon blue
    { name: 'REST APIs', color: 'text-[#FFA500]' },    // neon amber
    { name: 'Docker', color: 'text-[#00FF7F]' },       // spring green
    { name: 'Kubernetes', color: 'text-[#FFD700]' },   // gold
    { name: 'Git', color: 'text-[#7FFF00]' },          // chartreuse
    { name: 'Maven', color: 'text-[#FF4500]' },        // orange red
    { name: 'CI/CD', color: 'text-[#40E0D0]' },        // turquoise
    { name: 'HTML', color: 'text-[#F0E68C]' },         // khaki
    { name: 'CSS', color: 'text-[#00BFFF]' },          // deep sky blue
    { name: 'Postman', color: 'text-[#FF69B4]' },      // hot pink
    { name: 'Servlets', color: 'text-[#ADFF2F]' },     // green yellow
    { name: 'JSP', color: 'text-[#DA70D6]' },          // orchid
  ]

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="w-[90%] mx-auto relative z-10 mb-16 px-6">

        {/* Heading + Button */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter">
            Fluent in the <br />
            <span className="font-script font-normal text-[#5ED9A0]">craft</span>.
          </h2>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#FFF200] text-black font-semibold px-6 rounded-full text-sm overflow-hidden inline-flex items-center h-12 w-fit"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-12 px-2">
              View My Resume →
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-12 transition-transform duration-500 group-hover:translate-y-0">
              Download PDF ↓
            </span>
          </a>
        </div>

      </div>

      {/* Marquee rows */}
      <div className="space-y-6 relative">
        {/* Row 1 */}
        <div className="flex gap-12 whitespace-nowrap animate-marquee-left">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`r1-${i}`}
              className={`text-6xl md:text-8xl font-black transition-colors duration-300 tracking-tight inline-flex items-center gap-6 ${skill.color} hover:text-white`}
            >
              {skill.name} <span className="text-[#5ED9A0]">✦</span>
            </span>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-12 whitespace-nowrap animate-marquee-right">
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, i) => (
            <span
              key={`r2-${i}`}
              className={`text-6xl md:text-8xl font-black transition-colors duration-300 tracking-tight inline-flex items-center gap-6 ${skill.color} hover:text-white`}
            >
              {skill.name} <span className="text-[#5ED9A0]">/</span>
            </span>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-12 whitespace-nowrap animate-marquee-left-slow">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`r3-${i}`}
              className={`text-6xl md:text-8xl font-black transition-colors duration-300 tracking-tight inline-flex items-center gap-6 ${skill.color} hover:text-white`}
            >
              {skill.name} <span className="text-[#5ED9A0]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}