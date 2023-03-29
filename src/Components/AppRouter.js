import React from "react";
import { Route, Routes } from "react-router-dom";
import OptionSelection from "./OptionSelection";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OptionSelection />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
