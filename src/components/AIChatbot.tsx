import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  Send, 
  X, 
  RefreshCw, 
  Bot, 
  Sparkles, 
  ExternalLink,
  Hammer
} from "lucide-react";
import { CONTACT_DATA } from "../data";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string; // Stored as ISO string to handle localStorage cleanly
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessageAlert, setHasNewMessageAlert] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history or initialize
  useEffect(() => {
    const saved = localStorage.getItem("jaya_abadi_chat_history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
      } catch (e) {
        initializeFirstMessage();
      }
    } else {
      initializeFirstMessage();
    }
  }, []);

  // Save chat history on update
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("jaya_abadi_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Show a pulsing notification badge to attract attention initially after 5 seconds if not open
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length <= 1) {
        setHasNewMessageAlert(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, messages]);

  const initializeFirstMessage = () => {
    const firstMsg: ChatMessage = {
      id: "welcome",
      role: "assistant",
      text: "Halo Kak! Selamat datang di Jaya Abadi Semarang. Saya **Abdi**, asisten virtual Anda.\n\nSaya bisa membantu menginformasikan mengenai:\n• Jasa **Waterproofing** (pelapis anti-bocor untuk dak atap beton / kanopi / balkon / kamar mandi)\n• Jasa **Injeksi Beton** (menghentikan rembesan aktif basement / kolam / bak air dengan mesin injeksi resin PU bertekanan tinggi s.d 400 bar)\n• Layanan **Survei Lokasi GRATIS** untuk wilayah Kota Semarang & sekitarnya\n• Ketentuan **Garansi Resmi Tertulis 1 s.d 2 Tahun** kami\n\nAda yang bisa saya bantu jelaskan hari ini?",
      timestamp: new Date().toISOString()
    };
    setMessages([firstMsg]);
    localStorage.setItem("jaya_abadi_chat_history", JSON.stringify([firstMsg]));
  };

  const clearChat = () => {
    if (window.confirm("Apakah Anda ingin menghapus semua percakapan?")) {
      localStorage.removeItem("jaya_abadi_chat_history");
      initializeFirstMessage();
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputValue.trim();
    if (!messageText) return;

    if (!textToSend) {
      setInputValue("");
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: messageText,
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Gagal memanggil API asisten AI.");
      }

      const data = await response.json();
      
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: data.text || "Mohon maaf, terjadi gangguan saat memproses tanggapan.",
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: "Koneksi asisten AI sedang terputus sementara. Namun, Bapak/Ibu dapat langsung berkonsultasi mengenai perbaikan bocor / survei gratis dengan admin teknis kami via WhatsApp klik di sini: [Hubungi WhatsApp Kami](https://wa.me/6285869012339).",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPromptClick = (promptText: string) => {
    handleSendMessage(promptText);
  };

  // Custom text formatter to support markdown-like bold and links
  const formatMessageText = (text: string) => {
    return text.split("\n").map((line, idx) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const content = parts.map((part, pIdx) => {
        if (pIdx % 2 === 1) {
          return (
            <strong key={pIdx} className="font-bold text-slate-900 bg-brand-safety-yellow/15 px-1 py-0.5 rounded border border-brand-safety-yellow/30">
              {part}
            </strong>
          );
        }
        
        // Match link format [text](url)
        const linkParts = part.split(/\[(.*?)\]\((.*?)\)/g);
        if (linkParts.length > 1) {
          return linkParts.map((sub, sIdx) => {
            if (sIdx % 3 === 1) {
              return null; // will render in next chunk as anchor text
            }
            if (sIdx % 3 === 2) {
              const linkText = linkParts[sIdx - 1];
              return (
                <a 
                  key={sIdx} 
                  href={sub} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-blue-light hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 my-1 border border-blue-200 transition-all shadow-sm"
                >
                  {linkText} <ExternalLink size={11} />
                </a>
              );
            }
            return sub;
          });
        }
        return part;
      });
      return (
        <div key={idx} className="min-h-[1.25rem] leading-relaxed">
          {content}
        </div>
      );
    });
  };

  const quickPrompts = [
    { label: "❓ Beda Waterproofing & Injeksi?", text: "Apa perbedaan jasa waterproofing dan injeksi beton di Jaya Abadi?" },
    { label: "🛡️ Bagaimana info Garansi?", text: "Berapa tahun masa garansi perbaikan bocor di Jaya Abadi?" },
    { label: "📅 Booking Survei Gratis", text: "Saya ingin memesan layanan survei lokasi dan konsultasi secara gratis di Semarang" },
    { label: "💬 Hubungi via WhatsApp", text: "Dapatkah saya menghubungi WhatsApp Jaya Abadi?" }
  ];

  return (
    <>
      {/* Mini notification banner or widget on top of the button */}
      <AnimatePresence>
        {hasNewMessageAlert && !isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="fixed bottom-[84px] right-6 z-40 max-w-xs bg-slate-900 text-white rounded-2xl shadow-2xl p-3 border border-brand-safety-yellow/30 pointer-events-auto"
            id="chat-notification-bubble"
          >
            <div className="flex items-start gap-2.5">
              <div className="bg-brand-safety-yellow text-slate-950 p-1.5 rounded-lg shrink-0 mt-0.5 animate-bounce">
                <Bot size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-brand-safety-yellow flex items-center gap-1 font-display">
                  Abdi (Asisten AI) <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                </p>
                <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 leading-relaxed font-sans">
                  Ada masalah dak beton bocor atau basement rembes? Konsultasi gratis di sini Kak!
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setHasNewMessageAlert(false);
                }}
                className="text-slate-400 hover:text-white shrink-0 p-0.5 rounded-full hover:bg-white/10"
              >
                <X size={12} />
              </button>
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setHasNewMessageAlert(false);
              }}
              className="w-full text-center mt-2.5 py-1 bg-brand-safety-yellow hover:bg-yellow-400 transition-colors text-brand-blue-dark text-[11px] font-bold rounded-lg font-display cursor-pointer"
            >
              Mulai Chat Tanya AI
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 sm:right-8 z-40 flex flex-col items-end gap-3 font-sans" id="ai-chat-button-container">
        {/* If chatbot is closed, show floating button */}
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setHasNewMessageAlert(false);
            }}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5 py-4 shadow-3xl hover:shadow-brand-safety-yellow/10 transition-all border border-brand-safety-yellow/40 group relative cursor-pointer"
            style={{ boxShadow: "0 10px 30px rgba(15, 23, 42, 0.3)" }}
            title="Tanya Abdi - Asisten AI Jaya Abadi"
            id="open-chat-button"
          >
            {/* Pulsing border decoration */}
            <span className="absolute -inset-0.5 rounded-full bg-brand-safety-yellow/20 animate-ping opacity-60 pointer-events-none group-hover:scale-110" />
            <div className="bg-brand-safety-yellow text-slate-950 p-1.5 rounded-full relative">
              <Bot size={18} className="text-brand-blue-dark" />
              <Sparkles size={10} className="absolute -top-1 -right-1 text-orange-600 animate-pulse" />
            </div>
            <span className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-brand-safety-yellow">
              Tanya Abdi AI
            </span>
          </motion.button>
        )}
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-4xl flex flex-col overflow-hidden border border-slate-200"
            style={{ boxShadow: "0 20px 50px rgba(15, 23, 42, 0.15)" }}
            id="chat-window-panel"
          >
            {/* Header section with brand accent colors */}
            <div className="bg-brand-blue-dark text-white py-3.5 px-4 flex items-center justify-between border-b border-white/5 shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-brand-safety-yellow p-2 rounded-xl text-brand-blue-dark flex items-center justify-center shrink-0">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="font-display font-extrabold text-sm sm:text-base tracking-wide flex items-center gap-1.5">
                    Abdi <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full flex items-center gap-1 font-semibold font-sans"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />Online</span>
                  </div>
                  <div className="text-[10px] text-brand-safety-yellow font-medium mt-0.5 tracking-wider font-sans">
                    Asisten AI Jaya Abadi Semarang
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                {/* Reset button */}
                <button
                  onClick={clearChat}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title="Mulai Ulang Percakapan"
                  id="reset-chat-button"
                >
                  <RefreshCw size={14} className="hover:rotate-45 transition-transform duration-300" />
                </button>
                {/* Minimize window */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title="Sembunyikan Chat"
                  id="close-chat-button"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Sub-header safety badge info strip */}
            <div className="bg-brand-safety-yellow/10 border-b border-brand-safety-yellow/10 px-4 py-1.5 text-[10px] sm:text-xs text-slate-700 flex items-center justify-center gap-1.5 text-center font-medium font-sans italic">
              <Hammer size={12} className="text-slate-600 animate-bounce shrink-0" />
              <span>Garansi Kebocoran Resmi Jaya Abadi 1 s.d 2 Tahun</span>
            </div>

            {/* Chat Messages Log Panel */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 relative font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start gap-2.5 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Bot avatar symbol */}
                    {msg.role === "assistant" && (
                      <div className="w-7 h-7 bg-brand-blue-dark text-brand-safety-yellow p-1 rounded-lg flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <Bot size={14} />
                      </div>
                    )}
                    
                    <div className="flex flex-col">
                      <div
                        className={`p-3 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${
                          msg.role === "user"
                            ? "bg-brand-blue-dark text-white rounded-tr-none"
                            : "bg-white text-slate-800 rounded-tl-none border border-slate-200"
                        }`}
                      >
                        {msg.role === "assistant" ? formatMessageText(msg.text) : msg.text}
                      </div>
                      
                      {/* Message Timestamp */}
                      <span className={`text-[9px] text-slate-400 mt-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bot thinking placeholder */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2.5 max-w-[85%]">
                    <div className="w-7 h-7 bg-brand-blue-dark text-brand-safety-yellow p-1 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex items-center justify-center gap-1.5 shadow-sm">
                      <span className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce animate-duration-1000" style={{ animationDelay: "0ms" }} />
                      <span className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce animate-duration-1000" style={{ animationDelay: "150ms" }} />
                      <span className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-bounce animate-duration-1000" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Interactive Pre-defined Prompt Selector Chips */}
            <div className="px-3 py-2 border-t border-slate-100 bg-white shrink-0 scrollbar-none font-sans">
              <div className="flex gap-2 bg-white overflow-x-auto pb-1 max-w-full text-slate-500 whitespace-nowrap scrollbar-none py-0.5">
                {quickPrompts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickPromptClick(p.text)}
                    disabled={isLoading}
                    className="flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-slate-200 transition-all hover:border-slate-300 disabled:opacity-50 cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input Panel */}
            <div className="p-3 border-t border-slate-100 bg-white flex items-center gap-2.5 shrink-0 font-sans">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isLoading) {
                    handleSendMessage();
                  }
                }}
                disabled={isLoading}
                placeholder="Tulis pesan Anda ke Abdi..."
                className="flex-1 bg-slate-100 hover:bg-slate-150 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue-light focus:bg-white focus:border-brand-blue-light transition-all disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-blue-dark hover:bg-slate-800 disabled:hover:bg-brand-blue-dark disabled:opacity-40 text-brand-safety-yellow p-3 rounded-xl transition-all shadow-sm flex items-center justify-center shrink-0 cursor-pointer"
                id="send-chat-button"
              >
                <Send size={15} />
              </button>
            </div>

            {/* Small corporate attribution footer */}
            <div className="bg-slate-50 text-[9px] text-center text-slate-400 py-1.5 border-t border-slate-100 uppercase tracking-widest leading-none font-sans flex items-center justify-center">
              Jaya Abadi Semarang • Jasa Konstruksi Bergaransi
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
