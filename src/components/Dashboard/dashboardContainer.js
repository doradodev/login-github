import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Dashboard from "./dashboard";

const DashboardContainer = (props) => {
  const [dataActivity, setDataActivity] = useState([]);
  useEffect(() => {
    if (typeof props.location.state !== "undefined") {
      setDataActivity(props.location.state.dataActivity);
    }
  });
  return <Dashboard activities={dataActivity} />;
};

export default withRouter(DashboardContainer);
