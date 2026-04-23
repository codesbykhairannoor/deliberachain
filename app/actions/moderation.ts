"use server";

import { moderateContent } from "@/lib/ai";

export async function moderateCommentAction(text: string) {
  if (!text) return { isSafe: true };
  
  try {
    const result = await moderateContent(text);
    return result;
  } catch (error) {
     return { isSafe: true };
  }
}
