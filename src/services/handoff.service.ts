import { api } from "@/lib/api";


interface HandoffResponse {
    success: boolean;
    message: string;
}

/**
 * Triggers human handoff — backend calls HandoffService.escalateSession()
 * which marks session escalated + sends full chat transcript to agent WhatsApp
 */
export const triggerHandoff = async (
    sessionId: string
): Promise<HandoffResponse> => {
    const data = await api<HandoffResponse>("/api/handoff", {
        method: "POST",
        body: { sessionId },
    });

    return data;
};