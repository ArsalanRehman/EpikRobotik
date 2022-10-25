import * as ROSLIB from "roslib";
import React, { useEffect, useState, useRef } from "react";
import "../css/Button.css";

const ParamButton = (props) => {
  const ros = props.ros;
  var paramName = props.paramName;

  console.log(paramName);
  const [name, setName] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState(0);
  const [Hint, setHint] = useState("");

  const input = useRef(null);
  useEffect(() => {
    var paramDesc = new ROSLIB.Param({
      ros: ros,
      name: paramName,
    });
    paramDesc.get((value) => {
      console.log(value);
      setName(value.name);
      setRotation(value.rotation);
      setPosition(value.position);
    });
  }, []);

  function sendGoal() {
    var topic = new ROSLIB.Topic({
      ros: ros,
      name: "/PositionMarkerGoal",
      messageType: "std_msgs/String",
    });

    var msg = new ROSLIB.Message({
      data: name,
    });
    topic.publish(msg);
  }

  return (
    <button class="glow-on-hover" onClick={sendGoal}>
      {name}
    </button>
  );
};

export default ParamButton;
