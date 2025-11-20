import Cookies from "js-cookie";
import { redirect } from "react-router";

export async function authLoader() {
  const userCookies = Cookies.get("user");
  const user = userCookies ? JSON.parse(userCookies) : null;

  if (!user) {
    throw redirect("/");
  }

  return user;
}
