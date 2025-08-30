import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const InfoContext = createContext();

const InfoProvider = ({ children }) => {
   const [bubbleCount] = useState(208);
  const [bubbleValues, setBubbleValues] = useState(
    () => Array.from({ length: bubbleCount }, () => Math.floor(Math.random() * 10))
  );
  const [Hit, setHit] = useState(() => Math.floor(Math.random() * 10));
  const [score, setScore] = useState(0);
  const [timer , setTimer ] = useState(60)

  return (
    <InfoContext.Provider value={{ Hit, score, timer , setScore, setHit ,  setTimer,bubbleValues,setBubbleValues , bubbleCount}}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
