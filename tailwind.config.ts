import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dracula: {
          bg: {
            primary: "#282a36",
            secondary: "#1e1f29",
            tertiary: "#21222c",
          },
          green: "#50fa7b",
          cyan: "#8be9fd",
          purple: "#bd93f9",
          pink: "#ff79c6",
          orange: "#ffb86c",
          yellow: "#f1fa8c",
          red: "#ff5555",
          text: {
            primary: "#f8f8f2",
            secondary: "#6272a4",
          },
          selection: "#44475a",
        },
      },
      fontFamily: {
        mono: [
          'Fira Code',
          'JetBrains Mono',
          'Cascadia Code',
          'Consolas',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
