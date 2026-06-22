// src/routes/routesConfig.js

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Checkpage = lazy(() => import("../pages/Checkpage"));

const routesConfig = [
  {
    path: "/",
    element: Dashboard,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/check",
    element: Checkpage,
  },
  
];

export default routesConfig;