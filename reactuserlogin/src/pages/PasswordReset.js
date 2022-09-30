import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../css/PasswordReset.css";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  async function updatePassword(event) {
    event.preventDefault();
    const response = await fetch(
      "http://127.0.0.1:5050/api/v1/users/updateMyPassword",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.status === "success") {
      navigate("/dashboard");
    }
  }

  return (
    <center>
      <form onSubmit={updatePassword} className="formpassword">
        <h1 id="login">Change Password</h1>
        <input
          className="label"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input type="submit" value="Send" className="button" />
      </form>
    </center>
  );
};
export default PasswordReset;