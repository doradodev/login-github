import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { ProgressBarWrapper } from "./style";
//"#00F2C3"
const progressBar = ({
  current,
  max,
  filledBackground,
  unfilledBackground,
}) => (
  <ProgressBarWrapper>
    <ProgressBar
      percent={(current * 100) / max}
      unfilledBackground={unfilledBackground}
      filledBackground={filledBackground}
      hasStepZero={false}
    />
  </ProgressBarWrapper>
);

export default progressBar;
