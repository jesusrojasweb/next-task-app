import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Auth0Provider } from "@auth0/auth0-react";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale-1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <GlobalStyles
          styles={{
            body: { backgroundColor: "#17181f" },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
