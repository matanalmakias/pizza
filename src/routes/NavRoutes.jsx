import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 } from "uuid";
import { routes } from "../utils/content/routes";

const NavRoutes = () => {
  return (
    <Suspense fallback={<div className="bg-light text-black">Loading...</div>}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route._id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
