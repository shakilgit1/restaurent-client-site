import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        return toast.success("Sign out success");
      })
      .catch((error) => {
        return toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allfoods">All Food Items</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="w-16 rounded-md"
          src="https://i.ibb.co/D1q7F69/Screenshot-6.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">

       {
        user?.email? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/my-added-food" className="justify-between">
            My added food items
            </Link>
          </li>
          <li>
            <Link to="/add-food" className="justify-between">
            Add a food item
            </Link>
          </li>
          <li>
           <Link to="/my-ordered-foods" className="justify-between">
           My ordered food items
            </Link>
          </li>
          <li>
          <Link to="/login" onClick={handleLogOut} className="btn-sm">
              Sign Out
            </Link>
          </li>
        </ul>
      </div> : 
        <Link to="/login" className="btn btn-sm">
        Login
        </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;
