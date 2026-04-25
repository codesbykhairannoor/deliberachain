import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash",
  safetySettings: [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  ]
});

export interface AspirationSummary {
  summary: string;
  category: string;
  urgency: "low" | "medium" | "high";
  suggestedAction: string;
  sentiment: "positive" | "neutral" | "negative" | "REJECTED";
}

export async function processAspiration(description: string): Promise<AspirationSummary> {
  const prompt = `
    ROLE: Strict Content Moderator & Public Policy Analyst.
    TASK: Analyze the following text submitted to a Government Aspiration Platform.
    
    SYSTEM RULES:
    1. If the text contains VULGARITY, INSULTS (e.g. "anjing", "tolol", "babi"), or LEETSPEAK, you MUST mark it as "Spam/Irrelevant".
    2. If the text is PERSONAL CHATTER, OFF-TOPIC, or RANDOM (e.g. "malas pacaran", "makan enak", "curhat"), you MUST mark it as "Spam/Irrelevant".
    3. Proper aspirations must be about: Infrastructure, Education, Health, Security, Environment, Economy, Social, or Govt Services.
    
    Text: "${description}"
    
    Response format (JSON):
    {
      "summary": "Brief summary",
      "category": "Spam/Irrelevant | Infrastruktur | Pendidikan | Kesehatan | Keamanan | Lingkungan | Ekonomi | Sosial | Kritik | Pelayanan Publik",
      "urgency": "low | medium | high",
      "sentiment": "positive | neutral | negative | REJECTED",
      "suggestedAction": "Reason for rejection if spam, or govt recommendation"
    }
    Return ONLY JSON.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonStr = text.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Processing Error (Likely Safety Block):", error);
    return {
      summary: "Konten terdeteksi melanggar kebijakan atau tidak relevan.",
      category: "Spam/Irrelevant",
      urgency: "low",
      sentiment: "REJECTED",
      suggestedAction: "Aspirasi ditolak secara otomatis oleh sistem keamanan AI karena mengandung konten sensitif atau tidak relevan."
    };
  }
}

export async function moderateContent(text: string): Promise<{ isSafe: boolean; reason?: string }> {
  const prompt = `
    Analyze the following text for hate speech, harassment, vulgarity, SARA, or RELEVANCY.
    
    CRITICAL: 
    1. Detect leetspeak/obfuscation (T0LoL, 4njing, etc.).
    2. Detect IRRELEVANT random chatter or personal status (e.g., "aku lagi makan", "panas ya hari ini", "OOT"). 
    This platform is ONLY for discussing public aspirations and social issues.
    
    Text: "${text}"
    
    Response format (valid JSON only):
    {
      "isSafe": true | false,
      "reason": "Brief reason in Indonesian (e.g., 'Konten tidak relevan' or 'Bahasa tidak sopan')"
    }
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
