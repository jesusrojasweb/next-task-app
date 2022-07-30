import { Button } from "@mui/material";
import React from "react";
import { logOutService } from "../services/authServices";

function LogoutButton() {
  const logOut = logOutService;

  return (
    <Button
      data-cy="logout-button"
      variant="contained"
      color="secondary"
      onClick={logOut}
    >
      LogOut
    </Button>
  );
}

export default LogoutButton;
