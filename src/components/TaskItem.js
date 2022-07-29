import React, { useState } from "react";
import { Checkbox, IconButton } from "@mui/material";
import { handleDoneService } from "../services/taskServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash as fasFaTrash } from "@fortawesome/free-solid-svg-icons";

library.add(fasFaTrash);

function TaskItem(props) {
  const { done, task, _id, deleteTask } = props;

  const [isDone, setIsDone] = useState(done);

  const handleDone = () => {
    handleDoneService(_id, isDone).then((res) => {
      console.log(res);
      setIsDone(!isDone);
    });
  };

  return (
    <div
      style={{
        background: "#20212c",
        borderRadius: "10px",
        marginBottom: "2em",
        padding: "0.5em 1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Checkbox checked={isDone} onChange={handleDone} color="secondary" />
        <span style={{ color: "white" }}>{task}</span>
      </div>
      <IconButton color="text" size="small" onClick={() => deleteTask(_id)}>
        <FontAwesomeIcon icon="trash" />
      </IconButton>
    </div>
  );
}

export default TaskItem;
