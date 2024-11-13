import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "diagonal-stripes":
          "linear-gradient(to right top, transparent 50%, #E2E2E2 50%, #E2E2E2 50.5%, transparent 50.5%)",
        "scroll-gradient": "linear-gradient(to bottom, #373434, #494949)",
        "custom-bord": "url(/images/bord.png)",
      },
      backgroundColor: {
        "custom-firstView": "#494949",
        "text-before": "#2A2525",
        "text-after": "#252020",
        "custom-universal": "#494949",
        "text-profile": "#D9D9D9",
        "custom-bord": "#3E3E3E",
      },
      fontFamily: {
        "first-view": ["Merriweather", "sans-serif"],
        "hover-view": ["Noto Serif JP", "sans-serif"],
      },
      clipPath: {
        // triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
        // circle: "circle(50% at 50% 50%)",
        // ellipse: "ellipse(50% 25% at 50% 50%)",
        // profile: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        // project: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        // growth: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        // certifications: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      content: {
        profile: '"Profile"',
      },
    },
  },
  variants: {
    extend: {
      clipPath: ["responsive", "hover"],
      content: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".clip-triangle": {
          "clip-path": "polygon(50% 0%, 0% 100%, 100% 100%)",
        },
        ".clip-circle": { "clip-path": "circle(50% at 50% 50%)" },
        ".clip-ellipse": { "clip-path": "ellipse(50% 25% at 50% 50%)" },
        ".clip-profile": {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 22.5% 100%)",
        },
        ".clip-project": {
          "clip-path": "polygon(0% 0%, 60% 0%, 100% 100%, 0% 100%)",
        },
        ".clip-growth": {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 41% 100%)",
        },
        ".clip-certifications": {
          "clip-path": "polygon(0% 0%, 77.8% 0%, 100% 100%, 0% 100%)",
        },
        ".content-profile::after": {
          content: '"Profile"',
        },
        // bord
        ".clip-bord": {
          "clip-path":
            "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
        },
        ".bg-custom-gradient": {
          backgroundImage: "linear-gradient(to bottom, #373434, #494949)",
        },
        ".mt-custom": {
          "& > p": {
            margin: "1vh 0",
          },
        },
        ".bg-custom-bord": {
          "background-image": "url('/images/bord.png')", // 背景画像のパスを指定
          "background-size": "contain", // 画像をアスペクト比を維持して表示
          "background-position": "center", // 背景画像の位置を中央に設定
          "background-repeat": "no-repeat", // 背景画像を繰り返さない
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
