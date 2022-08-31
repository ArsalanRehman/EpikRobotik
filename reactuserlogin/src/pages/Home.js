import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./../components/Styles";
import User from "./../assets/user.png";
const Home = () => {
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
        <Avatar image={User} />
      </div>
      <StyledTitle size={65}>LOGIN</StyledTitle>
      <StyledSubTitle size={27}>Welcome to Login Page</StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/login">LOGIN</StyledButton>
        
      </ButtonGroup>
    </div>
  );
};
export default Home;
