import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login/login";
import CreateBook from "@/pages/create-book";
import { authLoader } from "./loaders/auth";
import MyBooks from "@/pages/my-books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",

        Component: Login,
      },

      {
        path: "/create-book",
        loader: authLoader,
        Component: CreateBook,
      },

      {
        path: "/my-books",
        loader: authLoader,
        Component: MyBooks,
      },
    ],
  },
]);
