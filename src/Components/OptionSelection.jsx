import React from "react";
import { arrayItems } from "./../AIOptions/index";

const OptionSelection = () => {
  console.log(arrayItems);
  return (
    <>
      <h1 style={{ marginBottom: "1em" }} className="heading">
        Sluper Chap AI
      </h1>
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div className="grid-child">
              <h3 style={{ marginBottom: "-1em" }} key={item.id}>
                {item.name}
              </h3>
              <p key={item.id}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default OptionSelection;
