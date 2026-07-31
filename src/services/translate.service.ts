/**
 * Translation service using MyMemory API
 * Free, no API key needed, 1000 req/day
 * Skips translation for handoff messages (contain URLs)
 */

// Cache translations to avoid duplicate API calls
const cache = new Map<string, string>();

export async function translateToHindi(text: string): Promise<string> {
    if (!text) return text;

    // Skip handoff messages — contain URLs that must not be translated
    if (
        text.includes("WhatsApp:") ||
        text.includes("wa.me") ||
        text.includes("Contact Form:") ||
        text.includes("Services:") ||
        text.includes("Website:") ||
        text.includes("http://") ||
        text.includes("https://")
    ) {
        return text;
    }

    // Return cached translation if available
    if (cache.has(text)) {
        return cache.get(text)!;
    }

    try {
        // MyMemory has 500 char limit per request — split long text
        if (text.length > 500) {
            const chunks = splitIntoChunks(text, 500);
            const translated = await Promise.all(
                chunks.map((chunk) => translateChunk(chunk))
            );
            const result = translated.join("\n");
            cache.set(text, result);
            return result;
        }

        const result = await translateChunk(text);
        cache.set(text, result);
        return result;
    } catch {
        return text; // fallback to original on error
    }
}
async function translateChunk(text: string): Promise<string> {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("TRANSLATION RESULT:", data);

        // Response format: [[[translated, original, ...], ...], ...]
        if (data && data[0]) {
            const translated = data[0]
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((item: any) => item[0])
                .filter(Boolean)
                .join("");
            return translated;
        }
        return text;
    } catch {
        return text;
    }
}
function splitIntoChunks(text: string, maxLength: number): string[] {
    const chunks: string[] = [];
    const lines = text.split("\n");
    let current = "";

    for (const line of lines) {
        if ((current + "\n" + line).length > maxLength) {
            if (current) chunks.push(current.trim());
            current = line;
        } else {
            current = current ? current + "\n" + line : line;
        }
    }

    if (current) chunks.push(current.trim());
    return chunks;
}
