import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChapGetsImg from "./ChapGetsImg";

const ChapCalls = (props) => {
  const params = useParams();
  const { prompt, n } = params;
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.post(
        `https://api.openai.com/v1/images/generations`,
        {
          headers: {
            Authorization: `Bearer ${"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"}`,
          },
        }
      );
      setInfo(response.data);
      setLoading(false);
    };
    setLoading(true);
    getInfo();
  }, []);

  const displayForm = () => {
    return (
      <div>
        <ChapGetsImg query={info} prompt={prompt} n={n} />
      </div>
    );
  };

  return <div>{displayForm}</div>;
};

export default ChapCalls;
