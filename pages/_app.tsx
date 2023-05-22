import '../styles/globals.css';
import "keen-slider/keen-slider.min.css";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { CartProvider, UiProvider } from "../context";
import { lightTheme } from "../themes";
import AOS from "aos";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100
    });

  })
  return (
    <UiProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  );
}
