import { Button, Container, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { css } from "@emotion/react";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App Text" />
      </Head>
      <Header />
      <Container maxwith="sm">
        <main>
          <h1>This is the task app</h1>
        </main>
      </Container>
    </div>
  );
}
