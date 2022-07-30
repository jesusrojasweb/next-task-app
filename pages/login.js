import { Button, Container, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import { loginVerificationService } from "../src/services/authServices";

export default function Login() {
  const router = useRouter();

  const [message, setMessage] = useState("");

  const { code = undefined } = router.query;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (code || token) {
      setMessage("Redirecting...");
      loginVerificationService(code)
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("token", res.token);
          router.push("/tasks");
        });
    } else {
      setMessage("You have to Login");
    }
  }, [code]);

  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App Text" />
      </Head>
      <Container maxwith="sm">
        <main>
          <h1 data-cy="login-message">{message}</h1>
        </main>
      </Container>
    </div>
  );
}
