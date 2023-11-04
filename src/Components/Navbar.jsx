import { NavLink } from "react-router-dom";


const Navbar = () => {

//   const {user, logOut, isDarkMode, setIsDarkMode} = useContext(AuthContext);


  // console.log(user?.displayName);
//   const handleLogOut = () =>{
//    logOut()
//    .then(() =>{
//      return toast('Sign out success')
//    })
//    .catch(error =>{
//      return toast(error.message);
//    })
//   }


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
    <div  className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-16 rounded-md" src="https://i.ibb.co/D1q7F69/Screenshot-6.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
       <button className="btn btn-ghost">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
