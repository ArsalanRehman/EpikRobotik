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
import Logo from "./../assets/logo.png";
import { formik, Form, Formik } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";
import { FiMail, FiLock,FiUser,FiCalendar } from "react-icons/fi";
// import Loader from "react-loader-spinner";
const Signup = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Signup
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            dateOfBirth: Yup.date().required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Epik Robotik"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="example@gmail.com"
                icon={<FiMail />}
              />
              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date Of Birth"
                
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="*******"
                icon={<FiLock />}
              />
               <TextInput
                name="repeatpassword"
                type="password"
                label="Repeat Password"
                placeholder="*******"
                icon={<FiLock />}
              />
              <ButtonGroup>
            
                  <StyledFormButton type="submit">SIGNUP</StyledFormButton>
                
              </ButtonGroup>
            </form>
          )}
        </Formik>
        <ExtraText>
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>Epik Robotik &copy;2020</CopyrightText>
    </div>
  );
};
export default Signup;
