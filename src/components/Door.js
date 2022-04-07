import React, { useState } from "react";
import DoorPopup from "./DoorPopup";
import "./door.css";

export const Door = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoorPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article>
      <img
        onClick={toggleDoorPopup}
        role="button"
        className="door"
        src="door.png"
        alt=""
      />
      {isOpen && (
        <DoorPopup
          handleClose={toggleDoorPopup}
          content={
            <div>
              <h3>Door is locked!</h3>
            </div>
          }
        />
      )}
    </article>
    // <button onClick={() => window.open("http://www.google.com")}>
    //   <img className="door" src="door.png" alt="" />
    // </button>
  );
};