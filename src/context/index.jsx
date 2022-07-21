import { createContext, useState, useContext } from 'react';

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleContact = () => setIsOpenContact(!isOpenContact);

  const initialValues = {
    isOpen,
    handleOpen,
    isOpenContact,
    handleContact,
  };

  return <AppContext.Provider value={initialValues}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
