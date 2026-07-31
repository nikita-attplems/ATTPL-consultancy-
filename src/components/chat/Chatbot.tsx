"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useChat } from "@/hooks/useChat";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { getTheme } from "@/services/departmentTheme";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/cn";
import { toggleChatbot } from "@/redux/slices/chatSlice";
import { IoClose } from "react-icons/io5";

export default function Chatbot() {
    const chatbotOpen = useAppSelector(state => state.chat.chatbotOpen);
    const dispatch = useAppDispatch();

    const { messages, mode, whatsappLink } = useChat();
    const t = useTranslations("chat");

    const department = useAppSelector(
        (state) => state.chat.department
    );

    // URL theme wins if found.
    // Otherwise use existing Redux-based theme resolution.
    const theme = getTheme(department);

    return (
        <div className="fixed z-100 bottom-8 right-8">
            <button
                onClick={() => dispatch(toggleChatbot())}
                className="relative"
            >
                {/* Ping animation */}
                <span className="absolute -left-1 -top-1 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-yellow-500 border-2 border-white" />
                </span>

                <Image
                    src="/icons/chatbot.png"
                    alt="Chatbot"
                    width={50}
                    height={50}
                    className="object-contain"
                />
            </button>

            {chatbotOpen && <div className="w-screen h-screen bg-black/10 fixed inset-0 z-100" onClick={() => dispatch(toggleChatbot())} />}

            {/* Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-110",
                    "w-full sm:w-[420px] lg:w-[480px]",
                    "transform transition-transform duration-300 ease-in-out",
                    chatbotOpen
                        ? "translate-x-0"
                        : "translate-x-full pointer-events-none"
                )}
            >
                <div
                    className="flex h-full flex-col shadow-2xl"
                    style={{ backgroundColor: theme.bg }}
                >
                    {/* Header */}
                    <div
                        className="flex items-center justify-between px-4 py-3 text-white"
                        style={{ backgroundColor: theme.header }}
                    >
                        <div className="mr-3 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white">
                            <Image
                                src='/logo/logo-crop.gif'
                                alt="ATTPL Watermark"
                                width={700}
                                height={700}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="min-w-0 flex-1 hidden md:block">
                            <h1 className="text-lg font-semibold">
                                {"🌿 ATTPL (ऐट्पल) AI Assistant"}
                            </h1>

                            <p className="text-sm text-white/75">
                                {mode === "ai" &&
                                    `${t("online")} · ${department
                                        ? theme.label ?? department
                                        : t("general")
                                    }`}

                                {mode === "handoff_pending" &&
                                    t("connecting")}

                                {mode === "human" &&
                                    t("transferred")}
                            </p>
                        </div>

                        {department && mode === "ai" && (
                            <span
                                className="mr-2 rounded-full px-3 py-1 text-xs font-medium text-white"
                                style={{
                                    backgroundColor:
                                        "rgba(255,255,255,0.15)",
                                }}
                            >
                                {theme.label ?? department}
                            </span>
                        )}

                        <div className="flex items-center gap-2">
                            <LanguageSwitcher />

                            <button
                                onClick={() => dispatch(toggleChatbot())}
                                className="rounded-lg p-1.5 transition hover:bg-white/10"
                                aria-label="Close chatbot"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Handoff Banner */}
                    {mode === "handoff_pending" &&
                        whatsappLink && (
                            <div className="flex flex-col items-center gap-3 border-b border-yellow-200 bg-yellow-50 px-4 py-3">
                                <div className="text-sm text-yellow-700">
                                    {t("connectingSpecialist")}
                                </div>

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg px-4 py-2 font-medium text-white transition hover:opacity-90"
                                    style={{
                                        backgroundColor:
                                            theme.primary,
                                    }}
                                >
                                    {t("continueWhatsApp")}
                                </a>
                            </div>
                        )}

                    {/* Messages */}
                    <div
                        className="flex-1 overflow-hidden"
                        style={{ backgroundColor: theme.bg }}
                    >
                        <div className="h-full overflow-y-auto px-4 py-5">
                            <ChatMessages
                                messages={messages}
                                theme={theme}
                            />
                        </div>
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-200 bg-white px-4 py-3">
                        <ChatInput theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    )
}
