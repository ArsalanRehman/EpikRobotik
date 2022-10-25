import React, { useState, useEffect } from "react";
import * as ROSLIB from "roslib";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";
import { BsJoystick } from "react-icons/bs";
import { TbHandStop } from "react-icons/tb";
import { GiBattery100 as B100 } from "react-icons/gi";
import { GiBattery75 as B75 } from "react-icons/gi";
import { GiBattery50 as B50 } from "react-icons/gi";
import { GiBattery25 as B25 } from "react-icons/gi";
import { GiBattery0 as B0 } from "react-icons/gi";
import { GiBatteryPack as Bch } from "react-icons/gi";
import "./Header.css";
const Header = (props) => {
  const ros = props.ros;
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
    });
  }, [ros]);
  return (
    <Navbar
      bg="dark"
      expand="sm"
      collapseOnSelect
      variant="dark"
      style={{ height: "60px" }}
    >
      <Navbar.Brand href="/" id="epik">
        EPIK ROBOTIK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Button id="joystick">
            <BsJoystick
              id="joystickicon"
              size={30}
              color="#6CB4EE"
            ></BsJoystick>
          </Button>
          <Button id="stop1">
            <Button id="stop">
              <TbHandStop size={30}></TbHandStop>
            </Button>{" "}
          </Button>
          <button id="misson" disabled>
            Current Mission
          </button>
          <h5 style={{ fontSize: "30px " }} id="batterylevel">
            {icon}
          </h5>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
