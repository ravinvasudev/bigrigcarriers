**Pattern for adding new data files to the bot's knowledge:**

1. **Create the data file** under `data` following the existing convention (typed array/object export), e.g. `src/components/data/testimonials.ts` or `equipment-specs.ts`.
2. **Import it in `chatbot-context.ts`** and format it into a short labeled section, same as the existing ones.
3. **Nothing else changes** — `route.ts` just calls `buildChatbotContext()`, so any new section is automatically included in the system prompt.

Example for a new `equipment-specs.ts`:

```ts
// src/components/data/equipment-specs.ts
export interface EquipmentSpec {
  type: string;
  capacity: string;
  notes: string;
}

export const equipmentSpecs: EquipmentSpec[] = [
  { type: "Reefer trailer", capacity: "43,000 lbs", notes: "Multi-temp zones available" },
];
```

```ts
// src/lib/chatbot-context.ts
import { equipmentSpecs } from "@/components/data/equipment-specs";
...
const equipmentSpecLines = equipmentSpecs
  .map((item) => `- ${item.type} (${item.capacity}): ${item.notes}`)
  .join("\n");
...
return `
    ...
    Equipment specs:
    ${equipmentSpecLines}
    ...`.trim();
```

**Guidelines to keep in mind as you add files:**

- Keep entries short/factual — every line here is injected into every chat request's token budget (cost + latency on Groq).
- Reuse existing data files where possible instead of duplicating facts across two files (single source of truth also used by the pages).
- If a future data file gets large (dozens+ of entries), consider trimming/summarizing what you inject rather than dumping everything — full RAG/embeddings would only be worth it at real content scale, not for a handful of FAQ topics.