"use server";

import { processAspiration, moderateContent } from "@/lib/ai";

export async function processAspirationAction(description: string) {
  if (!description) {
    throw new Error("Deskripsi tidak boleh kosong");
  }
  
  try {
    // 1. Moderate content first
    const moderation = await moderateContent(description);
    if (!moderation.isSafe) {
      throw new Error(`Aspirasi ditolak oleh AI: ${moderation.reason || "Konten tidak pantas atau mengandung spam/SARA."}`);
    }

    // 2. Extract structured data
    const aiData = await processAspiration(description);
    return aiData;
  } catch (error: any) {
    console.error("Action Error:", error);
    // Rethrow with the specific AI rejection reason if applicable
    throw new Error(error.message || "Gagal memproses aspirasi dengan AI");
  }
}
