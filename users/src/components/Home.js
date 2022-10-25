import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import Users from "./Users";
import { Link, useNavigate } from "react-router-dom";

function Home() {

  let history = useNavigate();

  const Delete = (id) => {
    var i = Users.map(function (e) {
      return e.id;
    }).indexOf(id);
    Users.splice(i, 1);
    history("/");
  };

  const editHandel=(id,name,role,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("Name",name);
    localStorage.setItem("Role",role);
    localStorage.setItem("Email",email);
  }
  
  return (
    <Fragment>
      <Link to="/create">
        <Button size="lg">Create User</Button>
      </Link>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          {" "}
        </Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <body>
          {Users && Users.length > 0
            ? Users.map((item) => {
                return (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Role}</td>
                    <td>{item.Email}</td>
                    <td>
                      <Link to={"/edit"}>
                        <Button onClick={() => editHandel(item.id,item.Name,item.Role,item.Email)}>Edit</Button>
                      </Link>
                
                    &nbsp;
                 
                      <Button onClick={() => Delete(item.id)}>Delete</Button>
                    </td>
                  </tr>
                );
              })
            : "No data Available"}
        </body>
      </div>
    </Fragment>
  );
  }
export default Home;
