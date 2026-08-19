export default function Hero() {
  return (
    <section className="relative flex overflow-hidden px-6">
  

      {/* Top-left green glow */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle_at_top_left,rgba(94,217,160,0.15),transparent_70%)] pointer-events-none" />

      {/* Ghost Word Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2
          className="text-[6rem] sm:text-[10rem] md:text-[15rem] xl:text-[25rem] font-black leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: '2px rgba(239,68,68,0.35)',
            color: 'transparent',
          }}
        >
          HELLO
        </h2>
      </div>

      <div className="w-[90%] mx-auto relative z-10 text-white font-black tracking-tighter leading-[1] xl:leading-[0.85] flex flex-col justify-center min-h-screen gap-16 md:gap-20 xl:gap-0">

        {/* Div 1 - Left */}
        <div className="relative text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-9xl">
            Crafting <br /> digital
          </h1>
          <span className="block mt-4 xl:mt-0 xl:absolute xl:top-12 xl:right-16 font-script font-normal text-[#FFD86B] text-3xl sm:text-4xl md:text-5xl xl:text-7xl rotate-[-8deg]">
            hey there!
          </span>
        </div>

        {/* Div 2 - Center */}
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-9xl">experiences</h1>
        </div>

        {/* Div 3 - Right */}
        <div className="relative text-right">
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-9xl flex items-baseline gap-3 sm:gap-4 flex-wrap justify-end leading-[1.1] xl:leading-[0.85]">
            <span>with</span>
            <span className="inline-block border border-[#5ED9A0]/40 px-3 sm:px-4 py-1 text-[#5ED9A0] font-script font-normal text-4xl sm:text-5xl md:text-6xl xl:text-8xl rotate-[-3deg]">
              passion
            </span>
            <span>& precision<span className="text-[#5ED9A0]">.</span></span>
          </h1>
          <span className="block mt-4 xl:mt-0 xl:absolute xl:bottom-2 xl:left-16 font-script font-normal text-[#FF7EB6] text-3xl sm:text-4xl md:text-5xl xl:text-7xl rotate-[-5deg] text-left">
            let's create ↗
          </span>
        </div>

      </div>
    </section>
  );
}