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

  // const data = JSON.stringify({ task });

  // console.log(data);

  // return fetch(url, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: data,
  // });
  return axios({
    url,
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { task },
  });
};
