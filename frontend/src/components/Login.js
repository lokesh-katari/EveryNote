import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
  const userAuth=(data)=>{
    localStorage.setItem("auth-token",data.authtoken);
       navigate("/");
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      window.alert("Login successfull");
      console.log(`this is aUTH TOIKEN${data.authtoken}`);
     userAuth(data);
    }
  };
  return (
    <>
      <div className="container my-5">
        <h1>Login</h1>
        <form method="POST">
          <div className="col-md-6 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleInputs}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="col-md-6 ">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleInputs}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-4"
            onClick={loginUser}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
