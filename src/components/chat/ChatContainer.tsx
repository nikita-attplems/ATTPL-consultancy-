"use client";

import { useEffect } from "react";
import { useChat } from "@/hooks/useChat";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { getTheme } from "@/services/departmentTheme";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";


export default function ChatContainer() {
    const { messages, addMsg, mode, whatsappLink } = useChat();
    const t = useTranslations("chat");

    const department = useSelector(
        (state: RootState) => state.chat.department
    );

    const theme = getTheme(department);


    return (
        <div
            className="flex h-screen items-center justify-center px-8 py-8 transition-colors duration-500"
            style={{ backgroundColor: theme.bg }}
        >
            <div className="flex h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* ── Header ──────────────────────────────────────────────── */}
                <div
                    className="flex items-center px-4 py-3 text-white transition-colors duration-500"
                    style={{ backgroundColor: theme.header }}
                >
                    <div className="mr-3 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white shadow-lg">
                        <Image
                            src='/logo/logo-crop.gif'
                            alt="ATTPL Watermark"
                            width={700}
                            height={700}
                            className="vision-watermark h-full w-full object-contain"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h1 className="text-xl font-semibold">🌿 ATTPL (ऐट्पल) AI Assistant</h1>
                        <p className="text-sm text-white/75">
                            {mode === "ai" &&
                                `${t("online")} · ${department ? theme.label ?? department : t("general")}`}
                            {mode === "handoff_pending" && t("connecting")}
                            {mode === "human" && t("transferred")}
                        </p>
                    </div>

                    {department && mode === "ai" && (
                        <span
                            className="mr-2 rounded-full px-3 py-1 text-xs font-medium text-white"
                            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                        >
                            {theme.label ?? department}
                        </span>
                    )}

                    <LanguageSwitcher />
                </div>

                {/* ── Handoff pending banner ───────────────────────────────── */}
                {mode === "handoff_pending" && whatsappLink && (
                    <div className="flex flex-col items-center gap-3 border-b border-yellow-200 bg-yellow-50 px-4 py-3">
                        <div className="text-sm text-yellow-700">
                            {t("connectingSpecialist")}
                        </div>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg px-4 py-2 font-medium text-white transition hover:opacity-90"
                            style={{ backgroundColor: theme.primary }}
                        >
                            {t("continueWhatsApp")}
                        </a>
                    </div>
                )}

                {/* ── Messages area ────────────────────────────────────────── */}
                <div
                    className="relative flex-1 overflow-hidden"
                    style={{ backgroundColor: theme.bg }}
                >
                    <div className="relative z-10 h-full overflow-y-auto px-4 py-5">
                        <ChatMessages messages={messages} theme={theme} />
                    </div>
                </div>

                {/* ── Input bar ───────────────────────────────────────────── */}
                <div className="border-t border-gray-200 bg-white px-4 py-3">
                    <ChatInput theme={theme} />
                </div>

            </div>
        </div>
    );
}
