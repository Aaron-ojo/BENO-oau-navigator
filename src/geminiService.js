// src/geminiService.js

// ✅ Replace this with your Gemini API key
const API_KEY = "AIzaSyAG8pcOybByeG7YZvs4W4sciuOZV9lXRq0";

let genAIModule = null;
let model = null;

// Load the Google Generative AI module dynamically
const loadGoogleAI = async () => {
  if (!genAIModule) {
    genAIModule = await import("@google/generative-ai");
  }
  return genAIModule;
};

// Initialize the model (called automatically on first use)
const initializeModel = async () => {
  if (!model) {
    const { GoogleGenerativeAI } = await loadGoogleAI();
    const genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }
  return model;
};

export async function askGemini(prompt) {
  try {
    const currentModel = await initializeModel();
    const result = await currentModel.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error with Gemini:", error);
    return "Sorry, I couldn't process your request. Try again!";
  }
}
