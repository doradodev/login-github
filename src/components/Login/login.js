import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  useEffect(() => {
    props.history.push("/login");
  }, []);
  return <div>loading...</div>;
};

export default withRouter(Login);
