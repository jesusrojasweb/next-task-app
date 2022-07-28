import { Button, Container, Grid } from "@mui/material";
import Head from "next/head";
import Header from "../src/components/Header";
import TasksComponent from "../src/components/Tasks";

export default function Tasks() {
  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App Text" />
      </Head>
      <Header />
      <Container maxWith="sm">
        <main>
          <h1>Tasks</h1>
          <TasksComponent />
        </main>
      </Container>
    </div>
  );
}
