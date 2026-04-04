import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login/login";
import { authLoader } from "./loaders/auth";
import BookDetails from "@/pages/BookDetails/BookDetails";
import { redirectHome } from "./loaders/redirect-home";
import SeeAllBooks from "@/pages/see-all";
import { redirectMyBooks } from "./loaders/redirect-my-book";
import ProfilePage from "@/pages/profile";
import MyBooks from "@/pages/profile/components/my-books";
import CreateBook from "@/pages/profile/components/create-book";
import EditBook from "@/pages/profile/components/edit-book";
import Addresses from "@/pages/profile/components/addresses/addresses";

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
        path: "/see-all",
        Component: SeeAllBooks,
      },
    ],
  },

  {
    path: "profile",
    Component: ProfilePage,
    children: [
      { path: "", loader: redirectMyBooks },
      {
        path: "my-books",
        loader: authLoader,
        Component: MyBooks,
      },

      {
        path: "edit-book/:id",
        loader: authLoader,
        Component: EditBook,
      },
      {
        path: "create-book",
        loader: authLoader,
        Component: CreateBook,
      },

      {
        path: "my-addresses",
        loader: authLoader,
        Component: Addresses,
      },
    ],
  },
]);
