import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CatchMe from "./components/CatchMe/CatchMe";
import SidebarButton from "./components/SidebarButton/SidebarButton";
import GameDashboard from "./components/GameDashboard/GameDashboard";
import CatchMeContainer from "./components/CatchMeContainer/CatchMeContainer";
import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [isInProgress, setIsInProgress] = useState(false);
  const [catchMes, setCatchMes] = useState(1);

  return (
    <div className='App'>
      <Sidebar isOpen={showSidebar} />
      <div className='main-content'>
        <SidebarButton
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <GameDashboard
          score={score}
          setScore={setScore}
          timer={timer}
          setTimer={setTimer}
          isInProgress={isInProgress}
          setIsInProgress={setIsInProgress}
          catchMes={catchMes}
          setCatchMes={setCatchMes}
        />
        <CatchMeContainer>
          {catchMes > 0 &&
            Array(catchMes).fill(
              <CatchMe
                isInProgress={isInProgress}
                setScore={setScore}
                score={score}
              />
            )}
        </CatchMeContainer>
      </div>
    </div>
  );
}

export default App;
