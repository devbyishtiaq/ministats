import React from "react";
import { Header, Footer } from "../ui";
import { useAppContext } from "../context/AppContext";
import TrialModal from "../components/home/common/modals/TrialModal";

const MainLayout = ({ children, header }) => {
  const { openModal, show } = useAppContext();

  return (
    <React.Fragment>
      {/* modal */}
      {show && <TrialModal />}
      <Header header={header} openModal={openModal} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
