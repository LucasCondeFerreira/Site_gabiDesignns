import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "@themes/theme";
import Head from "next/head";
import Range from "@components/esthetic/range/Range";
import Header, { HeaderWhite } from "@components/surface/header/Header.jsx";
import { RangeBottom } from "@components/esthetic/range/Range";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabi Designns</title>

        {/* Link para Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Range />
        <Header />
        <Component {...pageProps} />
        <RangeBottom />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
