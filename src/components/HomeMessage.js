import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function HomeMessage({ haveToken }) {
  if (haveToken) {
    return (
      <>
        <p>
          Please Go to{" "}
          <Link href="/tasks">
            <Button color="secondary">/tasks</Button>
          </Link>{" "}
          to use the App
        </p>
      </>
    );
  }

  return (
    <>
      <p>Please Login to use the App</p>
    </>
  );
}

export default HomeMessage;
