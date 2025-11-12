const tv32Prime = "/images/32-prime.png";
const tv32Max = "/images/32-max.png";
const tv32Gt = "/images/32-gt.png";

const tv43Pro = "/images/43-pro.png";
const tv43Prime = "/images/43-prime.png";
const tv43Max = "/images/43-max.png";
const tv43Gt = "/images/43-gt.png";

const tv55Max = "/images/55-max.png";
const tv55Gt = "/images/55-gt.png";

const tv65Max = "/images/65-max.png";
const tv65Gt = "/images/65-gt.png";

const banner = "/images/banner.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  size: string;
  screenSize: string;
  resolution: string;
  tier: "PRO" | "PRIME" | "MAX" | "GT";
  features: string[];
  apps: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: "ort32-prime",
    name: "ORT32 PRIME",
    price: "₹16,999",
    image: tv32Prime,
    size: "32",
    screenSize: '80cm (32")',
    resolution: "1366 X 768 HD",
    tier: "PRIME",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Bezel less design",
      "A Grade Display Panel",
      "Ultrabright Display",
      "HD",
      "Free Live Channels & Cloud Operating System",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort32-max",
    name: "ORT32 MAX",
    price: "₹18,999",
    image: tv32Max,
    size: "32",
    screenSize: '80cm (32")',
    resolution: "1366 X 768 HD",
    tier: "MAX",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Bezel less design",
      "A Grade Display Panel",
      "Ultrabright Display",
      "HD",
      "BT Remote with Voice Assistant",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort32-gt",
    name: "ORT32 GT",
    price: "₹20,999",
    image: tv32Gt,
    size: "32",
    screenSize: '80cm (32")',
    resolution: "1366 X 768 HD",
    tier: "GT",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Bezel less design",
      "A Grade Display Panel",
      "Ultrabright Display",
      "HD",
      "BT Remote with Voice Assistant",
    ],
    apps: [
      "Google Play",
      "Google TV",
      "Netflix",
      "Prime Video",
      "YouTube",
      "Sony Liv",
      "Dolby Audio",
    ],
  },
  {
    id: "ort43-pro",
    name: "ORT43 PRO",
    price: "₹30,990",
    image: tv43Pro,
    size: "43",
    screenSize: '109cm (43")',
    resolution: "1920 X 1080 FHD",
    tier: "PRO",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Frameless Design",
      "A Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "FHD",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort43-prime",
    name: "ORT43 PRIME",
    price: "₹31,990",
    image: tv43Prime,
    size: "43",
    screenSize: '109cm (43")',
    resolution: "1920 X 1080 FHD",
    tier: "PRIME",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Frameless Design",
      "A Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "FHD",
      "Free Live Channels & Cloud Operating System",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort43-max",
    name: "ORT43 MAX",
    price: "₹33,990",
    image: tv43Max,
    size: "43",
    screenSize: '109cm (43")',
    resolution: "1920 X 1080 FHD",
    tier: "MAX",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Frameless Design",
      "A Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "FHD",
      "BT Remote with Voice Assistant",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort43-gt",
    name: "ORT43 GT",
    price: "₹35,990",
    image: tv43Gt,
    size: "43",
    screenSize: '109cm (43")',
    resolution: "1920 X 1080 FHD",
    tier: "GT",
    features: [
      "Built in Wi-Fi",
      "Remote Control",
      "Wall Mountable",
      "Frameless Design",
      "A Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "FHD",
      "BT Remote with Voice Assistant",
    ],
    apps: [
      "Google Play",
      "Google TV",
      "Netflix",
      "Prime Video",
      "YouTube",
      "Sony Liv",
      "Dolby Audio",
    ],
  },
  {
    id: "ort55-max",
    name: "ORT55 MAX",
    price: "₹55,999",
    image: tv55Max,
    size: "55",
    screenSize: '140cm (55")',
    resolution: "4K UHD HDR 10",
    tier: "MAX",
    features: [
      "App Support",
      "Built in Wi-Fi & BT",
      "Frameless Design",
      "Wall Mountable",
      "Dual Band Wi-Fi",
      "A+ Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "BT Remote with Voice Assistant",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort55-gt",
    name: "ORT55 GT",
    price: "₹58,999",
    image: tv55Gt,
    size: "55",
    screenSize: '140cm (55")',
    resolution: "4K UHD HDR 10",
    tier: "GT",
    features: [
      "App Support",
      "Built in Wi-Fi & BT",
      "Frameless Design",
      "Wall Mountable",
      "Dual Band Wi-Fi",
      "A+ Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "BT Remote with Voice Assistant",
    ],
    apps: [
      "Google Play",
      "Google TV",
      "Netflix",
      "Prime Video",
      "YouTube",
      "Sony Liv",
      "Dolby Audio",
    ],
  },
  {
    id: "ort65-max",
    name: "ORT65 MAX",
    price: "₹65,999",
    image: tv65Max,
    size: "65",
    screenSize: '165cm (65")',
    resolution: "4K UHD HDR 10",
    tier: "MAX",
    features: [
      "App Support",
      "Built in Wi-Fi & BT",
      "Frameless Design",
      "Wall Mountable",
      "Dual Band Wi-Fi",
      "A+ Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "BT Remote with Voice Assistant",
    ],
    apps: ["Netflix", "Prime Video", "YouTube", "Sony Liv", "Dolby Audio"],
  },
  {
    id: "ort65-gt",
    name: "ORT65 GT",
    price: "₹68,999",
    image: tv65Gt,
    size: "65",
    screenSize: '165cm (65")',
    resolution: "4K UHD HDR 10",
    tier: "GT",
    features: [
      "App Support",
      "Built in Wi-Fi & BT",
      "Frameless Design",
      "Wall Mountable",
      "Dual Band Wi-Fi",
      "A+ Grade Display Panel/Glossy Panel",
      "Ultrabright Display",
      "BT Remote with Voice Assistant",
    ],
    apps: [
      "Google Play",
      "Google TV",
      "Netflix",
      "Prime Video",
      "YouTube",
      "Sony Liv",
      "Dolby Audio",
    ],
  },
];

export { banner };
