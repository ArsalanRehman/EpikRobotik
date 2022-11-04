import RobotIP from "../components/RobotIp";
import SystemLanguage from "../components/SystemLanguage";
import ChangePassword from "../components/ChangePassword";
import "../Css/SystemSetting.css";
import React from "react";

const SystemSetting = (props) => {
  return (
    <div className="container4">
      <div className="systemlanguage">
        <SystemLanguage />
      </div>
      <div className="robotip">
        <RobotIP />
      </div>

      <div className="changepassword2">
        <ChangePassword />
      </div>
    </div>
  );
};

export default SystemSetting;
