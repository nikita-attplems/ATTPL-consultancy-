import { Message } from "@/redux/slices/chatSlice";
import { useTranslations } from "next-intl";

interface MessageBubbleProps {
    message: Message;
    assistantBubbleColor?: string;
    userBubbleColor?: string;
}

const HANDOFF_PATTERN = /WhatsApp:\s*(https:\/\/wa\.me\/[^\s]+)/i;
const CONTACT_PATTERN = /Contact Form:\s*(https?:\/\/[^\s]+)/i;
const SERVICES_PATTERN = /Services:\s*(https?:\/\/[^\s]+)/i;
const WEBSITE_PATTERN = /Website:\s*(https?:\/\/[^\s]+)/i;

function parseHandoff(content: string) {
    const waMatch = content.match(HANDOFF_PATTERN);
    const cfMatch = content.match(CONTACT_PATTERN);
    const servicesMatch = content.match(SERVICES_PATTERN);
    const websiteMatch = content.match(WEBSITE_PATTERN);

    if (!waMatch) return null;

    const preambleMatch = content.match(/^(.+?)\s+Let me connect/i);
    const preamble = preambleMatch?.[1] ?? "Connecting you with our team.";

    return {
        preamble,
        whatsappUrl: waMatch[1],
        contactFormUrl: cfMatch?.[1] ?? null,
        servicesUrl: servicesMatch?.[1] ?? null,
        websiteUrl: websiteMatch?.[1] ?? null,
    };
}

export default function MessageBubble({
    message,
    assistantBubbleColor,
    userBubbleColor,
}: MessageBubbleProps) {
    const isAssistant = message.role === "assistant";
    const t = useTranslations("chat");

    // ── Handoff Card ──────────────────────────────────────────────────────────
    if (isAssistant) {
        const handoff = parseHandoff(message.content);

        if (handoff) {
            return (
                <div className="mb-4 flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-yellow-200 bg-yellow-50 px-4 py-4 shadow-sm">

                        <p className="mb-1 text-sm font-semibold text-gray-800">
                            {t("handoffTitle")}
                        </p>

                        <p className="mb-4 text-xs text-gray-500">
                            {handoff.preamble}
                        </p>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                            {/* WhatsApp */}
                            <a
                                href={handoff.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#20ba5a]"
                            >
                                {t("whatsapp")}
                            </a>

                            {/* Contact Form */}
                            {handoff.contactFormUrl && (
                                <a
                                    href={handoff.contactFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                                >
                                    {t("contactForm")}
                                </a>
                            )}

                            {/* Services */}
                            {handoff.servicesUrl && (
                                <a
                                    href={handoff.servicesUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                                >
                                    {t("viewServices")}
                                </a>
                            )}

                            {/* Website */}
                            {handoff.websiteUrl && (
                                <a
                                    href={handoff.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                                >
                                    {t("visitWebsite")}
                                </a>
                            )}

                        </div>

                        <p className="mt-3 text-xs text-gray-400 text-center">
                            {t("teamReply")}
                        </p>
                    </div>
                </div>
            );
        }
    }

    // ── Normal Message Bubble ─────────────────────────────────────────────────
    return (
        <div className={`mb-4 flex ${isAssistant ? "justify-start" : "justify-end"}`}>
            <div
                className={`max-w-[75%] px-4 py-3 text-sm whitespace-pre-wrap text-gray-800 shadow-sm ${isAssistant
                    ? "rounded-2xl rounded-tl-md"
                    : "rounded-2xl rounded-tr-md"
                    }`}
                style={{
                    backgroundColor: isAssistant
                        ? assistantBubbleColor ?? "#ffffff"
                        : userBubbleColor ?? "#DCF8C6",
                    transition: "background-color 0.5s ease",
                }}
            >
                {message.content}
            </div>
        </div>
    );
}
