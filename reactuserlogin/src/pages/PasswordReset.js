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
import { FiLock } from "react-icons/fi";

const PasswordReset = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={User} />
        <StyledTitle color={colors.theme} size={30}>
        Change Password{" "}
        </StyledTitle>
        <Formik
          initialValues={{
            CurrentPassword: "",
            NewPassword: "",
           ConfirmNewPassword: "",
          }}
          validationSchema={Yup.object({
            Currentpassword:
              Yup.string()
              .required("Required"),
             Newpassword:
              Yup.string()
              .min(8, "Password is too short")
              .max(30, "password is too long")
              .required("Required"),
              ConfirmNewpassword:
              Yup.string()
              .required("Required New Password")
              .oneOf([Yup.ref("newpassword")], "Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <form>
             <TextInput
                name="currentpassword"
                type="password"
                label="Password"
            
                icon={<FiLock />}
              />
               <TextInput
                name="newpassword"
                type="password"
                label="Repeat Password"
                
                icon={<FiLock />}
              />
               <TextInput
                name="confirmnewpassword"
                type="password"
                label="Repeat new Password"
                
                icon={<FiLock />}
              />

              <ButtonGroup>
                <StyledFormButton to="/dashboard" type="submit" >CHANGE PASSWORD</StyledFormButton>
              </ButtonGroup>
            </form>
          )}
        </Formik>
        <ExtraText>
          Return to Login Page <TextLink to="/login">LOGIN</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>Epik Robotik &copy;2020</CopyrightText>
    </div>
  );
};
export default PasswordReset;
