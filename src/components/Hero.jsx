import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    // Section uses flex items-center to perfectly center the inner content vertically
    <section className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 h-[100dvh] pt-16 md:pt-20">

      {/* Top-left green glow */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-[radial-gradient(circle_at_top_left,rgba(94,217,160,0.15),transparent_70%)] pointer-events-none" />

      {/* Ghost Word Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <h2
          className="text-[25vw] md:text-[15rem] xl:text-[25rem] font-black leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: '2px rgba(239,68,68,0.35)',
            color: 'transparent',
          }}
        >
          HELLO
        </h2>
      </motion.div>

      {/* Inner container simply stacks the content with gaps */}
      <div className="w-[95%] md:w-[90%] w-full relative z-10 text-white font-black tracking-tighter leading-[1.1] md:leading-[1] xl:leading-[0.85] flex flex-col gap-8 sm:gap-12 md:gap-16 xl:gap-0">

        {/* Div 1 - Left on Desktop, Center on Mobile/Tablet */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative text-center xl:text-left flex flex-col items-center xl:block"
        >
          {/* Greeting moved ABOVE the heading for mobile/tablet */}
          <span className="block mb-6 sm:mb-8 md:mb-12 xl:mb-0 xl:absolute xl:top-12 xl:right-16 font-script font-normal text-[#FFD86B] text-4xl sm:text-5xl md:text-6xl xl:text-7xl rotate-[-8deg]">
            hey there!
          </span>

          <h1 className="text-[11vw] sm:text-7xl md:text-8xl xl:text-9xl">
            Crafting <br className="hidden xl:block" /> <span className="xl:hidden"><br />digital</span>
            <span className="hidden xl:inline">digital</span>
          </h1>
        </motion.div>

        {/* Div 2 - Center */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center"
        >
          <h1 className="text-[11vw] sm:text-7xl md:text-8xl xl:text-9xl">experiences</h1>
        </motion.div>

        {/* Div 3 - Right on Desktop, Center on Mobile/Tablet */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative text-center xl:text-right flex flex-col items-center xl:block"
        >
          <h1 className="text-[11vw] sm:text-7xl md:text-8xl xl:text-9xl flex items-baseline gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center xl:justify-end leading-[1.2] md:leading-[1.1] xl:leading-[0.85]">
            <span>with</span>
            <span className="inline-block border border-[#5ED9A0]/40 px-3 md:px-4 py-0.5 md:py-1 text-[#5ED9A0] font-script font-normal text-[9vw] sm:text-6xl md:text-7xl xl:text-8xl rotate-[-3deg]">
              passion
            </span>
            <span>& precision<span className="text-[#5ED9A0]">.</span></span>
          </h1>

          <span className="block mt-8 sm:mt-10 md:mt-12 xl:mt-0 xl:absolute xl:bottom-2 xl:left-16 font-script font-normal text-[#FF7EB6] text-4xl sm:text-5xl md:text-6xl xl:text-7xl rotate-[-5deg]">
            let's create ↗
          </span>
        </motion.div>

      </div>
    </section>
  );
}