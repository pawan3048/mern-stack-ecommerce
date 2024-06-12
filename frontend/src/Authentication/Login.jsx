import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {

  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <div className="p-5 border border-1 w-25 h-75 shadow bg-body rounded">
        <h2 className="mb-3">Login</h2>
        <form>
          <div className="my-2">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter Email"/>
          </div>
          <div className="my-2">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter Password"/>
          </div>
          <Link to={"/signup"}>Not have an account</Link>
          <button className="btn btn-success mt-4 w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
