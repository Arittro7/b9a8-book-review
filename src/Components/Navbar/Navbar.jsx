import { NavLink} from "react-router-dom";

const Navbar = () => {

  const links = <>
  <li> <NavLink to='/'
  style={({ isActive }) => {
    return {
      background: isActive ? "salmon" : "",
      color: isActive ? "white" : "",
      fontWeight: isActive ? "bold" : "",
      border: isActive ? "2px solid tomato" : "",
    };
  }}
  >Home</NavLink> </li>
  <li> <NavLink to="/Listed"
  style={({ isActive }) => {
    return {
      background: isActive ? "salmon" : "",
      color: isActive ? "white" : "",
      fontWeight: isActive ? "bold" : "",
      border: isActive ? "2px solid tomato" : "",
    };
  }}>Listed Books</NavLink> </li>
  <li> <NavLink to="/readedPages"
  style={({ isActive }) => {
    return {
      background: isActive ? "salmon" : "",
      color: isActive ? "white" : "",
      fontWeight: isActive ? "bold" : "",
      border: isActive ? "2px solid tomato" : "",
    };
  }}>Pages to Read</NavLink> </li>
  </>

  return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {/* {navLinks} */}
        {links}

      </ul>
    </div>
    <p className="text-2xl font-bold">Book<span className="text-orange-500">Parliament</span></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* {navLinks} */}
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-green-500 text-white">Sign In</a>
    <a className="btn  bg-purple-400 text-white">Sign Up</a>
  </div>
</div>
  );
};

export default Navbar;