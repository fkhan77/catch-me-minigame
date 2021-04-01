import "./Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen && "sidebar-open"}`}>
      <div className={`sidebar--content ${isOpen && "sidebar--content-open"}`}>
        <div>Ooh</div>
        <div>Look</div>
        <div>A</div>
        <div>Sidebar... Hi Muzzammil and Noor!</div>
      </div>
    </div>
  );
}

export default Sidebar;
