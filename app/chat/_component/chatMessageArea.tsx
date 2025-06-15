import type { IChatMessage } from "@/type";
import ChatMessage from "./chatMessage";
import { cn } from "@/lib/utils";

interface IProps {
  chatMessages: IChatMessage[];
}

const ChatMessageArea = ({ chatMessages }: IProps) => {
  return (
    <div className="flex flex-col gap-2 w-screen overflow-auto">
      {chatMessages.map((chatMessage, index) => (
        <div
          key={index}
          className={cn(
            "flex w-full p-3",
            chatMessage.role === "user" && "justify-end",
            chatMessage.role === "assistant" && "justify-start"
          )}
        >
          <ChatMessage chatMessage={chatMessage} />
        </div>
      ))}
    </div>
  );
};
export default ChatMessageArea;
