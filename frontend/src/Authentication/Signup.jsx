import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  function handleRegister(event){
    event.preventDefault();
    console.log(name,email, password)
  }
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <div className="p-5 border border-1 w-25 h-75 shadow bg-body rounded">
        <h2 className="mb-3">Signup</h2>
        <form onSubmit={handleRegister}>
          <div className="my-2">
            <label>Name</label>
            <input type="text" id="name" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Name"/>
          </div>
          <div className="my-2">
            <label>Username</label>
            <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/>
          </div>
          <div className="my-2">
            <label>Password</label>
            <input type="password" onChange={(e)=>setPwd(e.target.value)} className="form-control" placeholder="Enter Password"/>
          </div>
          <Link to={"/login"}>Already have an account?</Link>
          <input type="submit" value={'Signup'} className="btn btn-success mt-4 w-100" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
