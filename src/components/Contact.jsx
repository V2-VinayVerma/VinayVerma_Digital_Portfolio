import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0C2A3F] border-t border-[#071A2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="heading-gradient">Touch</span></h2>
          <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg">Interested in working together or have a question? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl border border-[#071A2C] h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#071A2C] pb-4">Contact Details</h3>
              
              <div className="space-y-6">
                <a href="mailto:vinayvrma.21@gmail.com" className="flex items-center gap-4 text-[#C9D1D9] hover:text-[#00E5FF] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0C2A3F] flex items-center justify-center group-hover:bg-primary-900/50 transition-colors">
                    <Mail size={24} className="text-[#00BBD4]" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#8BA3B8] font-semibold mb-1">Email</span>
                    <span className="text-lg">vinayvrma.21@gmail.com</span>
                  </div>
                </a>
                
                <a href="tel:+917988331441" className="flex items-center gap-4 text-[#C9D1D9] hover:text-[#00E5FF] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0C2A3F] flex items-center justify-center group-hover:bg-primary-900/50 transition-colors">
                    <Phone size={24} className="text-[#00BBD4]" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#8BA3B8] font-semibold mb-1">Phone</span>
                    <span className="text-lg">+91 7988331441</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/v2vinayverma/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#C9D1D9] hover:text-[#00E5FF] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0C2A3F] flex items-center justify-center group-hover:bg-primary-900/50 transition-colors">
                    <Linkedin size={24} className="text-[#00BBD4]" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#8BA3B8] font-semibold mb-1">LinkedIn</span>
                    <span className="text-lg">v2vinayverma</span>
                  </div>
                </a>

                <a href="https://github.com/V2-VinayVerma" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#C9D1D9] hover:text-[#00E5FF] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0C2A3F] flex items-center justify-center group-hover:bg-primary-900/50 transition-colors">
                    <Github size={24} className="text-[#00BBD4]" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#8BA3B8] font-semibold mb-1">GitHub</span>
                    <span className="text-lg">github.com/V2-VinayVerma</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-panel p-8 rounded-2xl border border-[#071A2C] flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-[#071A2C] pb-4">Send a Message</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[#8BA3B8]">Your Name</label>
                <input type="text" id="name" className="w-full bg-[#020D1D]/50 border border-[#071A2C] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner" placeholder="John Doe" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[#8BA3B8]">Your Email</label>
                <input type="email" id="email" className="w-full bg-[#020D1D]/50 border border-[#071A2C] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner" placeholder="john@example.com" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#8BA3B8]">Your Message</label>
                <textarea id="message" rows="5" className="w-full bg-[#020D1D]/50 border border-[#071A2C] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              
              <button type="button" className="mt-4 flex items-center justify-center gap-2 px-8 py-4 apple-glass-neon text-white rounded-xl font-bold transition-all duration-300  hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] w-full group">
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
