import styled, { keyframes } from "styled-components";
import { scarpaGray700, size } from "../../StylesConstants";

export const ComponentFormWrapper = styled.section`
  display: grid;
  .content {
    height: 100%;

    display: grid;
    grid-template: auto 1fr/ 1fr;
    grid-row-gap: 10%;
    padding: 0 3%;
  }
  .title {
    color: ${scarpaGray700};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }

  .buttons {
    grid-area: buttons;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-column-gap: 10px;
    padding: 5%;
  }

  @media screen and (min-width: ${size.tablet}) {
    display: grid;
    .content {
      width: 100%;
      justify-self: center;
    }
    @media screen and (min-width: ${size.desktop}) {
      .content {
        width: ${(props) => props.mapaSize}%;
        justify-self: center;
      }
    }
  }
`;
