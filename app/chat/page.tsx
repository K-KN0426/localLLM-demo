"use client";
import { useState } from "react";
import { test } from "./action";
export default function Home() {
  const [text, setText] = useState<string | null>("");
  const [content, setContent] = useState<string | null>("");

  const onClick = async (content: string) => {
    const rawText: string | null = await test([
      { role: "user", content: content },
    ]);

    if (rawText) {
      setText(rawText);
    } else {
      setText(null);
    }
  };
  console.log(content);

  return (
    <>
      <input
        value={content ?? ""}
        onChange={(e: any) => {
          setContent(e.target.value);
        }}
        className="border-2 rounded-sm m-3 p-3 font-semibold"
      />
      <button
        className="border-2 rounded-sm m-3 p-3 font-semibold"
        onClick={() => onClick(content ?? "")}
      >
        テキスト生成
      </button>
      <div className="w-[80vm] h-96 border-2 rounded-sm m-3 p-3">
        <p>{text}</p>
      </div>
    </>
  );
}
