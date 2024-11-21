import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaBarsStaggered } from "react-icons/fa6";
import toast from "react-hot-toast";
import { IoMdHome } from "react-icons/io";
import { TbBrandAirtable } from "react-icons/tb";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const handleToggleUser = ()=>{
    setIsHidden(!isHidden)
    setIsShow(false)
  }
  const handleToggleBar = () => {
    setIsShow(!isShow)
    setIsHidden(true)
  }
  const { user, signOutUser} = useContext(AuthContext);
  const handleSignOutUser = ()=>{
    signOutUser()
  }
  useEffect(() => {
     if (user && user.displayName) {
        toast(`Hey! Welcome, ${user.displayName}`);
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
                Coupon_<span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Kit</span>
              </h3>
            </Link>
          </div>
          <div className="menu">
            <ul className={`md:flex w-full text-center z-10 bg-slate-50 py-5 md:py-0 md:bg-transparent space-y-5 md:space-y-0 left-0 right-0 mx-auto absolute md:static flex-col justify-center md:flex-row gap-5 items-center top-[75px]  ${isShow? 'block' : 'hidden'}`}>
              <li onClick={()=>{
                setIsShow(!isShow)
                window.scrollTo(0,0)
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
                window.scrollTo(0,0)
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
                user && <li
                onClick={()=>{
                  setIsShow(!isShow)
                  window.scrollTo(0,0)
                }}
                >
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
          {

          }
          <div className="user-info">
            {user ? (
              <div className={`flex-col bg-slate-50 md:bg-transparent absolute md:static w-full md:fit left-0 top-[75px] py-5 md:py-0 gap-5 md:flex-row justify-center md:gap-4 items-center ${!isHidden ? 'flex' : 'hidden md:flex'}`}>
                <div className="flex justify-center flex-col items-center">
                  <img className="w-[100px] p-5 md:p-0 bg-white border mb-2 md:mb-0 md:w-8" src={user?.photoURL} alt="" />
                  <p className="text-slate-800 font-light text-sm">{user?.email}</p>
                  <div onClick={()=> setIsHidden(true)} className="absolute md:hidden top-5 border text-xl cursor-pointer md:text-2xl bg-white hover:bg-slate-200 right-5"><RxCross1 /></div>
                </div>
                <button onClick={handleSignOutUser} className="px-8 text-sm py-2 border border-sky-500 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Log Out</button>
              </div>
            ) : (
              <div className="flex gap-4 md:gap-8 font-semibold">
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
          <div className="bar-icon flex items-center gap-4  ml-1 z-20 cursor-pointer md:hidden text-xl">
          {user && <div title="User info" onClick={handleToggleUser} className={`text-2xl inline-block md:hidden ${!isHidden? 'text-blue-500' : 'text-black'}`}>
            <FaUserCircle />
          </div>
          }
          <div onClick={handleToggleBar}>
          {isShow? <RxCross1 />: <FaBarsStaggered />}
          </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
