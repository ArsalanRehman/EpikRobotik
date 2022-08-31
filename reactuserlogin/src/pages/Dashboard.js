import {
  StyledSubTitle,
  
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
} from "../components/Styles";
import Login from './Login'

const Dashboard = (props) => {
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
          <StyledButton to="/login">LOGOUT</StyledButton>
          <StyledButton  to="/passwordreset">PASSWORD RESET</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};
export default Dashboard;
