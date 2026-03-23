import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOT_RESPONSES = {
  greeting: ["Hey! 👋 I'm Vinay's portfolio bot. Ask me anything about his skills, projects, or experience!"],
  skills: ["Vinay is proficient in C++, Python, Java, JavaScript. He works with ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, PostgreSQL, and tools like Git, GitHub, and Vercel."],
  projects: ["Vinay has built: \n1. Jalota Tools - A B2B/B2C e-commerce platform (MERN stack)\n2. MobiMove - A moving company website (HTML, Tailwind, PHP, MySQL)"],
  internship: ["Vinay interned as a UI/UX Intern at Infyntrek Systemes (Sept–Dec 2025), designing onboarding screens for a neobank app using Figma."],
  contact: ["You can reach Vinay at:\n📧 vinayvrma.21@gmail.com\n📱 +91 7988331441\n💼 linkedin.com/in/v2vinayverma\n🐙 github.com/V2-VinayVerma"],
  education: ["Vinay is pursuing B.Tech in CSE at Lovely Professional University (CGPA: 8.31). He completed his schooling at Saraswati Sr. Sec. School with 89% in Intermediate."],
  achievements: ["🏆 Finalist at Infotsav'25 Hackathon (IIITM Gwalior)\n🥈 Silver Badge in C++, Java, Python on HackerRank\n🚀 Selected for Smart India Hackathon 2025 Prototype Round\n⭐ Elite certification in NPTEL Privacy & Security course"],
  default: ["I'm not sure about that, but you can explore the portfolio sections or contact Vinay directly at vinayvrma.21@gmail.com! 😊"],
};

function getResponse(input) {
  const msg = input.toLowerCase();
  if (msg.match(/hi|hello|hey|sup/)) return BOT_RESPONSES.greeting[0];
  if (msg.match(/skill|tech|stack|language|know|code/)) return BOT_RESPONSES.skills[0];
  if (msg.match(/project|work|build|made|create/)) return BOT_RESPONSES.projects[0];
  if (msg.match(/intern|job|experience|company/)) return BOT_RESPONSES.internship[0];
  if (msg.match(/contact|email|phone|reach|linkedin|github/)) return BOT_RESPONSES.contact[0];
  if (msg.match(/education|college|university|school|study|degree/)) return BOT_RESPONSES.education[0];
  if (msg.match(/achiev|award|hackathon|certif|badge|win/)) return BOT_RESPONSES.achievements[0];
  return BOT_RESPONSES.default[0];
}

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! 👋 I'm Vinay's assistant. Ask me about his skills, projects, or how to contact him!" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getResponse(input) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const quickReplies = ['Skills', 'Projects', 'Internship', 'Contact'];

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.3 }}
            className="w-[320px] md:w-[350px] bg-[#020D1D] border border-[#071A2C] rounded-2xl shadow-[0_0_40px_rgba(0,229,255,0.1)] flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] p-4 flex items-center gap-3 text-white">
              <div className="text-2xl bg-black/20 p-2 rounded-full leading-none flex items-center justify-center">🤖</div>
              <div>
                <div className="font-bold tracking-wide text-sm">Vinay's Assistant</div>
                <div className="text-[10px] text-green-300 font-bold tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse blur-[0.5px]"></span>
                  Online
                </div>
              </div>
              
              <a
                href="https://wa.me/917988331441?text=Hi%20Vinay!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-white hover:text-[#25D366] transition-colors p-1"
                title="Chat on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <button 
                className="hover:bg-black/20 p-1.5 rounded-full transition-colors ml-1" 
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Messages Body */}
            <div className="h-72 p-4 overflow-y-auto flex flex-col gap-4 bg-[#020D1D] scrollbar-thin scrollbar-thumb-[#0C2A3F] scrollbar-track-transparent">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] p-3 text-[13px] leading-[1.6] whitespace-pre-line shadow-md ${
                    msg.from === 'bot' 
                      ? 'bg-[#0C2A3F] text-slate-200 rounded-2xl rounded-tl-sm border border-[#071A2C] self-start' 
                      : 'bg-gradient-to-r from-[#00E5FF]/20 to-[#00BBD4]/20 text-white rounded-2xl rounded-tr-sm border border-[#00E5FF]/30 self-end shadow-[0_0_15px_rgba(0,229,255,0.05)]'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="flex flex-wrap gap-2 px-4 pb-3 bg-[#020D1D] pt-1">
              {quickReplies.map(q => (
                <button 
                  key={q} 
                  className="text-[11px] px-3 py-1.5 rounded-full border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors font-mono-custom shadow-sm"
                  onClick={() => {
                    setMessages(prev => [...prev,
                      { from: 'user', text: q },
                      { from: 'bot', text: getResponse(q) }
                    ]);
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#020D1D] border-t border-[#071A2C] flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#0C2A3F] border border-[#071A2C] text-white text-[13px] px-4 py-2.5 rounded-full outline-none focus:border-[#00E5FF]/50 transition-colors placeholder-[#8BA3B8]"
              />
              <button 
                onClick={sendMessage}
                disabled={!input.trim()}
                className="w-10 h-10 flex items-center justify-center bg-[#00E5FF]/10 text-[#00E5FF] rounded-full hover:bg-[#00E5FF]/20 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Button (FAB) */}
      <button 
        className="relative w-14 h-14 apple-glass-neon rounded-full flex items-center justify-center text-white transition-transform z-[10000]" 
        onClick={() => setOpen(!open)} 
        aria-label="Open chatbot"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        {!open && <span className="absolute inset-0 rounded-full border border-[#00E5FF] animate-ping opacity-75"></span>}
      </button>
    </div>
  );
}
