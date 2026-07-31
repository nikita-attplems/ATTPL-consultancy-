

// ─── Types ────────────────────────────────────────────────────────────────────

import { api } from "@/lib/api";

interface ChatApiResponse {
    success: boolean;
    message: string;
    data: {
        sessionId: string;
        department: string;
        response: string;
        handoff?: boolean;
        whatsappUrl?: string | null;
        whatsappRedirect?: string | null;
        contactFormUrl?: string | null;
        websiteUrl?: string | null;
        servicesUrl?: string | null;
    };
}

export interface SendMessageResult {
    sessionId: string;
    department: string;
    reply: string;
    handoff: boolean;
    whatsappUrl: string | null;
    whatsappRedirect: string | null;
    contactFormUrl: string | null;
    websiteUrl: string | null;
    servicesUrl: string | null;
}

export interface SendMessagePayload {
    message: string;
    sessionId?: string | null;
    visitorName?: string;
    visitorEmail?: string;
    visitorPhone?: string;
    visitorLocation?: string;
}

// ─── API call ─────────────────────────────────────────────────────────────────

export const sendMessage = async ({
    message,
    sessionId,
    visitorName,
    visitorEmail,
    visitorPhone,
    visitorLocation,
}: SendMessagePayload): Promise<SendMessageResult> => {

    const payload: Record<string, unknown> = { message };

    if (sessionId) {
        payload.sessionId = sessionId;
    }

    if (visitorName || visitorEmail || visitorPhone || visitorLocation) {
        if (visitorName) payload.visitorName = visitorName;
        if (visitorEmail) payload.visitorEmail = visitorEmail;
        if (visitorPhone) payload.visitorPhone = visitorPhone;
        if (visitorLocation) payload.visitorLocation = visitorLocation;
    }

    const response = await api<ChatApiResponse>(
        "/api/chat",
        {
            method: "POST",
            body: payload,
        }
    );

    if (!response.success) {
        throw new Error(
            response.message || "Chat request failed."
        );
    }

    return {
        sessionId: response.data?.sessionId || "",
        department: response.data?.department || "",
        reply: response.data?.response || "Something went wrong.",
        handoff: response.data?.handoff ?? false,
        whatsappUrl: response.data?.whatsappUrl ?? null,
        whatsappRedirect: response.data?.whatsappRedirect ?? null,
        contactFormUrl: response.data?.contactFormUrl ?? null,
        websiteUrl: response.data?.websiteUrl ?? null,
        servicesUrl: response.data?.servicesUrl ?? null,
    };
};
