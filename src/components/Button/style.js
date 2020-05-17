import styled from "styled-components";
import { white, size, error, grey, black } from "../../StylesConstants";

const ButtonWrapper = styled.div`
  width: 100%;
  button {
    border: none;
    width: 100%;
    max-height: 60px;
    border-radius: 100px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding: 18px 30px;
    text-align: center;
    text-decoration: none !important;

    &.primary {
      border: none;
      color: ${white};
      background-color: #27ac46;

      span {
        color: ${white};
      }

      &:hover {
        background-color: #29af48;
      }
    }

    &.secondary {
      border: 2px solid ${grey};
      box-sizing: border-box;
      color: ${black};
      background-color: ${white};
      &:hover {
        background-color: ${grey};
      }
    }

    &.error {
      border: none;
      box-sizing: border-box;
      color: ${white};
      background-color: ${error};
    }

    &.disabled {
      border: none;
      box-sizing: border-box;
      color: ${white};
      background-color: ${grey};
      cursor: not-allowed;
    }

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: ${size.tablet}) {
    button {
      font-size: 18px;
      line-height: 21px;
    }
  }

  @media screen and (min-width: ${size.desktop}) {
    button {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

export default ButtonWrapper;
