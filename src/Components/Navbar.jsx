import { NavLink } from "react-router-dom";

const Navbar = () => {
    const NavItem = (
        <>
          <a className="px-3 py-2 rounded-lg" >
            Home
          </a>
          <a className="px-3 py-2 rounded-lg" >
            About Me
          </a>
          <a className="px-3 py-2 rounded-lg" >
            Skills
          </a>
          <a className="px-3 py-2 rounded-lg">
            Project
          </a>
          <a className="px-3 py-2 rounded-lg">
            Contact
          </a>
        </>
      );
  return (
    <div className="navbar font-OpenSans">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {NavItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">Shahriar</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-color3">
          {NavItem}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-color4 hover:bg-orange-700 text-white">Hire Me</a>
      </div>
    </div>
  );
};

export default Navbar;
