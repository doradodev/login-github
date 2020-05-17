import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { initStep } from "../../redux/actions/steps";
import { withRouter } from "react-router-dom";
import { FormAuthContainerWrapper } from "./style";
import ProgressBarContainer from "../ProgressBar/progressBarContainer";
import { updateStep } from "../../redux/actions/steps";

const FormAuthContainer = (props) => {
  useEffect(() => {
    const maxSteps = React.Children.count(props.children);
    props.initStep(maxSteps);
  }, []);

  const saveCurrentData = () => {
    localStorage.setItem(
      "externalFormData",
      JSON.stringify(this.props.externalFormData)
    );
  };
  const max = props.maxSteps;
  const current = props.currentStep;
  return (
    <FormAuthContainerWrapper
      animation={props.animation ? props.animation.type : ""}
    >
      <div className="container-login">
        <div className="progress-bar">
          <ProgressBarContainer current={current} max={max} />
        </div>
        <div className="login-page">
          {React.Children.map(props.children, (child, i) => {
            const { pathname } = props.location;
            const childPath = child.props.path;
            const { url } = props.match;
            const newPath = url + childPath;
            if (i + 1 === props.currentStep) {
              const { history } = props;
              if (newPath !== pathname) {
                history.push(newPath);
              }
              return child;
            }
          })}
        </div>
      </div>
    </FormAuthContainerWrapper>
  );
};

const mapStateToProps = (state) => ({
  currentStep: state.steps.currentStep,
  maxSteps: state.steps.maxSteps,
  externalFormData: state.externalFormData,
  animation: state.animation.animation,
});
const mapDispatchToProps = (dispatch) => ({
  updateStep: (step) => dispatch(updateStep(step)),
  initStep: (step) => dispatch(initStep(step)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormAuthContainer)
);
