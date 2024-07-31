import { client } from "./axiosClient";

export function register({ email, password }) {
  return client.post(
    "register",
    { email, password },
    { authorization: false }
  );
}

export function login({ email, password }) {
    return client.post(
      "login",
      { email, password },
      { authorization: false }
    );
  }

export function getProfile() {
  return client.get("/profile");
}