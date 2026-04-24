import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { RESOURCES, Resource } from "@/data/resources";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request: NextRequest) {
  try {
    const { context } = await request.json(); // context could be user's recent searches or interests

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "Groq API Key not configured" }, { status: 500 });
    }

    const resourceContext = RESOURCES.map(
      (r) => `[ID: ${r.id}] ${r.title}: ${r.description}`
    ).join("\n");

    const prompt = `You are a smart recommendation engine for a developer resources vault.
The user's recent context/interest is: "${context || "General frontend and full-stack development"}"

Here are the available resources:
${resourceContext}

Select exactly 3 resources that would be most highly recommended for this user.
Respond ONLY with a JSON object in this format:
{
  "recommendations": ["id1", "id2", "id3"]
}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    const responseContent = completion.choices[0]?.message?.content;
    
    if (!responseContent) throw new Error("No response");

    const aiResponse = JSON.parse(responseContent) as { recommendations: string[] };

    const results = aiResponse.recommendations
      .map((id) => RESOURCES.find((r) => r.id === id))
      .filter(Boolean) as Resource[];

    // Fallback if AI fails to return 3
    if (results.length === 0) {
      results.push(...RESOURCES.filter((r) => r.featured).slice(0, 3));
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Recommend API Error:", error);
    // Fallback to featured
    const fallback = RESOURCES.filter((r) => r.featured).slice(0, 3);
    return NextResponse.json({ results: fallback });
  }
}
