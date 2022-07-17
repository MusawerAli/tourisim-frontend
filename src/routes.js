import { lazy } from "react";


const Login = lazy(() => import("Containers/Login"));
const Transfers = lazy(() => import("Containers/Admin/Transfers"));

const routes = [
  [

  ],
  [
    {
      path: "/index",
      name: "Transfers",
      icon: "nc-icon nc-bank",
      component: Transfers,
      layout: "/admin",
    },
    {
      path: "/login",
      name: "Login",
      mini: "L",
      component: Login,
      layout: "/auth",
      isShow: 1,
    },
  ],
];

export default routes;
