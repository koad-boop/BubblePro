import {  useContext , useEffect} from "react";
import { InfoContext } from "../ContextApi/InfoProvider";

const Bubble = () => {
  const { Hit, score , setScore , setHit,bubbleValues,setBubbleValues , bubbleCount ,timer} = useContext(InfoContext);
  
useEffect(() => {
    const newValues = Array.from({ length: bubbleCount }, () => Math.floor(Math.random() * 10));
    setBubbleValues(newValues);
  }, [Hit]);
  

  const checkHit = (value) => {
    console.log("Clicked bubble value:", value);
    if (Hit === value){
       const newScore = score + 10;
       setScore(newScore)
       const newHit = Math.floor(Math.random() * 10);
      setHit(newHit);

    }
  };

   if (timer === 0) return null;

  return (
    <>
    <div className="pbtm">
      {bubbleValues.map((val, index) => (
        <div
          className="bubble"
          key={index}
          onClick={() => checkHit(val)}
        >
          {val}
        </div>
      ))}
      
    </div>
    
      </>
  );
};

export default Bubble;
