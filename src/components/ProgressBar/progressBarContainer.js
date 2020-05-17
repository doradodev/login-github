import React from "react";
import ProgressBar from "./progressBar";

const ProgressBarContainer = ({ max, current }) => {
  return (
    <ProgressBar
      current={current}
      max={max}
      filledBackground="#000000"
      unfilledBackground="#E6E5E7"
    />
  );
};

export default ProgressBarContainer;
