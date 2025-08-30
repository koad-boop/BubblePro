import './App.css';
import Bubble from './components/Bubble';
import video from './assets/vdo.mp4';
import InfoProvider from './ContextApi/InfoProvider';
import Board from './components/Board';

const App = () => {

  return (
    <InfoProvider>
    <div className="video-bg-container">
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="main"> {/* moved from outermost to inner wrapper */}
        <div className="pannel">
          <Board/>
          <Bubble />
        </div>
      </div>
    </div>
    </InfoProvider>
  );
};

export default App;
