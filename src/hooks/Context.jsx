import React, { useContext } from "react";

// context creation
// provider
// useContext hook

const AppContext = React.createContext();

// create provider function

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Some Value to test"}>
      {children}
    </AppContext.Provider>
  );
};

// create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
