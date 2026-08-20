import { company } from "@/components/data/company";
import { services } from "@/components/data/services";
import {
  industries,
  serviceAreas,
  equipmentCategories,
  safetyTopics,
} from "@/components/data/site-content";
import { careers } from "@/components/data/careers";
import { faqs } from "@/components/data/faqs";

// Builds the knowledge block injected into the chatbot's system prompt.
export function buildChatbotContext(): string {
  const serviceLines = services
    .map((service) => `- ${service.title}: ${service.description}`)
    .join("\n");

  const industryLines = industries
    .map((item) => `- ${item.title}: ${item.description}`)
    .join("\n");

  const equipmentLines = equipmentCategories
    .map((item) => `- ${item.title}: ${item.description}`)
    .join("\n");

  const safetyLines = safetyTopics
    .map((item) => `- ${item.title}: ${item.description}`)
    .join("\n");

  const faqLines = faqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");

  return `
    Company: ${company.name}, founded ${company.founded}. ${company.positioning}
    Phone: ${company.phone}
    Address: ${company.address.join(", ")}
    Hours: ${company.hours}
    Service area: ${serviceAreas.map((item) => item.description).join(" ")}
    Services offered: ${serviceLines}
    Industries served: ${industryLines}
    Equipment categories: ${equipmentLines}
    Safety approach: ${safetyLines}
    Careers: ${careers.contactNote}
    Frequently asked questions: ${faqLines}`.trim();
}
