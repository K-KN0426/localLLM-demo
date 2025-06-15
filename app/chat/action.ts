"use server";
import OpenAI from "openai";
import type { IChatMessage } from "@/type";

const client = new OpenAI({
  apiKey: "ollama",
  baseURL: "http://localhost:11434/v1",
});

export async function test(messages: IChatMessage[]): Promise<string | null> {
  if (!messages || messages.length === 0) {
    return null;
  }

  const chatCompletion = await client.chat.completions.create({
    // 受け取った会話履歴をそのまま渡す
    messages: messages,
    model: "gemma3:4b", // お使いのモデル
  });

  return chatCompletion.choices[0].message.content;
}
