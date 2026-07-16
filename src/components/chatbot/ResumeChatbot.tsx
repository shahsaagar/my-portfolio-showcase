import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "Summarize Sagar's experience",
  "What's the biggest program he's led?",
  "Which certifications does he hold?",
  "Is he a fit for a Lead TPM role?",
];

function renderMessage(m: UIMessage): string {
  return m.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("");
}

export function ResumeChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    void sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close résumé assistant" : "Open résumé assistant"}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--emerald-deep)] px-5 py-3 text-xs uppercase tracking-[0.22em] text-[var(--cream)] shadow-lg shadow-black/20 hover:bg-[var(--emerald)] transition-colors"
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        <span>{open ? "Close" : "Ask about résumé"}</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Résumé assistant"
          className="fixed inset-x-3 bottom-24 z-40 flex flex-col rounded-2xl border border-border bg-card shadow-2xl shadow-black/30 sm:inset-x-auto sm:right-5 sm:w-[400px] md:w-[440px]"
          style={{ maxHeight: "min(640px, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-border p-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                Résumé Assistant
              </p>
              <h3 className="mt-1 font-serif text-lg leading-tight text-foreground">
                Ask me about{" "}
                <em className="italic text-[var(--emerald)]">Sagar's</em> work
              </h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-foreground/80">
                  Hi — I'm grounded in Sagar's résumé (19+ years, SAFe Agile,
                  $15M enterprise programs). Ask anything or pick a starter:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-[var(--gold)]/40 px-3 py-1 text-xs text-foreground/80 hover:border-[var(--emerald)] hover:text-[var(--emerald)] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => {
              const text = renderMessage(m);
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      isUser
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--emerald-deep)] px-4 py-2.5 text-sm leading-relaxed text-[var(--cream)]"
                        : "max-w-[92%] text-sm leading-[1.7] text-foreground/90 whitespace-pre-wrap"
                    }
                  >
                    {text || (
                      <span className="italic text-muted-foreground">…</span>
                    )}
                  </div>
                </div>
              );
            })}

            {status === "submitted" && (
              <div className="flex justify-start">
                <p className="text-sm italic text-muted-foreground">Thinking…</p>
              </div>
            )}

            {error && (
              <p className="text-xs text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t border-border p-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Ask about experience, certifications, impact…"
              className="min-h-[42px] max-h-32 flex-1 resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--emerald)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-[var(--emerald-deep)] text-[var(--cream)] hover:bg-[var(--emerald)] transition-colors disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
