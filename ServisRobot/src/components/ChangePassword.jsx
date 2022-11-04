import "../Css/SystemSetting.css";
import React, { useState } from "react";
import CreatePositionChangePassword from "./CreatePositionChangePassword";
import { PositionContext } from "./PositionContext";
const ChangePassword = () => {
  const [isOverlayShown, setisoverlayShown] = useState(false);
const [Password, setPassword] = useState(0);
const [NewPassword, setNewPassword] = useState(0);
const [ConfirmPassword, setConfirmPassword] = useState(0);
const onEdit = (record) => {
  setisoverlayShown(true);
};
const data = {
  Password,
  setPassword,
  NewPassword,
  setNewPassword,
  ConfirmPassword,
  setConfirmPassword,
  setisoverlayShown,
};
 
 return (
<PositionContext.Provider value={data}>
  <div className="App">
    <header className="App-header">
      <button className="butonchangepassword" onClick={onEdit}>Change Password</button>
      {isOverlayShown && <CreatePositionChangePassword></CreatePositionChangePassword>}
    </header>
  </div>
</PositionContext.Provider>
  );
};
export default ChangePassword;
