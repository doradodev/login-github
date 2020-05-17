import React from "react";
import ButtonWrapper from "./style";

const Button = (props) => {
  return (
    <ButtonWrapper id={`${props.id}-container`} className={props.className}>
      <button
        onClick={props.onClick}
        type={props.type}
        id={props.id}
        className={props.typeClass}
        disabled={props.disabled}
      >
        <span className="label d-none d-xl-inline-block">{props.label}</span>
        <span className="label-tablet d-none d-md-inline-block d-xl-none">
          {props.labelTablet ? props.labelTablet : props.label}
        </span>
        <span className="label-mobile d-md-none">
          {props.labelMobile ? props.labelMobile : props.label}
        </span>
        <i className="d-inline-block"> {props.children}</i>
      </button>
    </ButtonWrapper>
  );
};

export default Button;
