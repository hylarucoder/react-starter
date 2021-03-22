import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";
import { ProvideStore, useGlobalStore } from "./hooks/useStore";

function Main() {
  // const store = useGlobalStore();
  useEffect(() => {
    // TODO: login
    // store.login();
  }, []);
  return <Router />;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: React.FC = (props: { children?: React.ReactNode }) => {
  return (
    <ProvideStore>
      <Main />
    </ProvideStore>
  );
};

export default App;
