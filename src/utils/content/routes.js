import { lazy } from "react";
import { v4 } from "uuid";

export const routes = [
  {
    _id: v4(),
    path: "/",
    component: lazy(() => import("../../pages/Demo-5")),
  },
  {
    _id: v4(),
    path: "/gallery",
    component: lazy(() => import("../../pages/Gallery")),
  },
  {
    _id: v4(),
    path: "/terms",
    component: lazy(() => import("../../pages/Terms")),
  },
  {
    _id: v4(),
    path: "/menu-2",
    component: lazy(() => import("../../pages/Menu-2")),
  },
  {
    _id: v4(),
    path: "/locations",
    component: lazy(() => import("../../pages/Locations")),
  },
  {
    _id: v4(),
    path: "/contacts",
    component: lazy(() => import("../../pages/Contacts")),
  },
  {
    _id: v4(),
    path: "/blog-listing",
    component: lazy(() => import("../../pages/BlogListing")),
  },
  {
    _id: v4(),
    path: "/cart",
    component: lazy(() => import("../../pages/Cart")),
  },
  {
    _id: v4(),
    path: "/team",
    component: lazy(() => import("../../pages/Team")),
  },
];
