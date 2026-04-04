import { redirect } from "react-router";

export async function redirectMyBooks() {
  throw redirect("/profile/my-books");
}
