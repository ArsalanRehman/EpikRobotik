import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "./../components/Styles";
import User from "./../assets/user.png";
import { formik, Form, Formik } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";
import { FiMail, FiLock } from "react-icons/fi";

const ForgottenPassword = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={User} />
        <StyledTitle color={colors.theme} size={30}>
          Password Reset{" "}
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
          
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
        
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <form>
              <TextInput
                name="email"
                type="text"
                label="Enter Your Email Address"
                
                icon={<FiMail />}
              />
             
              <ButtonGroup>
                <StyledFormButton type="submit">RESET</StyledFormButton>
              </ButtonGroup>
            </form>
          )}
        </Formik>
        <ExtraText>
        Return to Login Page{" "}
          <TextLink to="/login">LOGIN</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>Epik Robotik &copy;2020</CopyrightText>
    </div>
  );
};
export default ForgottenPassword;
