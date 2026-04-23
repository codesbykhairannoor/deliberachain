import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export interface AspirationSummary {
  summary: string;
  category: string;
  urgency: "low" | "medium" | "high";
  suggestedAction: string;
  sentiment: "positive" | "neutral" | "negative";
}

export async function processAspiration(description: string): Promise<AspirationSummary> {
  const prompt = `
    Analyze the following public aspiration/complaint and provide a JSON response.
    Aspiration: "${description}"

    Response format:
    {
      "summary": "Brief 1-sentence summary",
      "category": "One of: Infrastruktur, Pendidikan, Kesehatan, Keamanan, Lingkungan, Ekonomi, Sosial, Kritik, Pelayanan Publik",
      "urgency": "low | medium | high",
      "sentiment": "positive | neutral | negative",
      "suggestedAction": "Simple recommendation for the government"
    }
    Return only valid JSON.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // Clean up potential markdown code blocks
    const jsonStr = text.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Processing Error:", error);
    return {
      summary: description.substring(0, 100),
      category: "Lainnya",
      urgency: "medium",
      sentiment: "neutral",
      suggestedAction: "Perlu peninjauan manual oleh petugas."
    };
  }
}

export async function moderateContent(text: string): Promise<{ isSafe: boolean; reason?: string }> {
  const prompt = `
    Analyze the following text for hate speech, harassment, or SARA (ethnic/racial/religious) sensitivity.
    Text: "${text}"
    
    Response format:
    {
      "isSafe": true | false,
      "reason": "Brief reason if not safe"
    }
    Return only valid JSON.
  `;
  try {
    const result = await model.generateContent(prompt);
    const textRes = (await result.response).text();
    return JSON.parse(textRes.replace(/```json|```/g, "").trim());
  } catch (_error) {
    return { isSafe: true }; // Default to safe if error
  }
}

export async function generatePolicyBrief(aspirations: unknown[]): Promise<string> {
  const dataStr = JSON.stringify(aspirations);
  const prompt = `
    Given the following list of public aspirations in JSON format:
    ${dataStr}

    Generate a "Policy Brief" for the local government. 
    The brief should include:
    1. Executive Summary
    2. Key Issues Identified (Top Categories)
    3. Sentiment Analysis
    4. Data-driven Recommendations
    5. Proposed Implementation Timeline

    Use professional, persuasive, and data-driven language. Format as Markdown.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Policy Brief Generation Error:", error);
    return "Failed to generate policy brief. Please try again later.";
  }
}
