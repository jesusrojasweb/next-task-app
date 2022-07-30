import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { loginService } from "../services/authServices";

function LoginButton() {
  const login = loginService;

  return (
    <Button
      data-cy="login-button"
      variant="contained"
      sx={{ marginRight: "1em" }}
      onClick={login}
    >
      Login
    </Button>
  );
}

export default LoginButton;
