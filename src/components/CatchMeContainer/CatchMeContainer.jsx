import "./CatchMeContainer.css";

function CatchMeContainer({ children }) {
  return (
    <div>
      <div className='catchme-container'>{children}</div>
    </div>
  );
}

export default CatchMeContainer;
