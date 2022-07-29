import axios from "axios";

export const getTasksService = () => {
  const token = localStorage.getItem("token");
  let url = "http://localhost:3001/tasks";
  if (!token) {
    return;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTaskService = (task) => {
  const token = localStorage.getItem("token");
  let url = "http://localhost:3001/tasks";
  if (!token) {
    return;
  }
  return axios({
    url,
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { task },
  });
};

export const handleDoneService = (_id, isDone) => {
  const token = localStorage.getItem("token");
  let url = "http://localhost:3001/tasks/" + _id;
  if (!token) {
    return;
  }

  console.log(isDone);
  return axios({
    url,
    method: "put",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { done: !isDone },
  });
};

export const deleteTaskService = (_id) => {
  const token = localStorage.getItem("token");
  let url = "http://localhost:3001/tasks/" + _id;
  if (!token) {
    return;
  }
  return axios({
    url,
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
