import styled from "styled-components";
import { size } from "../../StylesConstants";

export const DashboardWrapper = styled.section`
  display: grid;
  .dashboard-container {
    height: 100vh;
    background-color: #f9f9f9;
  }
`;

export const DashboardActivityWrapper = styled.section`
  display: grid;
  .activity-list-title {
    margin-top: 10%;
  }
  .activity-content {
    display: grid;
    grid-template: 50px 60px / 30px 1fr 30px;
    grid-template-areas:
      "icon title user"
      "icon repo user";
    align-items: center;
    .activity-icon {
      grid-area: icon;
      display: grid;
      align-self: center;
    }
    .activity-title {
      grid-area: title;
      p {
        font-weight: 700;
        margin: 0;
      }
    }
    .activity-user {
      grid-area: user;
    }
    .activity-repo {
      grid-area: repo;
      display: grid;
      grid-template: 1fr 1fr / 1fr;
      p {
        margin: 0;
        color: lightgrey;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
  @media screen and (min-width: ${size.tablet}) {
    display: grid;
    .activity-list-title {
      margin-top: 10%;
    }
    .activity-content {
      display: grid;
      grid-template: 50px 30px / 50px 1fr 100px;
      grid-template-areas:
        "icon title user"
        "icon repo user";
      align-items: center;
      .activity-icon {
        grid-area: icon;
        display: grid;
        align-self: center;
      }
      .activity-title {
        grid-area: title;
        p {
          font-weight: 700;
          margin: 0;
        }
      }
      .activity-user {
        grid-area: user;
      }
      .activity-repo {
        grid-area: repo;
        display: grid;
        grid-template: 1fr / 30% 1fr;
        p {
          margin: 0;
          color: lightgrey;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;
