import { Container } from "@mui/material";
import Head from "next/head";
import HomeMessage from "../src/components/HomeMessage";

export default function Home({ haveToken }) {
  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App Text" />
      </Head>
      <Container maxwith="sm">
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          <h1>This is the task app</h1>
          <HomeMessage haveToken={haveToken} />
        </main>
      </Container>
    </div>
  );
}
