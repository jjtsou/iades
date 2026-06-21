import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors: {
    brand: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.700",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "whatsapp",
      },
    },
  },
})
