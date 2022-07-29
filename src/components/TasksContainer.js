import React, { useEffect, useState } from "react";
import { getTasksService } from "../services/taskServices";
import TaskItem from "./TaskItem";

function TasksContainer({ tasks, deleteTask }) {
  return (
    <>
      {tasks[0] === undefined ? (
        <h2 style={{ textAlign: "center" }}>Create your first Task</h2>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task._id} {...task} deleteTask={deleteTask} />
        ))
      )}
      {}
    </>
  );
}

export default TasksContainer;
