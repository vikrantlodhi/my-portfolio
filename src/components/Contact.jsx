import { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')
    const formData = new FormData(event.target)
    formData.append('access_key', '1fe31c14-4da0-4767-9331-80228bef953e')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      setResult('✓ Message sent successfully!')
      event.target.reset()
    } else {
      setResult('✗ ' + data.message)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0a0a0a]">
      <div className="w-[90%] mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
              Let's build <br />
              something <span className="font-script font-normal text-[#5ED9A0]">worth</span> shipping.
            </h2>

            <p className="text-[#9ca3af] text-lg leading-relaxed mb-12 max-w-md">
              Have an idea, project, or opportunity in mind? Drop a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#5ED9A0] font-mono text-xs tracking-widest w-20">EMAIL</span>
                <a href="mailto:vikrantlodhi3782@gmail.com" className="text-white hover:text-[#5ED9A0] transition">
                  vikrantlodhi3782@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#5ED9A0] font-mono text-xs tracking-widest w-20">LOCATION</span>
                <span className="text-white">Indore, India</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={onSubmit} className="space-y-6">

            <div>
              <label className="block text-[#5ED9A0] font-mono text-xs tracking-widest mb-2">NAME</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-transparent border-b border-[#27272a] py-3 text-white text-lg focus:border-[#5ED9A0] focus:outline-none transition placeholder:text-[#4b5563]"
              />
            </div>

            <div>
              <label className="block text-[#5ED9A0] font-mono text-xs tracking-widest mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-[#27272a] py-3 text-white text-lg focus:border-[#5ED9A0] focus:outline-none transition placeholder:text-[#4b5563]"
              />
            </div>

            <div>
              <label className="block text-[#5ED9A0] font-mono text-xs tracking-widest mb-2">SUBJECT</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full bg-transparent border-b border-[#27272a] py-3 text-white text-lg focus:border-[#5ED9A0] focus:outline-none transition placeholder:text-[#4b5563]"
              />
            </div>

            <div>
              <label className="block text-[#5ED9A0] font-mono text-xs tracking-widest mb-2">MESSAGE</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project or idea..."
                className="w-full bg-transparent border-b border-[#27272a] py-3 text-white text-lg focus:border-[#5ED9A0] focus:outline-none transition placeholder:text-[#4b5563] resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#5ED9A0] text-black font-semibold px-8 h-12 rounded-full text-sm hover:opacity-90 transition"
            >
              Send Message →
            </button>

            {result && (
              <p className="text-[#5ED9A0] text-sm mt-4">{result}</p>
            )}

          </form>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#9ca3af] text-sm">
            © 2025 · Crafted with intent & chai.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://linkedin.com/in/vikrant-lodhi" target="_blank" rel="noopener noreferrer" className="group text-[#9ca3af] hover:text-[#5ED9A0] transition inline-flex items-center gap-1">
              LinkedIn <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↗</span>
            </a>
            <a href="https://github.com/vikrantlodhi" target="_blank" rel="noopener noreferrer" className="group text-[#9ca3af] hover:text-[#5ED9A0] transition inline-flex items-center gap-1">
              GitHub <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↗</span>
            </a>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="group text-[#9ca3af] hover:text-[#5ED9A0] transition inline-flex items-center gap-1">
              Back to top <span className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">↑</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}