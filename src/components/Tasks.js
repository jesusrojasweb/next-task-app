import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function TasksComponent() {
  const [tasksData, setTasksData] = useState("none");

  useEffect(() => {
    const token = localStorage.getItem("token");
    let url = "http://localhost:3001/tasks";
    if (!token) {
      return;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTasksData(JSON.stringify(res));
      });
  });

  return (
    <>
      <div>Tasks</div>
      <h2>{tasksData}</h2>
    </>
  );
}

export default TasksComponent;
