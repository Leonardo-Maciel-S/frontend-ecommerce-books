import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
