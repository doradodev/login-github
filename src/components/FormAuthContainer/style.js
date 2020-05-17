import styled, { keyframes } from "styled-components";
import { size } from "../../StylesConstants";
import { slideInRight, slideInLeft } from "react-animations";

const slideRight = keyframes`${slideInRight}`;
const slideLeft = keyframes`${slideInLeft}`;

export const FormAuthContainerWrapper = styled.section`
  display: grid;
  background-color: #f9f9f9;
  height: 100vh;
  position: relative;
  .container-login {
    animation: 0.5s
      ${(props) => (props.animation === "next" ? slideRight : slideLeft)};
    display: grid;
    position: absolute;
    align-self: center;
    justify-self: center;
    width: 90%;
    height: 40%;
    background-color: #ffffff;
    border: 1px solid #d8dee2;
    border-radius: 6px;
    .progress-bar {
      background-color: #ffffff;
      height: 10px;
    }
  }
  @media screen and (min-width: ${size.desktop}) {
    display: grid;
    background-color: #f9f9f9;
    height: 100vh;
    position: relative;
    .container-login {
      display: grid;
      position: absolute;
      align-self: center;
      justify-self: center;
      width: 50%;
      height: 50%;
      background-color: #ffffff;
      border: 1px solid #d8dee2;
      border-radius: 6px;
      .progress-bar {
        background-color: #ffffff;
        height: 10px;
      }
    }
  }
`;
