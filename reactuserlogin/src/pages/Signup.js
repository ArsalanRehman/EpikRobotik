
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://127.0.0.1:5050/api/v1/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
        password,
				email,
        passwordConfirm,
			}),
		})

		const data = await response.json()
    console.log(data);

		if (data.status === 'success') {
			navigate('/login')
		}
	}

  return (
    <form onSubmit={registerUser}>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="Name"
    />
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
    <input
      value={passwordConfirm}
      onChange={(e) => setPasswordConfirm(e.target.value)}
      type="password"
      placeholder="Password"
    />
    <br />
    <input type="submit" value="Register" />
  </form>
  );
};
export default Signup;
