import React from "react";
import { Route, Routes } from "react-router-dom";
import SluperChap from "./SluperChap";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SluperChap />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
