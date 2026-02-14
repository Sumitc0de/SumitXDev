import { SYSTEM_PROMPT } from "./systemPrompts";
import { ROADMAP_PROMPT } from "./roadmapPrompt";
import { PROJECT_PROMPT } from "./projectPrompt";
import { SAAS_PROMPT } from "./saasPrompt";

export function getPromptByMode(mode: string) {
  switch (mode) {
    case "ROADMAP":
      return `${SYSTEM_PROMPT}\n${ROADMAP_PROMPT}`;
    case "PROJECT":
      return `${SYSTEM_PROMPT}\n${PROJECT_PROMPT}`;
    case "SAAS":
      return `${SYSTEM_PROMPT}\n${SAAS_PROMPT}`;
    default:
      return SYSTEM_PROMPT; // Persona / Ask mode
  }
}
