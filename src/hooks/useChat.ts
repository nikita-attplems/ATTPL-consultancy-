"use client";

import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";

import {
    addMessage,
    setTyping,
    setMode,
    setSessionId,
    setWhatsappLink,
    Message,
    ChatMode,
} from "@/redux/slices/chatSlice";

export const useChat = () => {
    const dispatch = useDispatch<AppDispatch>();

    const messages = useSelector(
        (state: RootState) => state.chat.messages
    );

    const isTyping = useSelector(
        (state: RootState) => state.chat.isTyping
    );

    const mode = useSelector(
        (state: RootState) => state.chat.mode
    );

    const sessionId = useSelector(
        (state: RootState) => state.chat.sessionId
    );

    const whatsappLink = useSelector(
        (state: RootState) => state.chat.whatsappLink
    );

    const addMsg = useCallback(
        (message: Message) => dispatch(addMessage(message)),
        [dispatch]
    );

    const setIsTyping = useCallback(
        (value: boolean) => dispatch(setTyping(value)),
        [dispatch]
    );

    const setChatMode = useCallback(
        (value: ChatMode) => dispatch(setMode(value)),
        [dispatch]
    );

    const saveSessionId = useCallback(
        (id: string) => dispatch(setSessionId(id)),
        [dispatch]
    );

    const saveWhatsappLink = useCallback(
        (link: string | null) =>
            dispatch(setWhatsappLink(link)),
        [dispatch]
    );

    return {
        messages,
        isTyping,
        mode,
        sessionId,
        whatsappLink,

        addMsg,
        setIsTyping,
        setChatMode,
        saveSessionId,
        saveWhatsappLink,
    };
};
