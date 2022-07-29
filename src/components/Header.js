import { Button, Container, Grid } from "@mui/material";
import React from "react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import Link from "next/link";

function Header({ haveToken = false }) {
  console.log(haveToken);

  return (
    <header
      style={{
        background: "#20212c",
      }}
    >
      <Container maxwith="sm">
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <h1 style={{ color: "white" }}>Task App</h1>
          </div>
          <div>{haveToken ? <LogoutButton /> : <LoginButton />}</div>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
