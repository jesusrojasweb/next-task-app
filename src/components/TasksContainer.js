import React, { useEffect, useState } from "react";
import { getTasksService } from "../services/taskServices";

function TasksContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksService()
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTasks(res.tasks);
      });
  }, []);

  return (
    <>
      <h2>Tareas</h2>
    </>
  );
}

export default TasksContainer;
