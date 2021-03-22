import { useHistory } from "react-router";
import React from "react";
import { useGlobalStore } from "@/hooks/useStore";
import { Button } from "antd";

export const ButtonLogin = () => {
  const history = useHistory();
  const store = useGlobalStore();
  const loggedIn = store.loginedIn;
  return loggedIn ? (
    <Button
      onClick={() => {
        store.logout();
        history.push("/");
      }}
    >
      logout
    </Button>
  ) : (
    <p>you are not login</p>
  );
};
