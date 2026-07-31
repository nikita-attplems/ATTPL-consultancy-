export default function TypingIndicator() {
    return (
        <div className="flex justify-start mb-3">
            <div className="rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center h-4">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.4s]"></span>
                </div>
            </div>
        </div>
    );
}