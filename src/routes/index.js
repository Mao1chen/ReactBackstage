import { Navigate } from "react-router-dom";
import { copyChildrens } from "../utils";
import Login from "../pages/Login";
import Layout from "../layout";
import NotFoundPage from "../pages/NotFoundPage";
import routeModules from "./modules";

const childrens = [...routeModules];

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      ...childrens,
      {
        path: "",
        element: <Navigate to="dashboard" />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export const layoutChildren = copyChildrens([...childrens]);

export default routes;
