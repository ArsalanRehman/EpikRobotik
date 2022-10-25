import React, { useState } from "react";

const Stop = (props) => {
  const [Hint, setHint] = useState("Stop");

  const data = {
    stop_hint,
  };
  function stop_hint() {
    setHint("Resume");
  }

  return (
    <div>
      {" "}
      <button id="stop" onClick={stop_hint}>
        {" "}
      </button>{" "}
      <label id="hint">{Hint}</label>
    </div>
  );
};
export default Stop;
