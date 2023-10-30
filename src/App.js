import React, { useState } from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";

const App = () => {
  const [direction, setDirection] = useState("top");
  const [content, setContent] = useState("");

  // TEXT INPUT HANDLER
  const handleContentInput = (e) => {
    setContent(e.target.value);
  };

  // SET THE DIRECTION OF THE TOOLTIP
  const handleDirectionInput = (e) => {
    setDirection(e.target.value);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          height: "500px",
          backgroundColor: "beige",
          borderRadius: "10px",
        }}
      >
        {/* HEADING */}
        <h1 style={{ color: "gray", fontWeight: "bolder" }}>Tooltip</h1>
        <div className="form-div">
          <label style={{ color: "gray" }}>Enter Content of Tooltip</label>
          {/* CHANGE THE TEXT OF THE TOOLTIP TEXT */}
          <input
            style={{ borderRadius: "10px" }}
            type="text"
            className="form-control"
            onChange={handleContentInput}
            value={content}
          />
        </div>
        <div className="form-div">
          <label style={{ color: "gray" }}>Enter Direction of Tooltip</label>
          {/* TO SELECT THE DIRECTION OF THE TOOLTIP */}
          <select
            className="form-select"
            onChange={handleDirectionInput}
            style={{ borderRadius: "10px", padding: "5px 10px" }}
            value={direction}
          >
            <option value="top">Top</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>

        <Tooltip content={content} direction={direction} />
      </div>
    </div>
  );
};

export default App;
