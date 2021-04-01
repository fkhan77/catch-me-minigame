import "./GameDashboard.css";

function GameDashboard({
  score,
  setScore,
  isInProgress,
  setIsInProgress,
  timer,
  setTimer,
  catchMes,
  setCatchMes,
}) {
  return (
    <div>
      <div>Score: {score}</div>
      <div>High Score: 0 </div>
      <button
        onClick={() => {
          setScore(0);
          setIsInProgress(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setScore(0);
          setTimer(20);
          setIsInProgress(false);
          setCatchMes(0);
          setTimeout(() => setCatchMes(1), 100);
        }}
      >
        Reset
      </button>
      <div
        style={{
          color: isInProgress ? "White" : "Orange",
        }}
      >
        {isInProgress ? "GO!" : "Paused"}
      </div>
      <div>Timer: {timer}</div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        <button
          className='option-button option-button-1'
          onClick={() => setCatchMes(catchMes + 1)}
        >
          more
        </button>
        <button
          className='option-button option-button-2'
          onClick={() => setCatchMes(catchMes + 3)}
        >
          More
        </button>
        <button
          className='option-button option-button-3'
          onClick={() => setCatchMes(catchMes + 5)}
        >
          MORE!
        </button>
      </div>
    </div>
  );
}

export default GameDashboard;
