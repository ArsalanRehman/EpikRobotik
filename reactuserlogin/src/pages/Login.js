
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './../css/login.css';
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [user, setUSer] = useState({ email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:5050/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      // const response = await axios.post(LOGIN_URL,
      //     JSON.stringify({ email, password }),
      //     {
      //         headers: { 'Content-Type': 'application/json' },
      //         withCredentials: true
      //     }
      // );
      // console.log(JSON.stringify(response?.data))
      const data = await response.json();
      console.log('Login data.token', data.token);
      if (data.status === "success") {
        localStorage.setItem("token", data.token);

        // alert('Login successful')
        navigate("/dashboard");
      } else {
        alert("Please check your Email and Password");
      }

      // setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <center>
      <form onSubmit={handleSubmit} className="form">
        <h1 id="login">LOGIN</h1>
        <br />
        <input
          className="label"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          className="label"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          className="button button:hosubmitver"
          type="submit"
          value="Login"
        />
        <p id="forgotPassText">
          Forgot Password ?{" "}
          <a href="http://localhost:3000/" id="resetPassword">
            Reset It
          </a>
        </p>
      </form>
      <h4 id="copy_right">Epik Robotik &copy;2022</h4>
    </center>

  );
};
export default Login;