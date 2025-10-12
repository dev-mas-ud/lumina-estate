import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#2B1B12" },
        secondary: { value: "#DDC7BB" },
        baseLight: { value: "#FBF5F1" },
      },
    },
  },
  config: {
    cssVarsRoot: ":root",
    initialColorMode: "light",
    useSystemColorMode: false,
    disableTransitionOnChange: true,
  },
});

export const system = createSystem(defaultConfig, config);
