import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {
  // CONSTRUCTOR TO CREATE THE STATE OF THE CLASS
  constructor() {
    super();
    this.state = {
      direction: "top",
      content: "Tooltip Content",
    };
  }

  // TEXT INPUT HANDLER
  handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      this.setState({
        content: e.target.value,
      });
    } else {
      this.setState({
        content: "Tooltip Content",
      });
    }
  };

  // SET THE DIRECTION OF THE TOOLTIP
  handleDirectionInput = (e) => {
    console.log(e.target.value);
    this.setState({
      direction: e.target.value,
    });
  };
  render() {
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
              onKeyUp={this.handleContentInput}
            />
          </div>
          <div className="form-div">
            <label style={{ color: "gray" }}>Enter Direction of Tooltip</label>
            {/* TO SELECT THE DIRECTION OF THE TOOLTIP */}
            <select
              className="form-select"
              onChange={this.handleDirectionInput}
              style={{ borderRadius: "10px", padding: "5px 10px" }}
            >
              <option value="top">Top</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>

          <Tooltip
            content={this.state.content}
            direction={this.state.direction}
          >
            <Button />
          </Tooltip>
        </div>
      </div>
    );
  }
}
