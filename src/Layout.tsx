import React, { ReactNode } from "react";
import Copyright from "../components/Copyright";
import MiniDrawer from "../components/AppBar";

const Layout: React.FC<{ children: ReactNode }> = props => {
  return (
    <React.Fragment>
      <MiniDrawer>
        {props.children}
        <Copyright />
      </MiniDrawer>
    </React.Fragment>
  );
};

export default Layout;
