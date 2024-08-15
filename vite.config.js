import { defineConfig } from "vite";

import VitePluginInjectAutoTrack from "./autoTrack.js";

export default defineConfig({
  mode: "production",
  plugins: [VitePluginInjectAutoTrack()],
});
