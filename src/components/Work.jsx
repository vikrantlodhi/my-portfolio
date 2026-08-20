export default function Work() {
  const experiences = [
    {
      company: 'SSi Digital Academy',
      role: 'Java Developer + Instructor',
      type: 'Full-time · Onsite',
      location: 'Indore, Madhya Pradesh',
      duration: 'June 2025 — Present',
      description: 'Training aspiring developers in programming languages and tools while creating course content and providing hands-on mentorship.',
      highlights: [
        'Conducted sessions on core programming languages and development tools',
        'Designed and updated assignments, lab exercises, and coding challenges',
        'Guided students through debugging, troubleshooting, and real-world scenarios',
        'Helped multiple batches build strong foundations and advance their careers',
      ],
    },
    {
      company: 'InnoBimb InfoTech',
      role: 'Junior Developer',
      type: 'Internship · Onsite',
      location: 'Bhopal, Madhya Pradesh',
      duration: 'April 2025 — May 2025',
      description: 'Developed responsive web apps using React.js, fixed bugs, optimized performance, and collaborated with teams using Git version control.',
      highlights: [
        'Built and maintained web apps using React.js and Node.js for client projects',
        'Created user-friendly, responsive interfaces for enhanced user experience',
        'Resolved issues and enhanced application efficiency',
        'Used Git and GitHub for code management and team coordination',
      ],
    },
  ]

  return (
    <section id="work" className="scroll-mt-24 relative py-24 md:py-32 px-6 overflow-hidden bg-[#0a0a0a]">
      <div className="w-[90%] mx-auto relative z-10">

        {/* Heading centered */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter">
            Where I've 
            <span className="font-script font-normal text-[#5ED9A0]"> shipped </span> work.
          </h2>
         
        </div>

        {/* Experience timeline */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 group border-l-2 border-[#27272a] hover:border-[#5ED9A0] pl-8 transition-colors duration-500"
            >
              <div className="md:col-span-3">
                <p className="text-[#5ED9A0] font-mono text-sm tracking-widest">
                  {exp.duration}
                </p>
                <p className="text-[#9ca3af] text-sm mt-2">{exp.type}</p>
                <p className="text-[#9ca3af] text-sm">{exp.location}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-white text-3xl md:text-4xl font-black tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-[#5ED9A0] text-lg mt-2 font-medium">
                  @ {exp.company}
                </p>

                <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed mt-6">
                  {exp.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[#9ca3af]">
                      <span className="text-[#5ED9A0] mt-1.5">◆</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}