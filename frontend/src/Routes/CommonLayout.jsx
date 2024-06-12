import React from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "../Menus/UserMenu";
import Footer from "./Footer";


const CommonLayout = () => {
  return (
    <>
      <div className="App">
        <header className="bg bg-warning text-white py-4 fs-5 fst-normal text-center">
        Get your first course at 50% Discount. Offer lasts for the first 50 students only. Register now
        </header>
        <UserMenu />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default CommonLayout;
