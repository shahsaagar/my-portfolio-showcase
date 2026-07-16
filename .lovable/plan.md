# Resume AI Chatbot

Add a floating chat widget on the portfolio homepage that answers visitor questions about Sagar's experience, skills, certifications, and impact — and can produce a quick résumé summary on demand.

## What the user sees

- A small "Ask about my résumé" button pinned to the bottom-right of the page.
- Clicking it opens a chat panel with:
  - A short intro from the assistant ("Hi, I'm Sagar's résumé assistant…").
  - Suggested prompts: *Summarize his experience*, *What programs has he led?*, *Which certifications?*, *Is he a fit for a TPM role?*.
  - A text input + send button, streamed responses, and a "New chat" reset.
- Answers stream token-by-token, rendered as markdown.
- Mobile-friendly (full-height sheet on small screens, floating panel on desktop).

## How it works

- The chatbot is grounded in the existing `src/components/portfolio/data.ts` (profile, experience, achievements, skills, certifications, education). No database, no vector search — the whole résumé is small enough to inject into the system prompt.
- Conversation is **one conversation, no persistence** (fresh on reload). Keeps scope tight and avoids a DB just for a portfolio widget.
- Powered by **Lovable AI Gateway** using the default `google/gemini-3-flash-preview` model via the AI SDK. No user API keys needed — `LOVABLE_API_KEY` is auto-provisioned server-side.
- System prompt constrains the model to: answer only from the provided résumé data, decline unrelated questions politely, keep tone professional, and offer to connect via email for anything it can't answer.

## Technical outline

1. **Server route** `src/routes/api/chat.ts`
   - POST handler using AI SDK `streamText` + `toUIMessageStreamResponse`.
   - Reads `LOVABLE_API_KEY` from `process.env`, builds Lovable gateway provider.
   - System prompt = fixed instructions + serialized résumé data from `data.ts`.
2. **Gateway helper** `src/lib/ai-gateway.server.ts`
   - Standard `createLovableAiGatewayProvider` helper from the AI SDK Lovable Gateway pattern.
3. **Chat UI** built with AI Elements (`conversation`, `message`, `prompt-input`, `shimmer`) installed via `bunx ai-elements@latest add ...`.
   - `src/components/chatbot/ResumeChat.tsx` — the panel (uses `useChat` with `DefaultChatTransport` pointing at `/api/chat`).
   - `src/components/chatbot/ChatLauncher.tsx` — the floating button + open/close state, rendered from `src/routes/index.tsx`.
   - Styled to match the existing emerald/gold/serif design system (no generic Sparkles icon; use a serif "Ask" mark or MessageCircle icon tinted with `--emerald`).
4. **Deps**: `ai`, `@ai-sdk/react`, `@ai-sdk/openai-compatible`, `zod` (via bun); plus AI Elements components.

## Out of scope

- No thread history, no login, no database.
- No résumé file upload — grounding uses the structured data already in the repo.
- No voice / image input.
