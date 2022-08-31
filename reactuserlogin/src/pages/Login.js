import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from './../components/Styles'
import Logo from './../assets/user.png'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { TextInput } from '../components/FormLib'
import * as Yup from 'yup'
import { FiMail, FiLock } from 'react-icons/fi'
// import axios from './../Api/axios'
// const LOGIN_URL = '/login'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // const [user, setUSer] = useState({ email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://127.0.0.1:5050/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      // const response = await axios.post(LOGIN_URL,
      //     JSON.stringify({ email, password }),
      //     {
      //         headers: { 'Content-Type': 'application/json' },
      //         withCredentials: true
      //     }
      // );
      // console.log(JSON.stringify(response?.data))
      const data = await response.json();
      console.log(data)
      if (data.status === 'success') {
        localStorage.setItem('token', data.user)

        // alert('Login successful')
        navigate('/dashboard',)
      } else {
        alert('Please check your Email and Password')
      }

      // setSuccess(true);
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          LOGIN PAGE
        </StyledTitle>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
          }}
        >
          <form>
            <TextInput
              name="email"
              type="text"
              label="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              icon={<FiMail />}
            />
            <TextInput
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              icon={<FiLock />}
            />
            <ButtonGroup>
              <StyledFormButton onClick={handleSubmit} type="submit">
                LOGIN
              </StyledFormButton>
            </ButtonGroup>
          </form>
        </Formik>
        <ExtraText>
          Forgotten Password?{' '}
          <TextLink to="/forgottenpassword">Reset it</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>Epik Robotik &copy;2020</CopyrightText>
    </div>
  )
}
export default Login 
