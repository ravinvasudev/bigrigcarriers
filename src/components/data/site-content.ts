export interface ContentItem {
  title: string;
  description: string;
  enabled: boolean;
}

export const industries: ContentItem[] = [
  { title: "Manufacturing", description: "Planned transportation for raw materials, components, finished goods, and time-sensitive production schedules.", enabled: true },
  { title: "Food & Beverage", description: "Freight planning for packaged, refrigerated, and temperature-sensitive products moving through demanding supply chains.", enabled: true },
  { title: "Retail", description: "Coordinated transportation for replenishment freight, seasonal demand, store deliveries, and distribution programs.", enabled: true },
  { title: "Distribution", description: "Flexible capacity and clear communication for freight moving between suppliers, warehouses, terminals, and customers.", enabled: true },
];

export const serviceAreas: ContentItem[] = [
  { title: "North American coverage", description: "Transportation coverage is evaluated by lane, shipment requirements, timing, and available capacity so each move starts with a clear service plan.", enabled: true },
];

export const equipmentCategories: ContentItem[] = [
  { title: "Refrigerated", description: "Temperature-controlled capacity for fresh, frozen, and other freight requiring careful environmental planning.", enabled: true },
  { title: "Dry van", description: "Enclosed capacity for general merchandise, palletized products, and protected over-the-road freight.", enabled: true },
  { title: "Flatbed", description: "Open-deck capacity for oversized, heavy, dimensional, or difficult-to-load freight.", enabled: true },
  { title: "Intermodal", description: "Coordinated rail and truck transportation for shipments suited to a multi-modal operating plan.", enabled: true },
];

export const safetyTopics: ContentItem[] = [
  { title: "Safety philosophy", description: "Responsible transportation begins with disciplined planning, transparent communication, and respect for every person sharing the road.", enabled: true },
  { title: "Driver safety", description: "Safe operations depend on qualified drivers, thoughtful trip planning, sound judgment, and consistent attention to changing road conditions.", enabled: true },
  { title: "Equipment maintenance", description: "Reliable equipment supports safe freight movement through routine inspections, timely maintenance, and clear issue escalation.", enabled: true },
  { title: "Load securement", description: "Every load should be planned and secured according to its characteristics, equipment requirements, and applicable transportation standards.", enabled: true },
];
