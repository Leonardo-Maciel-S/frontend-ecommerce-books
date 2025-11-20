import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login/login";
import CreateBook from "@/pages/create-book/create-book";
import { authLoader } from "./loaders/auth";

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
    ],
  },
]);
