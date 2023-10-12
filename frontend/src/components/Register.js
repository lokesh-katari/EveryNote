import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const host = "http://192.168.98.227:5000";
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const createUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    const res = await fetch(`/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password, //if name and variable is same no need to defien like name:name....etc
      }),
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
      window.alert("Registration unSuccessfull");
    } else {
      window.alert("Registration");

      navigate("/Login");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
          height: "90vh",
        }}
      >
        <div
          className="card"
          style={{
            width: "400px",
            padding: "20px",
          }}
        >
          <h1>Register</h1>
          <form method="POST">
            <div className="col-md-8">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                value={user.name}
                onChange={handleInputs}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="col-md-8">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>

            <div className="col-md-8">
              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="pass"
                value={user.password}
                onChange={handleInputs}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary my-4"
              onClick={createUser}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
