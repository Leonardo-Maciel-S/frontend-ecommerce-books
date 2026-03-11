import { redirect } from "react-router";

export async function redirectHome() {
  throw redirect("/");
}
