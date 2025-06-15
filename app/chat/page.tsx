"use client";
import { useState } from "react";
import { test } from "./action";
import type { IChatMessage } from "@/type";
import ChatMessageArea from "./_component/chatMessageArea";
import Spinner from "@/components/loading/Spinner";

export default function Home() {
  const [content, setContent] = useState<string | null>("");
  const [chatMessages, setChatMessages] = useState<IChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClick = async (content: string) => {
    setIsLoading(true);
    if (!content.trim()) return;

    const newChatMessages: IChatMessage[] = [
      ...chatMessages,
      { role: "user", content: content },
    ];
    setChatMessages(newChatMessages);
    setContent("");

    const rawText: string | null = await test(newChatMessages);

    if (rawText) {
      setChatMessages([
        ...newChatMessages,
        { role: "assistant", content: rawText },
      ]);
    } else {
      console.error("返答なし");
      setChatMessages([
        ...newChatMessages,
        {
          role: "assistant",
          content: "エラーが発生しました。もう一度お試しください。",
        },
      ]);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col">
      <div className="flex-grow overflow-y-auto pb-24">
        <ChatMessageArea chatMessages={chatMessages} />
        {!isLoading && (
          <div className="flex gap-3 ml-8 items-center my-3">
            <Spinner className="justify-start " />
            <p className="animate-pulse items-center justify-center">
              お待ちください...
            </p>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex items-center gap-3 border-t bg-white p-4">
        <input
          value={content ?? ""}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing) {
              onClick(content ?? "");
            }
          }}
          className="flex-grow rounded-md border-2 p-3 font-semibold"
        />
        <button
          className="rounded-md border-2 bg-blue-500 p-3 font-semibold text-white hover:bg-blue-600"
          onClick={() => onClick(content ?? "")}
        >
          送信
        </button>
      </div>
    </div>
  );
}
