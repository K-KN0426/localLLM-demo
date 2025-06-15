"use cilent";
import type { IChatMessage } from "@/type";
import ReactMarkdown from "react-markdown";

interface IProps {
  chatMessage: IChatMessage;
}

const ChatMessage = ({ chatMessage }: IProps) => {
  return (
    <div className="flex">
      {chatMessage.role === "user" ? (
        <div className="border-2 rounded-sm bg-gray-300/30 p-1 mr-3">
          <ReactMarkdown>{chatMessage.content}</ReactMarkdown>
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="rounded-4xl bg-blue-800" />
          <div className="border-2 rounded-sm bg-blue-300/30 p-1">
            <ReactMarkdown>{chatMessage.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChatMessage;
