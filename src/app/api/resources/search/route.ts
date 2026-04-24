import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { RESOURCES, Resource } from "@/data/resources";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request: NextRequest) {
  try {
    const { query, category } = await request.json();

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "Groq API Key not configured" }, { status: 500 });
    }

    // Prepare context for Groq
    const resourceContext = RESOURCES.filter(
      (r) => category === "All" || r.category === category
    )
      .map((r) => `[ID: ${r.id}] ${r.title}: ${r.description} (Tags: ${r.tags.join(", ")})`)
      .join("\n");

    const prompt = `You are an AI assistant for a developer resources vault called "CodeMinded Vault".
The user is searching for: "${query}"
Currently filtered category: ${category}

Here is the list of available resources:
${resourceContext}

Task:
1. Analyze the user's query.
2. Select the most relevant resources from the list above.
3. For each selected resource, generate a brief, unique, and insightful 1-2 sentence description explaining WHY this specific resource is useful for their query.
4. If no resources match, provide a brief helpful message.

Respond ONLY with a JSON object in this exact format:
{
  "matches": [
    {
      "id": "resource_id",
      "aiDescription": "Your custom insight here..."
    }
  ],
  "message": "Optional helpful message if no matches"
}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    const responseContent = completion.choices[0]?.message?.content;
    
    if (!responseContent) {
      throw new Error("No response from Groq");
    }

    const aiResponse = JSON.parse(responseContent) as {
      matches: { id: string; aiDescription: string }[];
      message?: string;
    };

    // Hydrate the full resource data into the AI's matches
    const results = aiResponse.matches
      .map((match) => {
        const resource = RESOURCES.find((r) => r.id === match.id);
        if (resource) {
          return { ...resource, aiDescription: match.aiDescription };
        }
        return null;
      })
      .filter(Boolean) as (Resource & { aiDescription: string })[];

    return NextResponse.json({ results, message: aiResponse.message });
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
