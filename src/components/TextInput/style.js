import styled from "styled-components";
import {
  error,
  size,
  scarpaGray100,
  scarpaGray600,
  disabledBackground,
  scarpaGray400,
  scarpaGray300,
} from "../../StylesConstants";

export const InputWrapper = styled.div`
  margin: 0;

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #d8dee2 inset !important;
  }

  input:-webkit-autofill:disabled {
    -webkit-text-fill-color: ${scarpaGray100} !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${scarpaGray600} !important;
  }

  .form-control:focus-within {
    background: #e6fef9;
    border: 2px solid #d8dee2;
    box-sizing: border-box;
    border-radius: 8px;
    input {
      background: #e6fef9;
    }
  }

  .form-control {
    border: 1px solid ${disabledBackground};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 6px 16px;
    height: 56px;
    color: ${scarpaGray600};
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;

    input {
      border: none;
      outline: none;
      height: 28px;
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      color: ${scarpaGray600};
      ::placeholder {
        color: ${scarpaGray300};
      }
    }

    &.disabled {
      background: ${scarpaGray100};
      border: 1px solid ${disabledBackground};
      box-sizing: border-box;
      border-radius: 8px;
      color: ${scarpaGray400};

      input {
        background: ${scarpaGray100};
        color: ${scarpaGray400};
      }
    }

    &.no-label {
      input {
        height: 44px;
      }
    }
  }

  .form-control.is-invalid,
  .was-validated .form-control:invalid {
    background: #ffeeee;
    border: 1px solid #e51817;
    box-sizing: border-box;
    border-radius: 8px;
    input {
      background: #ffeeee;
    }
  }

  .invalid-feedback {
    color: ${error};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
  }

  .input-label {
    font-size: 16px;
    line-height: 19px;
    color: ${scarpaGray600};
  }

  @media screen and (min-width: ${size.tablet}) {
  }
`;
