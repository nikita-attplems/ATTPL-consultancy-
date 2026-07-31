import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export type ChatMode = "ai" | "handoff_pending" | "human";

interface ChatState {
    chatbotOpen: boolean;
    messages: Message[];
    isTyping: boolean;
    mode: ChatMode;
    sessionId: string | null;
    whatsappLink: string | null;
    department: string | null;
    // NOTE: theme is no longer stored in Redux.
    // It is derived at render time via getTheme(department) in ChatContainer.
}

const initialState: ChatState = {
    chatbotOpen: false,
    messages: [
        {
            id: "1",
            role: "assistant",
            content: "Hello  I’m your 🌿 ATTPL (ऐट्पल) Chatbot Assistant. How can I support you today?",
        },
    ],
    isTyping: false,
    mode: "ai",
    sessionId: null,
    whatsappLink: null,
    department: null,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,

    reducers: {
        toggleChatbot: (state) => {
            state.chatbotOpen = !state.chatbotOpen;
        },
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },

        setTyping: (state, action: PayloadAction<boolean>) => {
            state.isTyping = action.payload;
        },

        setMode: (state, action: PayloadAction<ChatMode>) => {
            state.mode = action.payload;
        },

        setSessionId: (state, action: PayloadAction<string>) => {
            // Only set once — never overwrite an existing session
            if (!state.sessionId) {
                state.sessionId = action.payload;
            }
        },

        setDepartment: (state, action: PayloadAction<string>) => {
            state.department = action.payload;
        },

        setWhatsappLink: (state, action: PayloadAction<string | null>) => {
            state.whatsappLink = action.payload;
        },

        resetChat: (state) => {
            state.messages = [
                {
                    id: "1",
                    role: "assistant",
                    content: "Hello 👋 How can I help you today?",
                },
            ];
            state.isTyping = false;
            state.mode = "ai";
            state.sessionId = null;
            state.whatsappLink = null;
            state.department = null;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(
    //         fetchDepartments.fulfilled,
    //         (state, action: PayloadAction<Department[]>) => {
    //             const agritechDepartment = action.payload.find(
    //                 (dept) =>
    //                     dept.name?.trim().toLowerCase() === "agritech"
    //             );

    //             if (agritechDepartment) {
    //                 state.department = agritechDepartment.name;
    //                 // state.sessionId ??= agritechDepartment.id
    //             }
    //         }
    //     );
    // },
});

export const {
    toggleChatbot,
    addMessage,
    setTyping,
    setMode,
    setSessionId,
    setWhatsappLink,
    setDepartment,
    resetChat,
} = chatSlice.actions;

export default chatSlice.reducer;
