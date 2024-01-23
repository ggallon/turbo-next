import sharedConfig from "@repo/tailwind-config";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./node_modules/@repo/ui/src/**/*.{ts,tsx}", // @repo/ui
  ],
  presets: [sharedConfig],
} satisfies Config;
