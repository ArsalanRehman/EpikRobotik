import React, { Component } from "react";
import Header from "./Header";
import * as ROSLIB from "roslib";
import Config from "./Config";
import { Row, Col, Container } from "react-bootstrap";

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
      <Row>
        <Col>
          <Header ros={this.state.ros} />
        </Col>
      </Row>
    );
  }
}

export default Home;
