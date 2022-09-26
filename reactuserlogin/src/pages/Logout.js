import {React, useNavigate} from "react";
const Logout = ()=>{
    const navigate = useNavigate()
    localStorage.removeItem('token');
    navigate('/login')
}

export default Logout;