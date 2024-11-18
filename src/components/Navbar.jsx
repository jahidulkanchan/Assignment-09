import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOutUser = ()=>{
    signOutUser()
  }
  return (
    <>
      <section className="bg-slate-100 shadow px-5 py-2">
      {user && <p className="text-center">Welcome {user?.displayName}</p>}
        <nav className="flex justify-between items-center">
          <div>
            <Link className="logo flex gap-2 items-center" to="/">
              <img className="h-[50px]" src={LogoIcon} alt="" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Coupon <span className="text-red-600">Kit</span>
              </h3>
            </Link>
          </div>
          <div className="menu">
            <ul className="flex gap-5 items-center">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
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
                user && <li>
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
              <div className="flex gap-4 items-center font-semibold">
                <div className="flex flex-col items-center">
                  <img src="/vite.svg" alt="" />
                  <small className="text-slate-500">{user?.email}</small>
                </div>
                <button onClick={handleSignOutUser} className="px-4 py-2 border bg-red-300 border-red-500">Log Out</button>
              </div>
            ) : (
              <div className="flex gap-8 font-semibold">
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
