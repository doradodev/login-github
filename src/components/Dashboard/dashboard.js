import React from "react";
import { DashboardWrapper } from "./style";
import DashboarActivity from "./dashboarActivity";

const Dashboard = (props) => (
  <DashboardWrapper>
    <div className="dashboard-container">
      <div className="container">
        <DashboarActivity activities={props.activities} />
      </div>
    </div>
  </DashboardWrapper>
);

export default Dashboard;
