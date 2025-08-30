import {  useContext, useEffect  } from "react";
import { InfoContext } from "../ContextApi/InfoProvider";


const Board = () => {
     const { Hit, score , timer , setTimer , setHit , setScore} = useContext(InfoContext);
     useEffect(() => {
  const time = setInterval(() => {
    if (timer > 0) {
      setTimer((prev) => prev - 1);
    }
  }, 1000);

  return () => clearInterval(time);

}, [timer]); 

 const restartGame = () => {
    setTimer(60);
    setScore(0);
    setHit(Math.floor(Math.random() * 10));
  };

  return (
    <div className="ptop">
        <div className="elem">
            <h2>Hit :</h2>
            <div className="box">{Hit}</div>
        </div>
        <div className="elem">
            <h2>Timer :</h2>
            <div className="box">{timer}</div>
        </div>
        <div className="elem">
            <h2>Score :</h2>
            <div className="box">{score}</div>
        </div>
         {timer === 0 && (
        <div className="game-over">
          <h2 style={{ color: "red" }}>Game Over</h2>
          <button className="restart-btn" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  )
}

export default Board