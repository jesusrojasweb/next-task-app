import React, { useEffect, useState } from "react";
import { getTasksService } from "../services/taskServices";
import TaskItem from "./TaskItem";

function TasksContainer({ tasks, deleteTask }) {
  return (
    <>
      <h2>ToDo</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} {...task} deleteTask={deleteTask} />
      ))}
    </>
  );
}

export default TasksContainer;
