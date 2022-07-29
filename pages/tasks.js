import { useEffect, useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import Head from "next/head";
import Header from "../src/components/Header";
import TaskInput from "../src/components/TaskInput";
import TasksContainer from "../src/components/TasksContainer";
import {
  deleteTaskService,
  getTasksService,
  handleDoneService,
} from "../src/services/taskServices";

export default function Tasks({ haveToken }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (haveToken) {
      getTasksService()
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setTasks(res.tasks);
        });
    }
  }, [haveToken]);

  const deleteTask = (_id) => {
    deleteTaskService(_id).then((res) => {
      const noDeletedTasks = tasks.filter((task) => task._id !== _id);

      setTasks(noDeletedTasks);
    });
  };

  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App Text" />
      </Head>
      <Container sx={{ maxWidth: "900px !important" }}>
        <main>
          <h1>Tasks</h1>
          <TaskInput setTasks={setTasks} tasks={tasks} />
          <TasksContainer tasks={tasks} deleteTask={deleteTask} />
        </main>
      </Container>
    </div>
  );
}
