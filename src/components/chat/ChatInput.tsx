"use client";
import { useState } from "react";
import { useChat } from "@/hooks/useChat";
import { useHandoff, shouldHandoff } from "@/hooks/useHandsOff";
import { sendMessage } from "@/services/chat.service";

import { setDepartment } from "@/redux/slices/chatSlice";
import { DepartmentTheme } from "@/services/departmentTheme";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { translateToHindi } from "@/services/translate.service";

interface ChatInputProps {
    theme: DepartmentTheme;
}

export default function ChatInput({ theme }: ChatInputProps) {
    const {
        addMsg,
        setIsTyping,
        mode,
        sessionId,
        saveSessionId,
        setChatMode,
        saveWhatsappLink,
    } = useChat();

    const { initiateHandoff } = useHandoff();
    const dispatch = useDispatch();
    const t = useTranslations("chat");
    const searchParams = useSearchParams();
    const locale = searchParams.get("lang") || "en";

    const [text, setText] = useState("");

    const isDisabled = mode === "handoff_pending" || mode === "human";

    // ── Translate helper — only translates when locale is "hi" ───────────────
    const maybeTranslate = async (text: string): Promise<string> => {
        console.log("LOCALE:", locale);  // ← add this
        console.log("TRANSLATING:", text);  // ← add this
        if (locale === "hi") {
            return await translateToHindi(text);
        }
        return text;
    };
    const handleSend = async () => {
        if (!text.trim() || isDisabled) return;

        const currentText = text;

        const userMessage = {
            id: Date.now().toString(),
            role: "user" as const,
            content: currentText,
        };

        // addMsg(userMessage);
        // socket.emit("send-message", userMessage);
        // setText("");
        // setIsTyping(true);

        try {
            const lead = JSON.parse(localStorage.getItem("attplLead") || "{}");

            const result = await sendMessage({
                message: currentText,
                sessionId,
                visitorName: lead.visitorName,
                visitorEmail: lead.visitorEmail,
                visitorPhone: lead.visitorPhone,
                visitorLocation: lead.visitorLocation,
            });

            saveSessionId(result.sessionId);

            // ── Translate reply if Hindi mode ──────────────────────────────────
            const translatedReply = await maybeTranslate(result.reply);

            addMsg({
                id: Date.now().toString(),
                role: "assistant",
                content: translatedReply,
            });

            console.log("DEPARTMENT FOUND:", result.department)

            // Store department
            if (result.department) {
                dispatch(setDepartment(result.department));
            }

            // ── Backend-triggered handoff ──────────────────────────────────────
            if (result.handoff) {
                setChatMode("handoff_pending");

                if (result.whatsappUrl) {
                    saveWhatsappLink(result.whatsappUrl);
                }

                setTimeout(() => {
                    setChatMode("human");
                }, 2000);

                return;
            }

            // ── Frontend safety-net handoff ────────────────────────────────────
            const { should, reason } = shouldHandoff(currentText, result.reply);
            if (should && reason) {
                await initiateHandoff(reason);
            }
        } catch (err) {
            console.error("[ChatInput] sendMessage failed:", err);
            addMsg({
                id: Date.now().toString(),
                role: "assistant",
                content:
                    locale === "hi"
                        ? "कुछ गलत हो गया। कृपया पुनः प्रयास करें।"
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={isDisabled ? t("placeholderDisabled") : t("placeholder")}
                disabled={isDisabled}
                className="flex-1 bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />

            <button
                onClick={handleSend}
                disabled={isDisabled}
                className="rounded-full px-6 py-2 text-white font-medium transition-colors duration-500 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: theme.primary }}
            >
                {t("send")}
            </button>
        </div>
    );
}
