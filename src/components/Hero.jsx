export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-[100dvh] pt-16 md:pt-20 bg-[#0a0a0a]">

      {/* Top-left green glow */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-[radial-gradient(circle_at_top_left,rgba(94,217,160,0.15),transparent_70%)] pointer-events-none z-10" />

      {/* Static Repeating Ghost "HELLO" Background Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vh] flex flex-col justify-center pointer-events-none select-none z-0">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className={`flex whitespace-nowrap opacity-40 w-fit ${i % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`}
          >
            {[...Array(30)].map((_, j) => (
              <h2
                key={j}
                className="text-[4rem] sm:text-[6rem] md:text-[8rem] xl:text-[12rem] font-black leading-[0.85] px-4"
                style={{
                  WebkitTextStroke: '2px rgba(94,217,160,0.15)', 
                  color: 'transparent',
                }}
              >
                HELLO
              </h2>
            ))}
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="w-[90%] max-w-7xl mx-auto relative z-20 text-white font-black tracking-tighter flex flex-col justify-center h-full gap-8 sm:gap-10 xl:gap-6">

        {/* DESKTOP ONLY: Absolute floating greetings */}
        <span className="hidden xl:block absolute top-[8%] right-[5%] font-script font-normal text-[#FFD86B] text-7xl rotate-[-8deg]">
          hey there!
        </span>
        <span className="hidden xl:block absolute bottom-[5%] left-[0%] font-script font-normal text-[#FF7EB6] text-7xl rotate-[-5deg]">
          let's create ↗
        </span>

        {/* MOBILE/TABLET ONLY: Top Greeting */}
        <span className="xl:hidden block text-center mb-2 sm:mb-4 font-script font-normal text-[#FFD86B] text-5xl sm:text-6xl md:text-7xl rotate-[-8deg]">
          hey there!
        </span>

        {/* Div 1 - Crafting / Digital */}
        <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 xl:gap-0 leading-none xl:leading-[0.95]">
          <span className="block text-left text-[14vw] md:text-[12vw] xl:text-[8rem]">Crafting</span>
          <span className="block text-right xl:text-left text-[14vw] md:text-[12vw] xl:text-[8rem]">digital</span>
        </div>

        {/* Div 2 - Experiences */}
        <div className="w-full text-center leading-[1] xl:leading-[0.95] py-2 xl:py-4">
          <span className="block text-[12.5vw] md:text-[10.5vw] xl:text-[8rem]">experiences</span>
        </div>

        {/* Div 3 - With Passion / & Precision */}
        <div className="flex flex-col w-full leading-[1.15] xl:leading-[1]">
          <div className="flex items-center justify-start xl:justify-end gap-3 sm:gap-4 text-[13vw] md:text-[11vw] xl:text-[8rem]">
            <span>with</span>
            <span className="inline-block border border-[#5ED9A0]/40 px-3 py-1 xl:px-4 xl:py-1 text-[#5ED9A0] font-script font-normal text-[13vw] md:text-[11vw] xl:text-[7.5rem] rotate-[-3deg]">
              passion
            </span>
          </div>

          <span className="block text-right text-[14vw] md:text-[12vw] xl:text-[8rem] mt-3 xl:mt-2">
            & precision<span className="text-[#5ED9A0]">.</span>
          </span>
        </div>

        {/* MOBILE/TABLET ONLY: Bottom Greeting */}
        <span className="xl:hidden block text-center mt-10 sm:mt-12 font-script font-normal text-[#FF7EB6] text-5xl sm:text-6xl md:text-7xl rotate-[-5deg]">
          let's create ↗
        </span>

      </div>
    </section>
  );
}