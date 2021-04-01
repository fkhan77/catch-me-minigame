import "./SidebarButton.css";

function SidebarButton({ setShowSidebar, showSidebar }) {
  return (
    <div className='show-sidebar--container'>
      <button
        className='show-sidebar--button'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? "Hide" : "Show"} Sidebar
      </button>
    </div>
  );
}

export default SidebarButton;
