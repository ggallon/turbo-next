import sharedConfig from "@repo/tailwind-config";
import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./node_modules/@repo/ui/src/**/*.{ts,tsx}", // @repo/ui
  ],
  presets: [sharedConfig],
  // Customizations specific to this project would go here
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
} satisfies Config;
