import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "@themes/theme";
import Head from "next/head";
import { RangeBottom } from "@components/esthetic/range/Range";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabi Designns</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="http://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <RangeBottom />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
