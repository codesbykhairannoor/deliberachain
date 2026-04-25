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
    ROLE: Objective Public Policy Analyst & Content Moderator.
    TASK: Analyze the following text submitted to a Government Aspiration Platform.
    
    SYSTEM RULES:
    1. VALID ASPIRATIONS: Infrastructure (roads, bridges), Education, Health, Security, Environment, Economy, Social issues, or Govt Services. 
    2. CONSTRUCTIVE CRITICISM: "Pemerintah harus benahi jalan", "Kenapa harga beras naik", "Guru kurang" are VALID. Categorize as "Infrastruktur", "Ekonomi", "Pendidikan", or "Kritik".
    3. SPAM/IRRELEVANT: Mark as "Spam/Irrelevant" ONLY if it is:
       - Vulgar/Insulting (e.g. "anjing", "tolol").
       - Personal chatter (e.g. "aku lapar", "mau pacaran").
       - Completely random/Gibberish.
    4. SENTIMENT: Use "negative" for complaints/criticism, but do NOT mark as "REJECTED" unless it is true spam.
    
    Text: "${description}"
    
    Response format (JSON):
    {
      "summary": "Brief objective summary",
      "category": "Infrastruktur | Pendidikan | Kesehatan | Keamanan | Lingkungan | Ekonomi | Sosial | Kritik | Pelayanan Publik | Spam/Irrelevant",
      "urgency": "low | medium | high",
      "sentiment": "positive | neutral | negative | REJECTED",
      "suggestedAction": "Govt recommendation or reason for rejection if spam"
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
    Analyze the following text for hate speech, harassment, vulgarity, or RELEVANCY.
    
    CRITICAL: 
    1. Detect vulgarity/insults (e.g. "anjing", "babi", "tolol").
    2. IRRELEVANT random chatter or personal status (e.g., "aku lagi makan", "panas ya hari ini"). 
    3. IMPORTANT: Constructive criticism or complaints about government services/infrastructure (e.g., "jalan rusak", "pelayanan lama") are SAFE and RELEVANT. Do NOT mark them as false.
    
    Text: "${text}"
    
    Response format (valid JSON only):
    {
      "isSafe": true | false,
      "reason": "Brief reason in Indonesian (e.g., 'Bahasa tidak sopan')"
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
