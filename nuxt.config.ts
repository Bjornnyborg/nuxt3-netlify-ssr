import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  meta: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  target: "server",
  publicRuntimeConfig: {
    CONTENT_ENDPOINT: process.env.CONTENT_ENDPOINT,
  },
  typescript: {
    strict: true,
  },
  loading: { color: "#0B0F89", throttle: 200 },
  build: {
    extractCSS: true,
    optimizeCSS: true,
  },
  pageTransition: {
    name: "home",
    mode: "out-in",
  },
  router: {
    trailingSlash: true,
  },
  vite: {},
});
