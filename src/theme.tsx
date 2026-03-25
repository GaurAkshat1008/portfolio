import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    mono: `'JetBrains Mono', 'Fira Code', monospace`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#0a0a0a",
        color: "#e4e4e7",
        scrollBehavior: "smooth",
      },
      "::-webkit-scrollbar": {
        width: "6px",
      },
      "::-webkit-scrollbar-track": {
        bg: "#0a0a0a",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "#27272a",
        borderRadius: "full",
      },
      "::selection": {
        bg: "rgba(99, 102, 241, 0.3)",
        color: "#fff",
      },
    },
  },
  colors: {
    brand: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
    surface: {
      0: "#0a0a0a",
      1: "#111113",
      2: "#18181b",
      3: "#1e1e22",
      4: "#27272a",
    },
    text: {
      primary: "#fafafa",
      secondary: "#a1a1aa",
      tertiary: "#71717a",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "lg",
      },
    },
    Heading: {
      baseStyle: {
        color: "#fafafa",
        fontWeight: "700",
      },
    },
  },
});

export default theme;
