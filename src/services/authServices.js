import axios from "axios";

const domain = "dev-h70joa6x.us.auth0.com";
const audience = "https://taskappjesusrojasweb.com/api";
const scope = "read::challenges";
const clientId = "LJiiNAF3FXCeF6gBNjipCKylpWAcYgHk";
const responseType = "code";

const redirect = (response) => {
  if (typeof window !== "undefined") {
    window.location.replace(response);
  }
};

export const loginService = () => {
  const redirectUri = "http://localhost:3000/login";
  const response =
    `https://${domain}/authorize?` +
    `audience=${audience}&` +
    `scope=${scope}&` +
    `response_type=${responseType}&` +
    `client_id=${clientId}&` +
    `redirect_uri=${redirectUri}`;

  redirect(response);
};

export const logOutService = () => {
  const returnTo = "http://localhost:3000";

  const response = `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`;

  localStorage.removeItem("token");

  redirect(response);
};

export const loginVerificationService = (code) => {
  const token = localStorage.getItem("token");
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  let url = "http://localhost:3001/login";
  if (token) {
    headers = Object.assign(headers, { Authorization: `Bearer ${token}` });
  } else if (code) {
    url += `?code=${code}`;
  } else {
    return;
  }
  return fetch(url, {
    method: "GET",
    headers,
  });
};
