import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.Generative AI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    if (!process.env.Generative AI_API_KEY) {
      console.warn("Generative AI_API_KEY is not set. Skipping moderation.");
      return NextResponse.json({ status: "SAFE", reason: "AI Moderation disabled" });
    }

    const model = genAI.getGenerativeModel({ model: "Generative AI-3.5-flash" });

    const prompt = `
      You are an AI moderator for a civic aspiration platform.
      Evaluate the following submission to determine if it is safe to be published on the blockchain.
      
      Title: ${title}
      Description: ${description}

      Rules:
      1. SPAM: Commercial promotion, gibberish, or irrelevant links.
      2. HATE_SPEECH: Slurs, targeted harassment, or severe insults.
      3. PII: Contains sensitive personal identifiable information like phone numbers or ID numbers (NIK).
      4. SAFE: Constructive feedback, complaints, or ideas. Mentions of public figures or government agencies in a critical but non-harassing manner are allowed.

      Respond ONLY with a valid JSON object in the following format:
      {
        "status": "SAFE" | "SPAM" | "HATE_SPEECH" | "PII",
        "reason": "Brief explanation of why"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();
    
    // Clean up potential markdown blocks from AI response
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const parsed = JSON.parse(cleanText);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("AI Moderation Error:", error);
    // Fail-open strategy: if AI fails, allow submission but maybe flag it later.
    // For a strict platform, this should be fail-closed. We'll use fail-open for MVP.
    return NextResponse.json({ status: "SAFE", reason: "AI Service Error - Allowed by default" });
  }
}
