import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <nav id='user-menu' className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className='navbar-brand text-white' to={'/admin'}>E-Commerce</Link>
    <Link className='navbar-brand text-white' to={'/admin/create'}>Create</Link>
    <Link className='navbar-brand text-white' to={'/admin/read'}>Read</Link>
    <Link className='navbar-brand text-white' to={'/admin/login'}>Login</Link>
    <Link className='navbar-brand text-white' to={'/admin/signup'}>Signup</Link>
  </nav>
  );
};

export default AdminMenu;
