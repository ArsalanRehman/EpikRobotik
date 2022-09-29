import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const PasswordReset = () => {
  const navigate = useNavigate();

  const [passwordCurrent, setPasswordCurrent] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  async function updatePassword(event) {
    event.preventDefault()
    const response = await fetch('http://127.0.0.1:5050/api/v1/users/updateMyPassword', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        passwordCurrent,
        password,
        passwordConfirm,
      }),
    })

    const data = await response.json()
    console.log(data);

    if (data.status === 'success') {
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={updatePassword}>

    <br />
    <input
      value={passwordCurrent}
      onChange={(e) => setPasswordCurrent(e.target.value)}
      type="password"
      placeholder="Current Password"
    />
    <br />
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password"
    />
    <br />
    <input
      value={passwordConfirm}
      onChange={(e) => setPasswordConfirm(e.target.value)}
      type="password"
      placeholder="Password"
    />
    <br />
    <input type="submit" value="Change Password" />
  </form>
  );
};
export default PasswordReset;
