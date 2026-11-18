import { useState, useEffect } from "react";
import { X, Sparkles, Minus, Loader2 } from "lucide-react";

const JOTFORM_AGENT_URL = "https://agent.jotform.com/01a1e7236d087000830b317e0c78d789a7fa";

export function JotformChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Close with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
        {/* Subtle Greeting Pill on desktop before first open */}
        {!isOpen && !hasInteracted && (
          <div
            onClick={handleOpen}
            className="hidden sm:flex items-center gap-2 bg-stone-900/95 text-stone-100 text-xs tracking-wide py-2 px-3.5 rounded-full shadow-xl border border-amber-400/40 cursor-pointer backdrop-blur-md transition-all hover:border-amber-300 hover:scale-105 animate-in fade-in slide-in-from-right duration-500"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="font-serif">Questions? Chat with AI Concierge</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close chat" : "Chat with Très CHIC AI Concierge"}
          className={`group relative flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
            isOpen
              ? "w-12 h-12 sm:w-14 sm:h-14 bg-stone-900/95 text-stone-100 border-2 border-amber-400/60 shadow-2xl hover:bg-stone-800 hover:scale-105"
              : "w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-950 shadow-2xl shadow-emerald-950/60 border-2 border-amber-300/60 hover:border-amber-300 hover:scale-110 active:scale-95"
          }`}
        >
          {/* Subtle gold ripple / glow backdrop */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-amber-400/20 blur-sm group-hover:bg-amber-400/35 transition duration-300" />
          )}

          {/* Active online indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5 z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-stone-950" />
          </span>

          {isOpen ? (
            <X className="relative w-6 h-6 text-stone-100 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="relative flex items-center justify-center w-full h-full p-2 animate-bot-bounce">
              <img
                src="/chatbot.png"
                alt="Très CHIC AI Concierge Mascot"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-110"
                loading="eager"
              />
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Très CHIC AI Concierge Chat"
          className="fixed bottom-20 sm:bottom-24 left-3 right-3 sm:left-auto sm:right-6 z-50 w-auto sm:w-[420px] h-[560px] sm:h-[600px] max-h-[82vh] bg-stone-900 rounded-2xl shadow-2xl border border-amber-400/30 overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95"
        >
          {/* Luxury Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 border-b border-amber-400/20 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-emerald-950 border border-amber-400/50 p-1 overflow-hidden shadow-inner">
                <img
                  src="/chatbot.png"
                  alt="Très CHIC Mascot"
                  className="w-full h-full object-contain"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-stone-900" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium tracking-wide text-stone-100 flex items-center gap-1.5">
                  Très CHIC Concierge
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </h3>
                <p className="text-[11px] text-stone-400">Online • Mariane & Team</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-stone-400">
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                className="p-1.5 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
                aria-label="Minimize chat"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Body with Jotform Agent */}
          <div className="relative flex-1 w-full bg-stone-950 overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-950 text-stone-300 gap-3 z-10">
                <Loader2 className="w-7 h-7 text-amber-400 animate-spin" />
                <p className="text-xs font-serif tracking-wider text-amber-200/80">
                  Connecting to Très CHIC AI Concierge...
                </p>
              </div>
            )}

            <iframe
              src={JOTFORM_AGENT_URL}
              title="Très CHIC AI Agent"
              allow="clipboard-write; microphone; camera; geolocation"
              className="w-full h-full border-0 bg-transparent"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
