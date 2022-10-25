import React, { Component } from "react";
import * as ROSLIB from "roslib";
import Config from "./Config";
import Main from "./Main";
import ParamScreen from "./ParamScreen";
import Stop from "./Stop";
class Home extends Component {
  state = { ros: null };
  constructor() {
    super();
    this.init_connection();
  }
  connect() {
    try {
      this.state.ros.connect(
        "ws://" +
          Config.ROSBRIDGE_SERVER_IP +
          ":" +
          Config.ROSBRIDGE_SERVER_PORT +
          ""
      );
    } catch (error) {
      console.log(error);
    }
  }

  init_connection() {
    // create object from ros class called ros , to use it after.
    this.state.ros = new ROSLIB.Ros();
    // if ros connected , write connected
    this.state.ros.on("connection", () => {
      this.setState({ connected: true });
    });

    // if ros unconnected , write close
    this.state.ros.on("close", () => {
      this.setState({ connected: false });
      // re connect every secound
      setTimeout(() => {
        this.connect();
      }, Config.RECONNECTION_TIMEOUT * 1000);
    });
    this.connect();
  }
  render() {
    return (
      <div>
        <Main ros={this.state.ros} />
        <span id="paramscreen">
          {" "}
          <ParamScreen ros={this.state.ros} />
        </span>
        <span>
          <Stop></Stop>{" "}
        </span>
      </div>
    );
  }
}

export default Home;
