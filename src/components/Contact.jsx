import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, TerminalSquare } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'vinayvrma.21@gmail.com',
      icon: <Mail size={22} className="text-[#00E5FF] group-hover:text-[#020D1D] transition-colors duration-300" />,
      href: 'mailto:vinayvrma.21@gmail.com',
      color: 'from-[#00E5FF]/20 to-transparent'
    },
    {
      name: 'Phone',
      value: '+91 7988331441',
      icon: <Phone size={22} className="text-blue-400 group-hover:text-[#020D1D] transition-colors duration-300" />,
      href: 'tel:+917988331441',
      color: 'from-blue-500/20 to-transparent'
    },
    {
      name: 'LinkedIn',
      value: 'v2vinayverma',
      icon: <Linkedin size={22} className="text-purple-400 group-hover:text-[#020D1D] transition-colors duration-300" />,
      href: 'https://www.linkedin.com/in/v2vinayverma/',
      color: 'from-purple-500/20 to-transparent'
    },
    {
      name: 'GitHub',
      value: 'github.com/V2-VinayVerma',
      icon: <Github size={22} className="text-pink-400 group-hover:text-[#020D1D] transition-colors duration-300" />,
      href: 'https://github.com/V2-VinayVerma',
      color: 'from-pink-500/20 to-transparent'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#020D1D] border-t border-[#071A2C] relative overflow-hidden min-h-screen flex items-center">
      
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_50%,transparent_100%)] opacity-50" />
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[150px] animate-pulse [animation-duration:10s]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TerminalSquare className="text-[#00E5FF]" size={24} />
            <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mt-1">Initialize Connection</h3>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Connect</span>
          </h2>
          <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg md:text-xl font-light">
            Whether you have a question, a project idea, or just want to run some code together—drop a line below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-[#0A2033] shadow-[0_0_40px_rgba(0,0,0,0.5)] h-full relative overflow-hidden group/card text-left">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00E5FF]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <h3 className="text-2xl font-black text-white mb-8 border-b border-[#0A2033] pb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping"></span>
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((link, i) => (
                  <motion.a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center p-4 rounded-2xl bg-[#020D1D]/50 border border-[#0A2033] hover:border-[#00E5FF]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.15)] relative overflow-hidden max-w-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="w-12 h-12 rounded-xl bg-[#0C2A3F] border border-[#071A2C] flex items-center justify-center group-hover:bg-[#00E5FF] group-hover:border-[#00E5FF] transition-all duration-300 relative z-10 shrink-0 shadow-inner">
                      {link.icon}
                    </div>
                    
                    <div className="ml-5 relative z-10 min-w-0">
                      <span className="block text-xs font-mono-custom text-[#8BA3B8] font-bold uppercase tracking-wider mb-1 group-hover:text-[#00E5FF] transition-colors">{link.name}</span>
                      <span className="text-white font-medium text-[15px] sm:text-[17px] group-hover:text-white transition-colors block truncate">{link.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Terminal / Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <form className="bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-[#0A2033] shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col gap-6 relative group/form">
              
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent -translate-x-[100%] group-hover/form:translate-x-[100%] transition-transform duration-[2s] ease-in-out" />
              
              <h3 className="text-2xl font-black text-white mb-4 border-b border-[#0A2033] pb-6">
                Send Message
              </h3>
              
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="name" className="text-xs font-mono-custom font-bold text-[#8BA3B8] uppercase tracking-wider ml-2 group-focus-within:text-[#00E5FF] transition-colors">Identifier</label>
                <div className="relative">
                  <input type="text" id="name" className="w-full bg-[#020D1D]/60 border border-[#0A2033] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#020D1D]/80 transition-all font-mono-custom text-sm peer" placeholder="_john_doe_" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00E5FF] peer-focus:w-[90%] transition-all duration-300" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="email" className="text-xs font-mono-custom font-bold text-[#8BA3B8] uppercase tracking-wider ml-2 group-focus-within:text-[#00E5FF] transition-colors">Return Address</label>
                <div className="relative">
                  <input type="email" id="email" className="w-full bg-[#020D1D]/60 border border-[#0A2033] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#020D1D]/80 transition-all font-mono-custom text-sm peer" placeholder="john@domain.com" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00E5FF] peer-focus:w-[90%] transition-all duration-300" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="message" className="text-xs font-mono-custom font-bold text-[#8BA3B8] uppercase tracking-wider ml-2 group-focus-within:text-[#00E5FF] transition-colors">Payload</label>
                <div className="relative">
                  <textarea id="message" rows="5" className="w-full bg-[#020D1D]/60 border border-[#0A2033] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF] focus:bg-[#020D1D]/80 transition-all font-mono-custom text-sm peer resize-none custom-scrollbar" placeholder="> Enter your message here..."></textarea>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00E5FF] peer-focus:w-[90%] transition-all duration-300" />
                </div>
              </div>
              
              <button type="button" className="mt-6 overflow-hidden relative group/btn flex items-center justify-center gap-3 px-8 py-5 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/40 rounded-xl font-bold font-mono-custom uppercase tracking-wider transition-all duration-300 hover:bg-[#00E5FF] hover:text-[#020D1D] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:border-[#00E5FF] w-full">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover/btn:bg-[position:-200%_0,0_0] group-hover/btn:duration-[1500ms]" />
                <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                <span className="relative z-10">SEND </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
