import { Button, Container, Grid } from "@mui/material";
import React from "react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import Link from "next/link";

function Header() {
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
            <Link href="/">
              <h1 style={{ color: "white", cursor: "pointer" }}>Inicio</h1>
            </Link>
          </div>
          <div>
            <LoginButton />
            <LogoutButton />
            <Link href="/tasks">
              <Button variant="contained">
                <a>Tasks</a>
              </Button>
            </Link>
            {/* <Button variant="contained" sx={{ marginRight: "1em" }}>
              Login
            </Button>
            <Button color="secondary" variant="contained">
              Sign up
            </Button> */}
          </div>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
