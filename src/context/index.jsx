import { createContext, useState, useContext } from 'react';

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const initialValues = {
    isOpen,
    handleOpen,
    handleClose
  };

  return <AppContext.Provider value={initialValues}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
