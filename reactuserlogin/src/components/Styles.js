import styled from "styled-components";
import background from "./../assets/bg2.png";
import { Link } from "react-router-dom";
export const colors = {
  primary: "#fff",
  theme: "#008080",
  light1: "#a9a9a9",
  light2: "#dcdcdc",
  dark1: "#2f4f4f",
  dark2: "#f0ffff",
  dark3: "#9CA3AF",
  red: "#DC2626",
  dark4:"#faf0e6",
};
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
   text-transform: uppercase;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-siz: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;
export const StyledTitle = styled.h2`
  font-siz: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
  
`;
export const StyledSubTitle = styled.p`
  font-siz: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;
export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-siz: cover;
  background-position: center;
  margin: auto;
`;
export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;
export const StyledTextInput = styled.input`
width:280px;
padding:15px;
padding-left:50px;
font-size:17px;
border-radius: 25px;
letter-spacing:1px;
color:${colors.dark1};
background-color:${colors.light2}
border:0;
display:block;
margin:5px auto 10px auto;
transition:ease-in-out 0.3s;
${(props) =>
  props.invalid && `background-color:${colors.red};color:${colors.primary};`}
&:focus{
  background-color:${colors.dark2}
  color:${colors.primary}
}
  `;
export const StyledLabel = styled.p`
  // text-align: left;
  font-size: 13px;
  font-weight: bold;
  color:${colors.dark3};
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
`;
export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  transition: ease-in-out 0.3s;
  outline: 0;
  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;
export const ErrorMsg = styled.div`
  font-size:11px;
  color:${colors.red}
  margin-top:-5px;
  margin-bottom:10px;
  text-align:left;
`;

export const ExtraText = styled.p`
  font-size:${(props) => props.size}px;
  rext-align:center;
  color:${colors.dark4};
  padding:2px;
  margin-top:10px;
`;
export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;
  ${(props) => props.right && "right:15px;"};
  ${(props) => !props.right && "left:15px;"};
`;
export const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.dark2};
`;
