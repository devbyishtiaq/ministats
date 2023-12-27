import React from "react";
import { Header, Footer } from "../ui";
import { useAppContext } from "../context/AppContext";
import TrialModal from "../components/home/common/modals/TrialModal";

const MainLayout = ({ children, header, setKey }) => {
  const { openModal, show } = useAppContext();

  return (
    <React.Fragment>
      {/* modal */}
      {show && <TrialModal />}
      <Header header={header} openModal={openModal} setKey={setKey} />
      <main className="max-w-[1440px] mx-auto">{children}</main>
      <Footer setKey={setKey} />
    </React.Fragment>
  );
};

export default MainLayout;
