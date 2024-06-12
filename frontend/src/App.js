import React from "react";
import { Routes, Route } from "react-router-dom";
//user
import Home from "./Components/Home.jsx";
import Child from "./Components/Child.jsx";
import Man from "./Components/Man.jsx";
import Woman from "./Components/Woman.jsx";
import Products from "./Components/Products.jsx";
import CommonLayout from "./Routes/CommonLayout.jsx";
import Login from "./Authentication/Login.jsx";
import Signup from "./Authentication/Signup.jsx";
//admin
import Admin from "./Admin/Admin.jsx";
import AdminCommonLayout from "./Routes/AdminCommonLayout.jsx";
import CreateProducts from "./Components/AdminComp/CreateProducts.jsx";
import ReadProducts from "./Components/AdminComp/ReadProducts.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path={"child"} element={<Child />} />
          <Route path={"man"} element={<Man />} />
          <Route path={"woman"} element={<Woman />} />
          <Route path={"product"} element={<Products />} />
        </Route>
        <Route path={"/admin"} element={<AdminCommonLayout />}>
          <Route index element={<Admin />} />
          <Route path={"create"} element={<CreateProducts />} />
          <Route path={"read"} element={<ReadProducts />} />
        </Route>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
