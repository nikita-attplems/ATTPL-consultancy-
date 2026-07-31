import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { Message } from "@/redux/slices/chatSlice";
import { DepartmentTheme } from "@/services/departmentTheme";

interface ChatMessagesProps {
    messages: Message[];
    theme: DepartmentTheme;
}

export default function ChatMessages({ messages, theme }: ChatMessagesProps) {
    const { isTyping, mode } = useChat();

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping, mode]);

    return (
        <div className="space-y-2">
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                    assistantBubbleColor={theme.bubble}
                    userBubbleColor={theme.primary + "33"}
                />
            ))}

            {isTyping && <TypingIndicator />}


            <div ref={bottomRef} />
        </div>
    );
}
