import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";
import AboutData from "./pages/about.data";
import TodoPage from "./pages/todopage";
import BGComponent from "./pages/bgcomponent";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: BGComponent,
  },
  {
    path: "/todopage",
    component: TodoPage,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/about")),
    data: AboutData,
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
