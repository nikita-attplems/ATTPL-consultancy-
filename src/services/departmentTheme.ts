// departmentTheme.ts
// Each department gets a distinct, accessible color identity.
// primary   → send button, active accents
// header    → top bar background
// bg        → chat area background tint
// bubble    → assistant message bubble color
// headerText → text color on header (auto white or dark based on header)

export interface DepartmentTheme {
    primary: string;
    header: string;
    bg: string;
    bubble: string;
    label: string; // human-readable department name
}

export const departmentThemeMap: Record<string, DepartmentTheme> = {

    // ── Default / General ─────────────────────────────────────────────
    DEFAULT: {
        label: "General",
        primary: "#2563EB",       // blue-500
        header: "#3B82F6",        // blue-700
        bg: "#EFF6FF",            // blue-50
        bubble: "#DBEAFE",        // blue-100
    },

    GENERAL: {
        label: "General",
        primary: "#2563EB",
        header: "#3B82F6",
        bg: "#EFF6FF",
        bubble: "#DBEAFE",
    },

    // ── EMS (Emergency / Medical) ─────────────────────────────────────
    // Light blue — calm, clinical, trustworthy
    EMS: {
        label: "EMS",
        primary: "#0EA5E9",       // sky-500
        header: "#0EA5E9",        // sky-700
        bg: "#F0F9FF",            // sky-50
        bubble: "#E0F2FE",        // sky-100
    },

    // ── Agritech ─────────────────────────────────────────────────────
    // Light green — natural, growth, earthy
    AGRITECH: {
        label: "Agritech",
        primary: "#22C55E",       // green-500
        header: "#15803D",        // green-700
        bg: "#F0FDF4",            // green-50
        bubble: "#DCFCE7",        // green-100
    },

    // ── HR (Human Resources) ──────────────────────────────────────────
    // Indigo — professional, people-focused
    HR: {
        label: "HR",
        primary: "#6366F1",       // indigo-500
        header: "#4338CA",        // indigo-700
        bg: "#EEF2FF",            // indigo-50
        bubble: "#E0E7FF",        // indigo-100
    },

    // ── Sales ─────────────────────────────────────────────────────────
    // WhatsApp green — energetic, commercial
    SALES: {
        label: "Sales",
        primary: "#25D366",
        header: "#128C7E",
        bg: "#F0FDF8",
        bubble: "#D1FAE5",
    },

    // ── Finance ───────────────────────────────────────────────────────
    // Deep teal — stable, trustworthy, serious
    FINANCE: {
        label: "Finance",
        primary: "#0D9488",       // teal-600
        header: "#0F766E",        // teal-700
        bg: "#F0FDFA",            // teal-50
        bubble: "#CCFBF1",        // teal-100
    },

    // ── Legal ─────────────────────────────────────────────────────────
    // Slate — formal, authoritative, precise
    LEGAL: {
        label: "Legal",
        primary: "#475569",       // slate-600
        header: "#1E293B",        // slate-800
        bg: "#F8FAFC",            // slate-50
        bubble: "#E2E8F0",        // slate-200
    },

    // ── IT / Tech Support ─────────────────────────────────────────────
    // Violet — tech, modern, digital
    IT: {
        label: "IT Support",
        primary: "#7C3AED",       // violet-600
        header: "#5B21B6",        // violet-800
        bg: "#F5F3FF",            // violet-50
        bubble: "#EDE9FE",        // violet-100
    },

    // ── Operations ────────────────────────────────────────────────────
    // Amber — practical, on-the-ground, decisive
    OPERATIONS: {
        label: "Operations",
        primary: "#F59E0B",       // amber-500
        header: "#B45309",        // amber-700
        bg: "#FFFBEB",            // amber-50
        bubble: "#FEF3C7",        // amber-100
    },

    // ── Marketing ─────────────────────────────────────────────────────
    // Rose — creative, bold, brand-focused
    MARKETING: {
        label: "Marketing",
        primary: "#F43F5E",       // rose-500
        header: "#BE123C",        // rose-700
        bg: "#FFF1F2",            // rose-50
        bubble: "#FFE4E6",        // rose-100
    },

    // ── Logistics ─────────────────────────────────────────────────────
    // Orange — movement, delivery, action
    LOGISTICS: {
        label: "Logistics",
        primary: "#EA580C",       // orange-600
        header: "#9A3412",        // orange-800
        bg: "#FFF7ED",            // orange-50
        bubble: "#FFEDD5",        // orange-100
    },

    // ── Consultancy ────────────────────────────────────────────────────
// Corporate Blue — trust, strategy, professionalism
CONSULTANCY: {
    label: "Consultancy",
    primary: "#2563EB",      // blue-600
    header: "#1D4ED8",       // blue-700
    bg: "#EFF6FF",           // blue-50
    bubble: "#DBEAFE",       // blue-100
},

};

/** Resolve theme safely — always returns a valid theme object */
export function getTheme(_department: string | { name?: string; department?: string } | null) {
    return departmentThemeMap.CONSULTANCY;
    // if (!department) return departmentThemeMap.DEFAULT;

    // const dept =
    //     typeof department === "string"
    //         ? department
    //         : department?.name ||
    //         department?.department ||
    //         "DEFAULT";

    // return (
    //     departmentThemeMap[String(dept).toUpperCase()] ??
    //     departmentThemeMap.DEFAULT
    // );
}

export function getThemeFromPathname(pathname: string) {
    const path = pathname.toLowerCase();

    const matchedKey = Object.keys(departmentThemeMap).find(
        (key) =>
            key !== "DEFAULT" &&
            key !== "GENERAL" &&
            path.includes(key.toLowerCase())
    );

    return matchedKey
        ? departmentThemeMap[matchedKey]
        : null;
}
