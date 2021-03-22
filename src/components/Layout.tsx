import React from "react";
import { Header } from "@/components/Header";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
