export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institute: 'Truba College of Science and Technology',
      location: 'Bhopal, Madhya Pradesh',
      duration: 'Oct 2021 — May 2025',
      gpa: '7.29',
      courses: ['Object Oriented Programming', 'Database & DBMS', 'Internet and Web Technologies'],
    },
  ]

  return (
    <section id="education" className="scroll-mt-24 relative min-h-[100dvh] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden bg-white">
      <div className="w-[90%] mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-center md:text-left mx-auto md:mx-0 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-black leading-[0.95] tracking-tighter mb-20 max-w-4xl">
          Where I <span className="font-script font-normal text-[#5ED9A0]">learned </span>to think.
        </h2>

        {/* Education entries */}
        {education.map((edu, idx) => (
          <div key={idx} className="relative border-t-2 border-black pt-10">

            {/* Top row: year badge + GPA */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <span className="bg-black text-white font-mono text-sm tracking-widest px-4 py-2 rounded-full">
                {edu.duration}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-500 text-sm">GPA</span>
                <span className="text-black font-black text-3xl">{edu.gpa}</span>
                <span className="text-gray-400 text-sm">/ 10</span>
              </div>
            </div>

            {/* Main content: institute name huge, then details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

              {/* Left - Institute name huge */}
              <div className="md:col-span-7">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[0.95] tracking-tight">
                  {edu.institute}
                </h3>
                <p className="text-gray-600 text-lg mt-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {edu.location}
                </p>
              </div>

              {/* Right - Degree info */}
              <div className="md:col-span-5">
                <p className="text-gray-500 text-xs tracking-widest mb-2">DEGREE</p>
                <p className="text-black font-black text-xl">{edu.degree}</p>

                <p className="text-gray-500 text-xs tracking-widest mt-6 mb-2">MAJOR</p>
                <p className="text-black text-lg">{edu.field}</p>
              </div>

            </div>

            {/* Courses row - full width */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-xs tracking-widest mb-4">KEY COURSEWORK</p>
              <div className="flex flex-wrap gap-3">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    className="text-black font-medium text-base border-2 border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}