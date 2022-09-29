import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

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

      const data = await response.json();
      console.log(data)
      if (data.status === 'success') {
        localStorage.setItem('token', JSON.stringify(data.user))

        // alert('Login successful')
        navigate('/dashboard',)
      } else {
        alert('Please check your Email and Password')
      }

    } catch (err) {
      console.log(err)
    }
  }



  return (
    <form onSubmit={handleSubmit}>
    <br />
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
    />
    <br />
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password"
    />
    <br />
    <input type="submit" value="Login" />
  </form>
   
  )
}
export default Login 
