import React from "react";
import { Header, Footer } from "../ui";

const MainLayout = ({ children, header }) => {
  return (
    <React.Fragment>
      <Header header={header} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
