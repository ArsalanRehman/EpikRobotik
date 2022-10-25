import ParamButton from "./ParamButton";
import * as ROSLIB from "roslib";
import React, { useEffect, useState } from "react";

function ParamScreen(props) {
  const ros = props.ros;
  const params = props.param;
  const [NumberOfPositionMarkers, setNumberOfPositionMarkers] = useState(0);
  let content = [];
  for (let i = 0; i < NumberOfPositionMarkers; i++) {
    content.push(
      <ParamButton ros={ros} paramName={"PositionMarker" + String(i + 1)}>
        {" "}
      </ParamButton>
    );
  }
  useEffect(() => {
    var NumberOfPositionMarkersParam = new ROSLIB.Param({
      ros: ros,
      name: "NumberOfPositionMarkers",
    });
    NumberOfPositionMarkersParam.get((value) => {
      console.log(value);
      setNumberOfPositionMarkers(value);
    });
  }, []);

  return <div>{content}</div>;
}

export default ParamScreen;
