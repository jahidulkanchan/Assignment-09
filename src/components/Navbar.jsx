import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const handleToggleBar = () => {
    setIsShow(!isShow)
  }
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOutUser = ()=>{
    signOutUser()
  }
  return (
    <>
      <section className="bg-slate-100 shadow px-2 md:px-5 py-5">
  
        <nav className="flex justify-between items-center">
          <div>
            <Link className="logo flex gap-2 items-center" to="/">
             <img className="h-[35px] md:h-[50px]" src={LogoIcon} alt="" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Co_<span className="text-red-600">Kit</span>
              </h3>
            </Link>
          </div>
          <div className="menu">
          {user && <p className="text-center text-slate-500 hidden md:block">Welcome {user?.displayName}</p>}
            <ul className={`md:flex w-full text-center z-10 container bg-slate-100 py-4 md:py-0 md:bg-transparent left-0 right-0 mx-auto absolute md:static flex-col justify-center md:flex-row gap-5 items-center ${user? 'top-[110px]' : 'top-[60px]'}  ${isShow? 'block' : 'hidden'}`}>
              <li onClick={()=>{
                setIsShow(!isShow)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li onClick={()=>{
                setIsShow(!isShow)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : ""}`
                  }
                  to="/brands"
                >
                  Brands
                </NavLink>
              </li>
              {
                user && <li onClick={()=>{
                  setIsShow(!isShow)
                }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : ""}`
                  }
                  to="/my-profile"
                >
                  My Profile
                </NavLink>
              </li>
              }
            </ul>
          </div>
          <div className="user-info">
            {user ? (
              <div className="flex flex-col md:flex-row justify-center md:gap-4 items-center font-semibold">
                <div className="flex justify-center flex-col items-center">
                  <img className="w-6" src={user?.photoURL} alt="" />
                  <small className="text-slate-500">{user?.email}</small>
                </div>
                <button onClick={handleSignOutUser} className="px-4 py-1 md:py-2 border bg-red-200 border-red-300">Log Out</button>
              </div>
            ) : (
              <div className="flex gap-8 font-semibold">
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
          <div onClick={handleToggleBar} className="bar-icon cursor-pointer block md:hidden text-xl">
          <FaBarsStaggered />
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
