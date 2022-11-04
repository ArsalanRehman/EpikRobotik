import "../Css/SystemSetting.css";
import React, { useState } from "react";

const FormInput = (props) => {
    const[focused,setFocused] = useState(false)
    const {errorMessage,label,onChange,id,...inputProps} = props;
    const handleFocus=(e)=>{
        setFocused(true);
    }
  return (
    <div className='forminput'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={inputProps=="confirmPasword" && setFocused(true)} focused={focused.toString()}/>
    <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
