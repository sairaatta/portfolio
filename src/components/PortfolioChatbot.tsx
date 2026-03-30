import { useState, useRef, useEffect, KeyboardEvent } from "react";

// ============================================================
//  SAIRA ATTA — FREE AI CHATBOT (Groq API — works in Pakistan)
//  100% FREE — No credit card needed — No geo-restrictions
//
//  SETUP (3 steps):
//  1. Go to https://console.groq.com
//     → Sign up free (just email) → API Keys → Create API Key → Copy it
//  2. Open your .env file and REPLACE the Gemini line with:
//     VITE_GROQ_API_KEY=your_groq_key_here
//  3. Make sure <PortfolioChatbot /> is in your App.tsx (already done!)
// ============================================================

const API_KEY: string = import.meta.env.VITE_GROQ_API_KEY ?? "";

console.log("API KEY:", API_KEY);
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// ── Edit this to update what the bot knows about you ────────
const SAIRA_CONTEXT: string = `You are a friendly AI assistant on Saira Atta's portfolio website.
Your only job is to help visitors learn about Saira and encourage them to hire her or get in touch.

About Saira Atta:
- Frontend Developer and WordPress Developer based in Pakistan
- Skills: React.js, Tailwind CSS, JavaScript, HTML, CSS, WordPress
- Builds modern, fast, responsive websites and web apps
- Available for freelance projects and full-time opportunities
- Portfolio website: sairaatta.tech

Services she offers:
- Custom React.js web applications
- WordPress website development and customization
- Responsive landing pages and portfolio websites
- UI/UX implementation from Figma or design files
- Website speed and performance optimization
- Frontend consulting

Pricing:
- Projects start from $100 depending on scope
- Contact Saira directly for a custom quote

How to contact Saira:
- Use the Contact section on sairaatta.tech
- She typically replies within 24 hours

Strict rules:
- Keep every answer to 2-3 sentences maximum
- Always be warm, friendly, and encouraging
- End answers by inviting the visitor to reach out to Saira
- If asked something you do not know about Saira, say: "You can ask Saira directly via the contact section — she'd love to hear from you!"
- Never make up information
- Only discuss Saira and her work — politely decline everything else`;

const SUGGESTED: string[] = [
  "What services do you offer?",
  "What is your tech stack?",
  "How can I contact you?",
  "How much do you charge?",
];

// ── Types ────────────────────────────────────────────────────
interface Message {
  role: "user" | "assistant";
  content: string;
}

interface GroqMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface GroqResponse {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

const BOUNCE_DELAYS: number[] = [0, 150, 300];

// ── Component ────────────────────────────────────────────────
export default function PortfolioChatbot() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! 👋 I'm Saira's AI assistant. Ask me anything about her skills, services, or how to work together!",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuggested, setShowSuggested] = useState<boolean>(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [open]);

  async function sendMessage(text?: string): Promise<void> {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;

    setInput("");
    setShowSuggested(false);

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Build Groq message history with system prompt
      const groqMessages: GroqMessage[] = [
        { role: "system", content: SAIRA_CONTEXT },
        ...updatedMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ];

      const res = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192", // Free model on Groq
          messages: groqMessages,
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      const data = (await res.json()) as GroqResponse;
      const reply: string =
        data?.choices?.[0]?.message?.content ??
        "Sorry, something went wrong. Please contact Saira directly via the contact section!";

      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please reach out to Saira directly via the Contact section!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <>
      {/* ── Floating toggle button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{ backgroundColor: "#7c3aed" }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:brightness-110 active:scale-95"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
        {/* Pulse ring when closed */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ backgroundColor: "#7c3aed" }}
          />
        )}
      </button>

      {/* ── Chat window ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "340px",
            maxWidth: "calc(100vw - 2rem)",
            height: "500px",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ backgroundColor: "#7c3aed" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
            >
              SA
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-white leading-tight">
                Saira's Assistant
              </p>
              <p className="text-xs" style={{ color: "#ddd6fe" }}>
                Ask me anything
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs" style={{ color: "#ddd6fe" }}>
                Online
              </span>
            </div>
          </div>

          {/* Messages area */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
            style={{ backgroundColor: "#f9fafb" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}
                  >
                    S
                  </div>
                )}
                <div
                  className="rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={{
                    maxWidth: "78%",
                    ...(msg.role === "user"
                      ? {
                          backgroundColor: "#7c3aed",
                          color: "white",
                          borderBottomRightRadius: "4px",
                        }
                      : {
                          backgroundColor: "white",
                          color: "#111827",
                          borderBottomLeftRadius: "4px",
                          border: "0.5px solid #e5e7eb",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                        }),
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}
                >
                  S
                </div>
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{
                    backgroundColor: "white",
                    border: "0.5px solid #e5e7eb",
                    borderBottomLeftRadius: "4px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex gap-1 items-center h-4">
                    {BOUNCE_DELAYS.map((delay) => (
                      <span
                        key={delay}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                          backgroundColor: "#a78bfa",
                          animationDelay: `${delay}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Suggested questions */}
            {showSuggested && messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => void sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full transition-colors bg-white hover:bg-purple-50"
                    style={{ border: "0.5px solid #c4b5fd", color: "#7c3aed" }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div
            className="px-3 py-3 flex-shrink-0"
            style={{ backgroundColor: "white", borderTop: "0.5px solid #e5e7eb" }}
          >
            <div
              className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
                style={{ color: "#111827" }}
              />
              <button
                onClick={() => void sendMessage()}
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all active:scale-95 disabled:opacity-40 hover:brightness-110"
                style={{ backgroundColor: "#7c3aed" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs mt-2" style={{ color: "#d1d5db" }}>
              Powered by Groq AI · Free
            </p>
          </div>
        </div>
      )}
    </>
  );
}