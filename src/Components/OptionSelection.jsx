import React from "react";
import OptionItem from "./OptionItem";
import { arrayItems } from "./../AIOptions/index";

const OptionSelection = () => {
  console.log(arrayItems);
  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        backgroundColor: "#303030",
        textAlign: "center",
        width: "100%",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f1f1f1",
          marginTop: "4em",
        }}
      >
        Sluper Chap AI
      </h1>
      {arrayItems.map((item) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
    </div>
  );
};
export default OptionSelection;
