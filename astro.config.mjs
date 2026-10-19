// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Unicode ranges match the Google Fonts subsets the files were taken from.
const onestVariant = (subset, unicodeRange) => ({
  src: [`./src/assets/fonts/onest-${subset}.woff2`],
  weight: "100 900",
  style: "normal",
  unicodeRange,
});

export default defineConfig({
  env: {
    schema: {
      // Address of the app that every button leads to, e.g. https://app.example.com
      PUBLIC_APP_URL: envField.string({
        context: "client",
        access: "public",
        url: true,
        default: "https://app.example.com",
      }),
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Onest",
      cssVariable: "--font-onest",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          onestVariant("cyrillic", ["U+0301", "U+0400-045F", "U+0490-0491", "U+04B0-04B1", "U+2116"]),
          onestVariant("latin", [
            "U+0000-00FF",
            "U+0131",
            "U+0152-0153",
            "U+02BB-02BC",
            "U+02C6",
            "U+02DA",
            "U+02DC",
            "U+0304",
            "U+0308",
            "U+0329",
            "U+2000-206F",
            "U+20AC",
            "U+2122",
            "U+2191",
            "U+2193",
            "U+2212",
            "U+2215",
            "U+FEFF",
            "U+FFFD",
          ]),
          // Only the arrow used in the buttons is taken from the math subset.
          onestVariant("math", ["U+2192"]),
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
