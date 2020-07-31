import React from "react";
import Main from "./Main";

const Layout: React.FunctionComponent<{
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;
