import { useHistory } from "react-router";
import React from "react";
import { useGlobalStore } from "@/hooks/useStore";

export const Button = () => {
  const history = useHistory();
  const store = useGlobalStore();
  const loggedIn = store.loginedIn;
  return loggedIn ? (
    <button
      onClick={() => {
        history.push("/");
      }}
    >
      logout
    </button>
  ) : (
    <p>you are not login</p>
  );
};
