import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <AppContext.Provider value={{ show, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, useAppContext };
