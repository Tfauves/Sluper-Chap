import { OpenAIApi } from "openai";
import OptionSelection from "./OptionSelection";
import Translation from "./Translation";
import { arrayItems } from "../AIOptions";
import { useState } from "react";
import { REACT_APP_API_KEY } from "../config";

const SluperChap = () => {
  const openai = new OpenAIApi(REACT_APP_API_KEY);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
};

export default SluperChap;
