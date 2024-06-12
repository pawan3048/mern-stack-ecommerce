import { NavLink } from 'react-router-dom';
import "./UserMenu.css"

const UserMenu = () => {
  return (
    <nav id='user-menu' className="navbar navbar-expand-lg navbar-light bg-dark">
    <h2 className='navbar-brand text-danger px-4'><NavLink to={'/'} id='logoA'>E-Commerce</NavLink></h2>
    <NavLink className='navbar-brand' to={'/'}>Home</NavLink>
    <NavLink className='navbar-brand' to={'/product'}>Products</NavLink>
    <NavLink className='navbar-brand' to={'/man'}>Man</NavLink>
    <NavLink className='navbar-brand' to={'/woman'}>Woman</NavLink>
    <NavLink className='navbar-brand' to={'/child'}>Child</NavLink>
    <NavLink className='navbar-brand' to={'/login'}>Login</NavLink>
    <NavLink className='navbar-brand' to={'/signup'}>Signup</NavLink>
  </nav>
  );
}

export default UserMenu;
