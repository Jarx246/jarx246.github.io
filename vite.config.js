import { defineConfig } from "vite";
import { ripple } from "@ripple-ts/vite-plugin";

export default defineConfig({
  base: "/",
  plugins: [ripple()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
