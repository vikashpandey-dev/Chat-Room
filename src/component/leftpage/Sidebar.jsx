import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
              <div className="profiles">
              <button className="close-btn" onClick={onClose}>
          Close
        </button>
          <h1>Profile</h1>
        </div>
      <div className="sidebar-content">



        
      </div>
    </div>
  );
};

export default Sidebar;
