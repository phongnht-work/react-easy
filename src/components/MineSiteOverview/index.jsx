import { useState } from "react";

import "./styles.scss";

function MineSiteInput() {
  const [names, setNames] = useState([""]);

  const showOres = () => {
    setNames([...names, ""])

  }
  return (
    <div className="mine-site-input">
      Mine Site Input
      {names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            id={`ore${index + 1}`}
          />
        </div>
      ))}
      <button id="addMoreButton" onClick={showOres}>Add More</button>
      <button id="doneButton">Done</button>
    </div>
  );
}

export default MineSiteInput;
