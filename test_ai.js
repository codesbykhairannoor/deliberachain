const { GoogleGenerativeAI } = require("@google/generative-ai");

const GEMINI_KEY = "AIzaSyDZNuDnMt-vyqV5eDa8X-bNO8UhmPvCErM";
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function testAI(description) {
  const prompt = `
    Analyze the following text for a public policy platform.
    
    RULES:
    1. CATEGORIES: Infrastruktur | Pendidikan | Kesehatan | Keamanan | Lingkungan | Ekonomi | Sosial | Kritik | Pelayanan Publik | Spam/Irrelevant.
    2. VALID: Constructive complaints (e.g. "jalan rusak", "perbaiki jembatan", "pemerintah harus benahi") are VALID and should be categorized appropriately.
    3. SPAM: Only mark as "Spam/Irrelevant" if the content is vulgar, an insult, or completely personal/random chatter.
    
    Text: "${description}"
    
    Response format (JSON):
    {
      "summary": "Brief summary",
      "category": "Infrastruktur | Pendidikan | Kesehatan | Keamanan | Lingkungan | Ekonomi | Sosial | Kritik | Pelayanan Publik | Spam/Irrelevant",
      "urgency": "low | medium | high",
      "sentiment": "positive | neutral | negative",
      "suggestedAction": "Govt recommendation"
    }
    Return ONLY JSON.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.error(error.message);
  }
}

testAI("Pemerintah harus benahi jalan di sumatera");
