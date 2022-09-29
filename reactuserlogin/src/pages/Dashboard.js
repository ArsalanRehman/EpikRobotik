import { useEffect, useHistory } from "react";
import {
  StyledSubTitle,

  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
} from "../components/Styles";
// import jwt from 'jsonwebtoken'
import Logout from "./Logout";
import { useNavigate } from 'react-router-dom'



const Dashboard = (props) => {
  const navigate = useNavigate()

  // const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('TOKEN DATA STATUS', token);
      localStorage.removeItem('token')
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >

      </div>
      <StyledFormArea bg={colors.theme}>
        <StyledSubTitle size={27}>Welcome {props.username}</StyledSubTitle>
        <ButtonGroup>
          <StyledButton onClick={Logout} to="/login" >LOGOUT</StyledButton>
          <StyledButton to="/passwordreset">PASSWORD RESET</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};
export default Dashboard;
