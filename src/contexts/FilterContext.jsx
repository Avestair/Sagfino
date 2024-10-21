import { useState, createContext, useContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <FilterContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
