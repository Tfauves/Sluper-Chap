import React, { useEffect, useState } from "react";
import axios from "axios";

import ChapGetsImgForm from "./ChapGetsImgForm";

const ChapGetsImg = (props) => {
  const { REACT_APP_API_KEY, REACT_APP_API_IMG } = process.env;
  const [info, setInfo] = useState([]);
  const [query, setQuery] = useState({
    prompt: "",
    n: 1,
    size: "1024x1024",
  });

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async () => {
    const data = query;
    console.log(data);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        data,
        {
          header: {
            Authorization: `Bearer ${"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"}`,
          },
        }
      );
      setInfo(response.data);
      setQuery({ prompt: "", n: "" });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const displayInfo = () => {
    return <div>{console.log(info)}</div>;
  };

  return (
    <div>
      <h1>I will get your damn pics</h1>
      <ChapGetsImgForm
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
      />
      {displayInfo()}
    </div>
  );
};
export default ChapGetsImg;
