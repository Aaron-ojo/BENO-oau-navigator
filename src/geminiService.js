// src/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Replace this with your Gemini API key
const API_KEY = "AIzaSyAG8pcOybByeG7YZvs4W4sciuOZV9lXRq0";

const genAI = new GoogleGenerativeAI(API_KEY);

// We’ll use the latest chat model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function askGemini(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error with Gemini:", error);
    return "Sorry, I couldn’t process your request. Try again!";
  }
}
