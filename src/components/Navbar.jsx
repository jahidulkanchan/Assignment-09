import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaBarsStaggered } from "react-icons/fa6";
import toast from "react-hot-toast";
import { IoMdHome } from "react-icons/io";
import { TbBrandAirtable } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const handleToggleBar = () => {
    setIsShow(!isShow)
  }
  const { user, signOutUser} = useContext(AuthContext);
  const handleSignOutUser = ()=>{
    signOutUser()
  }
  useEffect(() => {
     if (user && user.displayName) {
        toast(`❤ Hey !! Welcome, ${user.displayName}`);
      }
    },[user]);
  
  return (
    <>
      <section className="shadow fixed left-0 w-full z-20 top-0 backdrop-blur bg-gray-50 bg-opacity-15 px-2 md:px-5 py-5">
        <nav className="flex justify-between items-center">
          <div>
            <Link className="logo flex items-center" to="/">
             <img className="h-[35px] md:h-[50px]" src={LogoIcon} alt="" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Coupon_<span className="text-blue-500">Kit</span>
              </h3>
            </Link>
          </div>
          <div className="menu">
            <ul className={`md:flex w-full text-center z-10 container bg-gray-50 py-4 md:py-0 md:bg-transparent left-0 right-0 mx-auto absolute md:static flex-col justify-center md:flex-row gap-5 items-center ${user? 'top-[100px]' : 'top-[60px]'}  ${isShow? 'block' : 'hidden'}`}>
              <li onClick={()=>{
                setIsShow(!isShow)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/"
                >
                  <IoMdHome /> Home
                </NavLink>
              </li>
              <li onClick={()=>{
                setIsShow(!isShow)
              }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/brands"
                >
                 <TbBrandAirtable /> Brands
                </NavLink>
              </li>
              {
                user && <li onClick={()=>{
                  setIsShow(!isShow)
                }}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : ""} flex justify-center items-center gap-1`
                  }
                  to="/my-profile"
                >
                 <FaUser /> My Profile
                </NavLink>
              </li>
              }
            </ul>
          </div>
          <div className="user-info">
            {user ? (
              <div className="flex flex-col md:flex-row justify-center md:gap-4 items-center">
                <div className="flex justify-center flex-col items-center">
                  <img className="w-6" src={user?.photoURL} alt="" />
                  <p className="text-slate-800 font-light text-sm">{user?.email}</p>
                </div>
                <button onClick={handleSignOutUser} className="px-4 text-sm py-1 md:py-2 border border-sky-500 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Log Out</button>
              </div>
            ) : (
              <div className="flex gap-8 font-semibold">
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
          <div onClick={handleToggleBar} className="bar-icon z-20 cursor-pointer block md:hidden text-xl">
          <FaBarsStaggered />
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
