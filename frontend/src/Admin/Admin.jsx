import React from 'react';
import { Outlet } from 'react-router-dom';

const admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Outlet/>
    </div>
  );
}

export default admin;
