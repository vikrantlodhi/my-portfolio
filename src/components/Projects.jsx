export default function Projects() {
  const projects = [
    {
      title: 'Smart Portfolio Analyzer',
      tagline: 'Stock analysis & investment tracking platform',
      description: 'Real-time market insights that help users track investments, monitor portfolios, and visualize trends through interactive charts.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'Hibernate'],
      live: '#',
      github: '#',
    },
    {
      title: 'Sniptyle',
      tagline: 'Open source learning platform',
      description: 'A beginner-friendly platform for learning programming languages, web technologies, and databases from scratch.',
      tech: ['React', 'Spring Boot', 'Hibernate', 'PostgreSQL'],
      live: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-24 relative py-8 md:py-10 px-6 overflow-hidden bg-white">
      <div className="w-[90%] mx-auto relative z-10">

        {/* Heading - right aligned */}
        <div className="mb-20 flex justify-end">
         <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-black leading-[0.95] tracking-tighter text-right">
  Every project is a <br />
  new <span className="font-script font-normal text-[#5ED9A0]"> experiment </span>in code.
</h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-[#0a0a0a] text-white p-8 md:p-10 rounded-3xl overflow-hidden"
            >
              

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-[#5ED9A0] text-sm mt-3 font-medium">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-[#9ca3af] text-base leading-relaxed mt-6">
                {project.description}
              </p>

              {/* Tech row */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#9ca3af] mt-8 pt-6 border-t border-white/10">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {/* Bottom: Live + GitHub links */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5ED9A0] text-black font-semibold px-4 py-2 rounded-full text-sm"
                >
                  Live Demo →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#27272a] text-white font-semibold px-4 py-2 rounded-full text-sm"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}