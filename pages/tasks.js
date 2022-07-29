import { Button, Container, Grid } from "@mui/material";
import Head from "next/head";
import Header from "../src/components/Header";
import TaskInput from "../src/components/TaskInput";
import TasksContainer from "../src/components/TasksContainer";

export default function Tasks() {
  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App Text" />
      </Head>
      <Header />
      <Container sx={{ maxWidth: "900px !important" }}>
        <main>
          <h1>Tasks</h1>
          <TaskInput />
          <TasksContainer />
        </main>
      </Container>
    </div>
  );
}
