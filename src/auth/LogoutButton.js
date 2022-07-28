import { Button } from "@mui/material";
import React from "react";
import { logOutService } from "../services/authServices";

function LogoutButton() {
  const logOut = logOutService;

  return (
    <Button variant="contained" color="secondary" onClick={logOut}>
      LogOut
    </Button>
  );
}

export default LogoutButton;
