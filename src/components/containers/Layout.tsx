import React from "react";

const Layout: React.FunctionComponent<{
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
