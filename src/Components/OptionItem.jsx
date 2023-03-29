import React from "react";
import { REACT_APP_API_KEY } from "./../config";
import { arrayItems } from "../AIOptions";
import OptionSelection from "./OptionSelection";

const OptionItem = () => {
  console.log(`option item ${arrayItems}`);

  return (
    <div>
      <OptionSelection arrayItems={arrayItems} />
    </div>
  );
};
export default OptionItem;
