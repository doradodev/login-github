import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStep } from "../../redux/actions/steps";

const StepButton = (props) => {
  const handleUpdateState = () => {
    //debugger;
    const current = props.currentStep;
    const max = props.maxSteps;
    const { go, disabled } = props;
    let newStep = props.currentStep;
    handleContinueStep(go, current, max, newStep, disabled);
  };

  const handleContinueStep = (go, current, max, newStep, disabled) => {
    if (disabled) {
      return;
    }
    // set the new step, limit min (1) and max
    if (go === "next" && current !== max) {
      newStep = current + 1;
    } else if (go === "back" && current !== 1) {
      newStep = current - 1;
    }
    // update the current step for the stepper
    props.updateStep(newStep);
  };

  return <div onClick={handleUpdateState}>{props.children}</div>;
};
StepButton.propTypes = {
  go: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
StepButton.defaultProps = {
  foo: 42,
};

const mapStateToProps = (state) => ({
  currentStep: state.steps.currentStep,
  maxSteps: state.steps.maxSteps,
});
const mapDispatchToProps = (dispatch) => ({
  updateStep: (step) => dispatch(updateStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepButton);
