import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Auth0Provider } from "@auth0/auth0-react";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas, far, fab } from "@fortawesome/free-solid-svg-icons";
import Header from "../src/components/Header";
import { useRouter } from "next/router";

library.add(fas);
config.autoAddCss = false;

const clientSideEmotionCache = createEmotionCache();

const COLOR_WHITE = { color: "#fff" };

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();
  const [haveToken, setHaveToken] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token") ? true : false;

    setHaveToken(token);
  }, [router]);

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
            h1: COLOR_WHITE,
            h2: COLOR_WHITE,
            h3: COLOR_WHITE,
            p: COLOR_WHITE,
            span: COLOR_WHITE,
            input: { color: "#fff !important" },
          }}
        />
        <Header haveToken={haveToken} />
        <Component {...pageProps} haveToken={haveToken} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
