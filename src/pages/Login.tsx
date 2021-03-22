import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useGlobalStore } from "@/hooks/useStore";
import { Button } from "antd";

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  // @ts-ignore
  const { from }: { from: any } = location.state || { from: { pathname: "/" } };
  const store = useGlobalStore();

  const login = async () => {
    try {
      store.login();
      history.replace(from);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button onClick={login}>click me to login</Button>
    </div>
  );
};

export default Login;
