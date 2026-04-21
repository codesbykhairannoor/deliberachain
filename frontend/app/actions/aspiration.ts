"use server";

import { processAspiration } from "@/lib/ai";

export async function processAspirationAction(description: string) {
  if (!description) {
    throw new Error("Deskripsi tidak boleh kosong");
  }
  
  try {
    const aiData = await processAspiration(description);
    return aiData;
  } catch (error) {
    console.error("Action Error:", error);
    throw new Error("Gagal memproses aspirasi dengan AI");
  }
}
