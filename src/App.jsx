import React from "react";
import "./App.css";

import NavRoutes from "./routes/NavRoutes";
import { Route, Router, Routes } from "react-router-dom";
import Demo5 from "./pages/Demo-5";

function App() {
  console.log(`first`);
  return (
    <div dir="rtl">
      <NavRoutes />
    </div>
  );
}

export default App;
