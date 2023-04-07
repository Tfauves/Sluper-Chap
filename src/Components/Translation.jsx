import React from "react";

const Translation = ({ doStuff, setInput, result }) => {
  return (
    <div style={{ marginTop: "6em" }}>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div style={{ marginTop: "1em" }}>
        <button className="action-btn" onClick={doStuff}>
          BOT IT!
        </button>
      </div>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
};
export default Translation;
