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

        {/* Link para Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <RangeBottom />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
