import * as ROSLIB from "roslib";
import RobotAnimated from "./robot-animated";
import React, { useState, useEffect } from "react";
import { GiBattery100 as B100 } from "react-icons/gi";
import { GiBattery75 as B75 } from "react-icons/gi";
import { GiBattery50 as B50 } from "react-icons/gi";
import { GiBattery25 as B25 } from "react-icons/gi";
import { GiBattery0 as B0 } from "react-icons/gi";
import { GiBatteryPack as Bch } from "react-icons/gi";
import { Navbar, Nav } from "react-bootstrap";
import "../css/Main.css";
const Robot = (props) => {
  console.log(props);

  const ros = props.ros;
  const [battery_percentege, setbattery_percentege] = useState(0.0);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    var robot = new ROSLIB.Topic({
      ros: ros,
      name: "/robot_state",
      messageType: "robot/RobotState",
    });
    robot.subscribe((message) => {
      if (message.battery_percentege === 100) {
        setIcon(B100);
      } else if (message.battery_percentege > 80) {
        setIcon(Bch);
      } else if (message.battery_percentege > 75) {
        setIcon(B75);
      } else if (message.battery_percentege > 50) {
        setIcon(B50);
      } else if (message.battery_percentege > 25) {
        setIcon(B25);
      } else {
        setIcon(B0);
      }
      setbattery_percentege(message.battery_percentege.toFixed(0) + "%" + "  "); // percentege
    });
  }, [ros]);

  return (
    <Navbar
      id="navbar"
      bg="dark"
      expand="lg"
      collapseOnSelect
      variant="dark"
      style={{ height: "60px" }}
    >
      <Navbar.Brand href="/" id="epik">
        <RobotAnimated />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ms-auto" id="batteryicon">
          {" "}
          {battery_percentege}
        </Nav>
        <Nav id="battery"> {icon}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Robot;
