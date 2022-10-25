import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Users from "./Users";
// import { v4 as uuid } from "uuid";
import {  useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  let history = useNavigate();

  var i = Users.map(function (e) {
    return e.id;
  }).indexOf(id);

  const Submit = (e) => {
    e.preventDefault();
    let User_array = Users[i];
    User_array.Name = name;
    User_array.Role = role;
    User_array.Email = email;

    history("/");
  }
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setId(localStorage.getItem("id"));
    setRole(localStorage.getItem("Role"));
    setEmail(localStorage.getItem("Email"));
  },[]);
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            value={name}
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Select
          value={role}
          className="mb-3"
          controlId="formRole"
          required
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Chose Role</option>
          <option value="Adminstrator">Adminstrator</option>
          <option value="User">User</option>{" "}
        </Form.Select>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" onClick={(e) => Submit(e)}>
          Edit
        </Button>
      </Form>
    </div>
  );
}
export default Edit;
