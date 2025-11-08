export interface ProductSpecifications {
  display: {
    resolution: string;
    screenType: string;
    refreshRate: string;
    hdr: string;
    brightness: string;
    colorGamut: string;
  };
  audio: {
    speakers: string;
    audioTechnology: string;
    powerOutput: string;
  };
  smartFeatures: {
    os: string;
    processor: string;
    ram: string;
    storage: string;
  };
  connectivity: {
    wifi: string;
    bluetooth: string;
    hdmi: string;
    usb: string;
    ethernet: string;
    opticalAudio: string;
  };
  design: {
    bezelType: string;
    wallMount: string;
    standType: string;
    weight: string;
  };
}

export interface ProductDetails {
  specifications: ProductSpecifications;
  keyFeatures: string[];
  inTheBox: string[];
}

const createSpecifications = (
  size: string,
  tier: string,
  resolution: string
): ProductDetails => {
  const is4K = resolution.includes("4K");
  const isFHD = resolution.includes("FHD") || resolution.includes("1920");
  
  const tierSpecs = {
    PRO: { ram: "2GB", storage: "16GB", speakers: "2.0 Channel, 20W", brightness: "300 nits" },
    PRIME: { ram: "2.5GB", storage: "24GB", speakers: "2.1 Channel, 30W", brightness: "400 nits" },
    MAX: { ram: "3GB", storage: "32GB", speakers: "2.1 Channel, 40W", brightness: "500 nits" },
    GT: { ram: "4GB", storage: "64GB", speakers: "2.2 Channel, 60W", brightness: "600 nits" },
  };

  const currentTier = tierSpecs[tier as keyof typeof tierSpecs] || tierSpecs.PRO;
  const sizeNum = parseInt(size);
  const vesaSize = sizeNum <= 43 ? "200x200mm" : sizeNum <= 55 ? "300x300mm" : "400x400mm";
  const weight = sizeNum === 32 ? "6kg" : sizeNum === 43 ? "9kg" : sizeNum === 55 ? "14kg" : "18kg";

  return {
    specifications: {
      display: {
        resolution: is4K ? "3840 × 2160 (4K UHD)" : isFHD ? "1920 × 1080 (Full HD)" : "1366 × 768 (HD)",
        screenType: tier === "GT" || tier === "MAX" ? "QLED with Quantum Dot" : "LED with Wide Color Enhancer",
        refreshRate: tier === "GT" ? "120Hz Native" : "60Hz Native",
        hdr: is4K ? (tier === "GT" || tier === "MAX" ? "HDR10+, HLG, Dolby Vision" : "HDR10+, HLG") : "HDR10",
        brightness: `${currentTier.brightness} peak brightness`,
        colorGamut: tier === "GT" || tier === "MAX" ? "95% DCI-P3" : "85% DCI-P3",
      },
      audio: {
        speakers: currentTier.speakers + " Output",
        audioTechnology: tier === "GT" ? "Dolby Atmos, DTS:X" : tier === "MAX" ? "Dolby Digital Plus, DTS Virtual:X" : "Dolby Digital Plus",
        powerOutput: currentTier.speakers.split(", ")[1] + " Total Audio Power",
      },
      smartFeatures: {
        os: "Orizma Smart OS 5.0 (Android TV 13)",
        processor: tier === "GT" ? "Quad-Core Cortex A73 2.0GHz" : "Quad-Core Cortex A73 1.8GHz",
        ram: currentTier.ram,
        storage: currentTier.storage,
      },
      connectivity: {
        wifi: tier === "GT" ? "WiFi 6 (802.11ax)" : "WiFi 5 (802.11ac)",
        bluetooth: tier === "GT" || tier === "MAX" ? "Bluetooth 5.2" : "Bluetooth 5.0",
        hdmi: tier === "GT" ? "4x HDMI 2.1 (1x eARC)" : "3x HDMI 2.0 (1x eARC)",
        usb: tier === "GT" ? "3x USB 3.0" : "2x USB 2.0",
        ethernet: "1x Gigabit Ethernet",
        opticalAudio: "1x Optical Audio Out",
      },
      design: {
        bezelType: tier === "GT" || tier === "MAX" ? "Bezel-less Design" : "Slim Bezel Design",
        wallMount: `VESA ${vesaSize} (Compatible)`,
        standType: tier === "GT" ? "Premium Metallic Stand" : "V-Shaped Metal Stand",
        weight: `${weight} (without stand)`,
      },
    },
    keyFeatures: [
      is4K ? "Stunning 4K Ultra HD Resolution" : isFHD ? "Crystal Clear Full HD" : "Vibrant HD Display",
      tier === "GT" || tier === "MAX" ? "QLED Quantum Dot Technology" : "Advanced LED Panel",
      `${currentTier.brightness} Peak Brightness`,
      tier === "GT" ? "120Hz Refresh Rate for Smooth Motion" : "60Hz Refresh Rate",
      `Powerful ${currentTier.speakers} Audio System`,
      tier === "GT" ? "Dolby Atmos & DTS:X Audio" : "Dolby Digital Plus Audio",
      "Android TV 13 with Google Assistant",
      "Built-in Chromecast",
      tier === "GT" || tier === "MAX" ? "AI-Powered Picture Enhancement" : "Smart Picture Optimization",
      "Access to 400,000+ Movies & Shows",
      "Screen Mirroring & Casting",
      tier === "GT" ? "Auto Low Latency Mode (ALLM)" : "Game Mode",
      "Parental Controls",
      tier === "GT" || tier === "MAX" ? "Ambient Mode" : "Screen Saver Mode",
      `${currentTier.ram} RAM & ${currentTier.storage} Storage`,
    ],
    inTheBox: [
      `ORIZMA ${size}" ${tier} Series Television`,
      tier === "GT" ? "Premium Bluetooth Voice Remote" : "Bluetooth Voice Remote with Google Assistant",
      "User Manual & Warranty Card",
      "Power Cable",
      tier === "GT" ? "Premium Metallic Stand" : "V-Shaped Metal Stand",
      "Wall Mount Screws & Spacers",
      tier === "GT" || tier === "MAX" ? "Premium HDMI Cable" : "Standard HDMI Cable",
      "AAA Batteries for Remote (2x)",
      "Cable Management Clips",
      tier === "GT" ? "Microfiber Cleaning Cloth" : null,
      tier === "GT" ? "Quick Start Guide" : null,
    ].filter(Boolean) as string[],
  };
};

export const getProductSpecifications = (
  productId: string,
  size: string,
  tier: string,
  resolution: string
): ProductDetails => {
  return createSpecifications(size, tier, resolution);
};
