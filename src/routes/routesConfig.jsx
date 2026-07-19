// src/routes/routesConfig.js

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RoomDetailView = lazy(() => import("../pages/RoomDetailView"));
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
    path: "/room-detail-view",
    element: RoomDetailView,
  },
  {
    path: "/check",
    element: Checkpage,
  },
  
];

export default routesConfig;