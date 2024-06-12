import AdminMenu from "../Menus/AdminMenu";
import { Outlet } from "react-router-dom";

const AdminCommonLayout = () => {
  return (
    <>
      <AdminMenu/>
      <Outlet/>
    </>
  );
}

export default AdminCommonLayout;
