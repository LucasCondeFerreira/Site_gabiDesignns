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

        {/* Link para fonte Quicksand */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Link para fonte Lemon Milk */}
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
