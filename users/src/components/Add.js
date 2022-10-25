import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Users from "./Users";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  let history = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let n = name,
      r = role,
      m = email;
    Users.push({ id: uniqueId, Name: n, Role: r, Email: m });
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Select
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
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" onClick={(e) => Submit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
