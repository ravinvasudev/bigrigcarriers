export interface Service {
  slug: string;
  number: string;
  title: string;
  pageTitle: string;
  description: string;
  detail: string;
  image: string;
  target: string;
}

export const services: Service[] = [
  {
    slug: "refrigerated",
    number: "01 / 04",
    title: "Refrigerated",
    pageTitle: "Refrigerated transportation",
    description: "Dependable temperature-controlled transportation for fresh, frozen, and other sensitive freight.",
    detail: "Refrigerated freight demands more than a trailer with a reefer unit. It requires disciplined planning, clear temperature requirements, and careful attention at every handoff. Big Rig Carriers coordinates temperature-controlled transportation around your product, pickup and delivery windows, handling requirements, and lane needs, helping protect cargo quality from origin to destination. Share the details of your shipment so our team can align the right equipment and operating plan for the load.",
    image: "/assets/refrigerated.jpg",
    target: "/services/refrigerated",
  },
  {
    slug: "dryvan",
    number: "02 / 04",
    title: "Dry Van",
    pageTitle: "Dry van transportation",
    description: "Secure, enclosed transportation for general merchandise, palletized products, and everyday supply chains.",
    detail: "Dry van transportation is the backbone of modern freight, moving everything from finished goods and packaged products to retail and manufacturing materials. Big Rig Carriers approaches each shipment with practical capacity planning, dependable communication, and close attention to appointment requirements, loading instructions, and delivery expectations. Whether the move is a single shipment or part of a recurring lane, we build the transportation conversation around your freight, schedule, and service priorities.",
    image: "/assets/dryvan.jpg",
    target: "/services/dryvan"
  },
  {
    slug: "flatbed",
    number: "03 / 04",
    title: "Flatbed",
    pageTitle: "Flatbed transportation",
    description: "Flexible open-deck transportation for oversized, heavy, dimensional, and difficult-to-load freight.",
    detail: "Flatbed freight calls for thoughtful planning before a truck arrives at the shipper. Dimensions, weight distribution, loading access, route considerations, weather exposure, and securement all influence the right operating plan. Big Rig Carriers works with you to understand the freight and site conditions, coordinate appropriate open-deck capacity, and establish clear expectations for loading and delivery. Provide the shipment dimensions, weight, pickup details, and securement requirements so we can evaluate the move accurately.",
    image: "/assets/flatbed.jpg",
    target: "/services/flatbed"
  },
  {
    slug: "intermodal",
    number: "04 / 04",
    title: "Intermodal",
    pageTitle: "Intermodal transportation",
    description: "Coordinated rail and over-the-road transportation for efficient, flexible freight movement.",
    detail: "Intermodal transportation combines the reach of trucking with the network efficiency of rail, creating a practical option for freight moving across longer distances or through established corridors. Successful intermodal planning depends on the full move: container requirements, drayage, terminal timing, rail schedules, pickup and delivery locations, and the handoffs between each mode. Big Rig Carriers helps evaluate where an intermodal solution fits your network and coordinates the shipment around its required service, timing, and handling considerations.",
    image: "/assets/intramodal.jpg",
    target: "/services/intermodal"
  },
];
