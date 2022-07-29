import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus as fasFaPlus } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { createTaskService } from "../services/taskServices";

library.add(fasFaPlus);

function TaskInput({ tasks, setTasks }) {
  const [text, setText] = useState("");

  const createTask = () => {
    if (text.trim() !== "") {
      console.log("add task");
      createTaskService(text).then((res) => {
        console.log(res);
        setText("");
        setTasks([...tasks, res.data.task]);
      });
    }
  };

  return (
    <TextField
      id="outlined-start-adornment"
      label="Add Task"
      fullWidth={true}
      color="text"
      sx={{ color: "white !important", marginBottom: "4em" }}
      onChange={(e) => setText(e.target.value)}
      value={text}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" color="secondary">
            <IconButton color="secondary" onClick={createTask}>
              <FontAwesomeIcon icon="plus" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TaskInput;
