import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapGetsImg from "./ChapGetsImg";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChapGetsImg />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
