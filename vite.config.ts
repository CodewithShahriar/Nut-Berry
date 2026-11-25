import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mock-api-middleware",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/api/newsletter" && req.method === "POST") {
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                success: true,
                message: "Thank you for subscribing to Nut & Berry!",
              })
            );
            return;
          }
          if (req.url === "/api/orders" && req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
            });
            req.on("end", () => {
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  success: true,
                  orderId: "NB-" + Date.now().toString().slice(-6),
                  message: "Order placed successfully!",
                })
              );
            });
            return;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "next/image": path.resolve(__dirname, "./src/shims/next-image.tsx"),
      "next/link": path.resolve(__dirname, "./src/shims/next-link.tsx"),
    },
  },
  server: {
    port: 3001,
    strictPort: false,
    host: true,
  },
});
