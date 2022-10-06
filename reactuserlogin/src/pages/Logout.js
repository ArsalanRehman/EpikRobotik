import { useNavigate} from "react";
const Logout = ()=>{
    console.log("logout Running");
    const navigate = useNavigate()
    localStorage.removeItem('token');
    navigate('/login')
}

export default Logout;