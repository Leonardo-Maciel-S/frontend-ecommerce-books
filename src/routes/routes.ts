import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login/login";
import CreateBook from "@/pages/create-book";
import { authLoader } from "./loaders/auth";
import MyBooks from "@/pages/my-books";
import EditBook from "@/pages/edit-book";
import BookDetails from "@/pages/BookDetails/BookDetails";
import Addresses from "@/pages/addresses/addresses";

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
        path: "book-details/:id",
        Component: BookDetails,
      },
      {
        path: "/create-book",
        loader: authLoader,
        Component: CreateBook,
      },

      {
        path: "/edit-book/:id",
        loader: authLoader,
        Component: EditBook,
      },

      {
        path: "/my-books",
        loader: authLoader,
        Component: MyBooks,
      },

      {
        path: "/my-addresses",
        loader: authLoader,
        Component: Addresses,
      },
    ],
  },
]);
