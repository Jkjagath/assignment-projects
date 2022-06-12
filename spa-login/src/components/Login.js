import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {


let navigate=useNavigate()
   let navigateToSignup=()=>{
    navigate("/SignUp")
    }


  return (
    <div>
      <form className="container border">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <h2 style={{cursor:"pointer"}} onClick={navigateToSignup} >Don't have an account? Sign-Up Here </h2>
      </form>
    </div>
  );
}

export default Login;
