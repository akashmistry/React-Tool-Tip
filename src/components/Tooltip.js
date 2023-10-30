import "../tooltip.css";

import React, { useState } from "react";
import Button from "./Button";

const Tooltip = ({ content, direction }) => {
  const [dir, setDir] = useState("my-tooltiptext t-top");
  const [cont, setCont] = useState("Hover Content");

  const hanldeTooltip = () => {
    setCont(content);

    if (direction === "top") {
      setDir("my-tooltiptext t-top");
    } else if (direction === "right") {
      setDir("my-tooltiptext t-right");
    } else if (direction === "left") {
      setDir("my-tooltiptext t-left");
    } else {
      setDir("my-tooltiptext t-bottom");
    }
  };

  return (
    // DIV FOR BINDING CLASS FOR TOOLTIP
    <div className="my-tooltip" onMouseEnter={hanldeTooltip}>
      {/* SPAN FOR TOOLTIP TEXT */}
      <span className={dir}>{cont}</span>
      <Button />
    </div>
  );
};

export default Tooltip;
