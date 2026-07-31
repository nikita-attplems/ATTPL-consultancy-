"use client";

import { useCallback } from "react";
import { useChat } from "@/hooks/useChat";
import { triggerHandoff } from "@/services/handoff.service";

// ─── AI-UNABLE patterns (backend fallback phrases) ────────────────────────────
// These are strings the AI itself returns when it can't help.
// Checked against the AI reply — not the user message.
const AI_UNABLE_PATTERNS = [
    /temporarily unavailable/i,
    /connect with you shortly/i,
    /our team will (contact|reach)/i,
    /i (don't|do not|can't|cannot) (know|help|understand|assist)/i,
    /i('m| am) not sure/i,
    /i('m| am) unable/i,
    /beyond my (ability|capability|scope)/i,
    /please (contact|reach out to) (support|a human|an agent)/i,
];

// ─── USER REQUEST patterns ─────────────────────────────────────────────────────
// Broad patterns covering typos, synonyms, indirect requests.
const HUMAN_REQUEST_PATTERNS = [
    // Direct human/agent requests
    /\b(human|agent|person|staff|representative|rep)\b/i,

    // Talk/speak/chat/connect variants
    /\b(talk|speak|chat|connect|switch|transfer)\b.{0,20}\b(human|agent|person|someone|support|team)\b/i,

    // "I want/need/can I" + human context
    /\b(want|need|can i|could i|would like)\b.{0,30}\b(human|agent|person|live|real|support)\b/i,

    // Assistance/help from person
    /\b(human|live|real).{0,10}(assist|help|support|service)/i,

    // Common direct phrases
    /talk with human/i,
    /speak to (an? )?(human|agent|person|someone)/i,
    /connect me (to|with)/i,
    /real person/i,
    /live (agent|support|chat|help)/i,
    /get (some )?help from/i,

    // Frustration signals often leading to handoff request
    /not helpful/i,
    /this is not working/i,
    /useless/i,
    /talk to (your )?team/i,
    /call (me|back|center)/i,
];

export type HandoffReason =
    | "user_requested"
    | "ai_unable"
    | "low_confidence";

export const shouldHandoff = (
    userMessage: string,
    aiReply: string
): { should: boolean; reason: HandoffReason | null } => {

    // 1. User explicitly asked for human (broad patterns)
    if (HUMAN_REQUEST_PATTERNS.some((p) => p.test(userMessage))) {
        return { should: true, reason: "user_requested" };
    }

    // 2. AI replied with a fallback/unable message
    if (AI_UNABLE_PATTERNS.some((p) => p.test(aiReply))) {
        return { should: true, reason: "ai_unable" };
    }

    // 3. AI reply suspiciously short — low confidence
    if (aiReply.trim().length < 20) {
        return { should: true, reason: "low_confidence" };
    }

    return { should: false, reason: null };
};

export const useHandoff = () => {
    const { addMsg, setChatMode, sessionId } = useChat();

    const initiateHandoff = useCallback(
        async (reason: HandoffReason) => {

            if (!sessionId) {
                console.warn("[useHandoff] No sessionId — cannot handoff");
                return;
            }

            setChatMode("handoff_pending");

            addMsg({
                id: Date.now().toString(),
                role: "assistant",
                content:
                    "⏳ Please wait — transferring your conversation to a human agent on WhatsApp...",
            });

            try {
                await triggerHandoff(sessionId);

                addMsg({
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content:
                        "✅ Your full conversation has been sent to our support team on WhatsApp. An agent will contact you shortly.",
                });

                setChatMode("human");

                console.info(
                    `[useHandoff] Handoff complete. Reason: ${reason}, Session: ${sessionId}`
                );

            } catch (err) {
                console.error("[useHandoff] Handoff failed:", err);

                addMsg({
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content:
                        "❌ We couldn't reach an agent right now. Please try again or contact support directly.",
                });

                setChatMode("ai");
            }
        },
        [sessionId, addMsg, setChatMode]
    );

    return { initiateHandoff };
};
