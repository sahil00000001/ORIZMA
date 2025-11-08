import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, insertCartItemSchema, insertOrderSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.post("/api/products", async (req, res) => {
    try {
      const validatedProduct = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedProduct);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: "Invalid product data" });
    }
  });

  app.patch("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.updateProduct(req.params.id, req.body);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to update product" });
    }
  });

  app.delete("/api/products/:id", async (req, res) => {
    try {
      const success = await storage.deleteProduct(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  });

  // Cart
  app.get("/api/cart", async (req, res) => {
    try {
      const sessionId = req.session.id;
      const items = await storage.getCartItems(sessionId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cart items" });
    }
  });

  app.post("/api/cart", async (req, res) => {
    try {
      const sessionId = req.session.id;
      const validatedItem = insertCartItemSchema.parse({
        ...req.body,
        sessionId,
      });
      const item = await storage.addToCart(validatedItem);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: "Invalid cart item data" });
    }
  });

  app.patch("/api/cart/:id", async (req, res) => {
    try {
      const { quantity } = req.body;
      const item = await storage.updateCartItemQuantity(req.params.id, quantity);
      if (!item) {
        return res.status(404).json({ error: "Cart item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to update cart item" });
    }
  });

  app.delete("/api/cart/:id", async (req, res) => {
    try {
      const success = await storage.removeFromCart(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Cart item not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to remove cart item" });
    }
  });

  app.delete("/api/cart", async (req, res) => {
    try {
      const sessionId = req.session.id;
      await storage.clearCart(sessionId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to clear cart" });
    }
  });

  // Orders
  app.post("/api/orders", async (req, res) => {
    try {
      const validatedOrder = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedOrder);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: "Invalid order data" });
    }
  });

  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await storage.getOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const order = await storage.getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  app.patch("/api/orders/:id", async (req, res) => {
    try {
      const { status } = req.body;
      const order = await storage.updateOrderStatus(req.params.id, status);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to update order" });
    }
  });

  // Seed endpoint for initial data population
  app.post("/api/seed", async (req, res) => {
    try {
      const productData = [
        {
          id: "ort32-pro",
          name: "ORT32 PRO",
          price: "₹15,999",
          image: "/attached_assets/generated_images/32-inch_TV_product_shot_6cb4aeaf.png",
          size: '80cm (32")',
          resolution: "1366 X 768 HD",
          tier: "PRO",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Bezel less design", "A Grade Display Panel", "Ultrabright Display"],
        },
        {
          id: "ort32-prime",
          name: "ORT32 PRIME",
          price: "₹16,999",
          image: "/attached_assets/generated_images/32-inch_TV_product_shot_6cb4aeaf.png",
          size: '80cm (32")',
          resolution: "1366 X 768 HD",
          tier: "PRIME",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Bezel less design", "A Grade Display Panel", "Ultrabright Display", "Free Live Channels & Cloud Operating System"],
        },
        {
          id: "ort32-max",
          name: "ORT32 MAX",
          price: "₹18,999",
          image: "/attached_assets/generated_images/32-inch_TV_product_shot_6cb4aeaf.png",
          size: '80cm (32")',
          resolution: "1366 X 768 HD",
          tier: "MAX",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Bezel less design", "A Grade Display Panel", "Ultrabright Display", "BT Remote with Voice Assistant"],
        },
        {
          id: "ort32-gt",
          name: "ORT32 GT",
          price: "₹20,999",
          image: "/attached_assets/generated_images/32-inch_TV_product_shot_6cb4aeaf.png",
          size: '80cm (32")',
          resolution: "1366 X 768 HD",
          tier: "GT",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Bezel less design", "A Grade Display Panel", "Ultrabright Display", "BT Remote with Voice Assistant", "Google Play", "Google TV"],
        },
        {
          id: "ort43-pro",
          name: "ORT43 PRO",
          price: "₹30,990",
          image: "/attached_assets/generated_images/43-inch_TV_product_shot_758a16b4.png",
          size: '109cm (43")',
          resolution: "1920 X 1080 FHD",
          tier: "PRO",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display"],
        },
        {
          id: "ort43-prime",
          name: "ORT43 PRIME",
          price: "₹31,990",
          image: "/attached_assets/generated_images/43-inch_TV_product_shot_758a16b4.png",
          size: '109cm (43")',
          resolution: "1920 X 1080 FHD",
          tier: "PRIME",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "Free Live Channels & Cloud Operating System"],
        },
        {
          id: "ort43-max",
          name: "ORT43 MAX",
          price: "₹33,990",
          image: "/attached_assets/generated_images/43-inch_TV_product_shot_758a16b4.png",
          size: '109cm (43")',
          resolution: "1920 X 1080 FHD",
          tier: "MAX",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "BT Remote with Voice Assistant"],
        },
        {
          id: "ort43-gt",
          name: "ORT43 GT",
          price: "₹35,990",
          image: "/attached_assets/generated_images/43-inch_TV_product_shot_758a16b4.png",
          size: '109cm (43")',
          resolution: "1920 X 1080 FHD",
          tier: "GT",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "BT Remote with Voice Assistant", "Google Play", "4K UHD HDR 10"],
        },
        {
          id: "ort55-pro",
          name: "ORT55 PRO",
          price: "₹55,990",
          image: "/attached_assets/generated_images/55-inch_TV_product_shot_ff8031e3.png",
          size: '140cm (55")',
          resolution: "3840 X 2160 4K UHD",
          tier: "PRO",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display"],
        },
        {
          id: "ort55-prime",
          name: "ORT55 PRIME",
          price: "₹56,990",
          image: "/attached_assets/generated_images/55-inch_TV_product_shot_ff8031e3.png",
          size: '140cm (55")',
          resolution: "3840 X 2160 4K UHD",
          tier: "PRIME",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "Free Live Channels & Cloud Operating System"],
        },
        {
          id: "ort55-max",
          name: "ORT55 MAX",
          price: "₹58,990",
          image: "/attached_assets/generated_images/55-inch_TV_product_shot_ff8031e3.png",
          size: '140cm (55")',
          resolution: "3840 X 2160 4K UHD",
          tier: "MAX",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "BT Remote with Voice Assistant"],
        },
        {
          id: "ort55-gt",
          name: "ORT55 GT",
          price: "₹60,990",
          image: "/attached_assets/generated_images/55-inch_TV_product_shot_ff8031e3.png",
          size: '140cm (55")',
          resolution: "3840 X 2160 4K UHD",
          tier: "GT",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "BT Remote with Voice Assistant", "Google Play", "4K UHD HDR 10"],
        },
        {
          id: "ort65-pro",
          name: "ORT65 PRO",
          price: "₹75,990",
          image: "/attached_assets/generated_images/65-inch_TV_product_shot_7baf4268.png",
          size: '164cm (65")',
          resolution: "3840 X 2160 4K UHD",
          tier: "PRO",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display"],
        },
        {
          id: "ort65-prime",
          name: "ORT65 PRIME",
          price: "₹76,990",
          image: "/attached_assets/generated_images/65-inch_TV_product_shot_7baf4268.png",
          size: '164cm (65")',
          resolution: "3840 X 2160 4K UHD",
          tier: "PRIME",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "Free Live Channels & Cloud Operating System"],
        },
        {
          id: "ort65-max",
          name: "ORT65 MAX",
          price: "₹78,990",
          image: "/attached_assets/generated_images/65-inch_TV_product_shot_7baf4268.png",
          size: '164cm (65")',
          resolution: "3840 X 2160 4K UHD",
          tier: "MAX",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "BT Remote with Voice Assistant"],
        },
        {
          id: "ort65-gt",
          name: "ORT65 GT",
          price: "₹80,990",
          image: "/attached_assets/generated_images/65-inch_TV_product_shot_7baf4268.png",
          size: '164cm (65")',
          resolution: "3840 X 2160 4K UHD",
          tier: "GT",
          features: ["Built in Wi-Fi", "Remote Control", "Wall Mountable", "Frameless Design", "A Grade Display Panel/Glossy Panel", "Ultrabright Display", "BT Remote with Voice Assistant", "Google Play", "4K UHD HDR 10"],
        },
      ];
      
      for (const product of productData) {
        try {
          await storage.createProduct(product);
        } catch (error) {
          // Product might already exist, continue
        }
      }
      
      res.json({ success: true, message: `Seeded ${productData.length} products` });
    } catch (error) {
      res.status(500).json({ error: "Failed to seed database" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
