import { useState, createContext, useContext } from "react";

const RecommendedContext = createContext();

export const RecommendedProvider = ({ children }) => {
  const [isRecommendedHidden, setIsRecommendedHidden] = useState(true);

  return (
    <RecommendedContext.Provider
      value={{ isRecommendedHidden, setIsRecommendedHidden }}
    >
      {children}
    </RecommendedContext.Provider>
  );
};

export const useRecommended = () => useContext(RecommendedContext);
