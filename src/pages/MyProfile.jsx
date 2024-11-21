import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { Helmet } from "react-helmet";
const MyProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {user,loading} = useContext(AuthContext)
  const {displayName,email,photoURL} = user;

  // Navigate based on location state
  if(loading){
    return <div className="bg-slate-50 flex justify-center items-center min-h-[85vh]">
      <img className="w-10 md:w-14" src="/loading.gif" alt="" />
    </div>
  }
  if (location.state) {
    navigate(location.state);
  }
  return (
    <>
      <Helmet>
        <title>Coupon_kit | Profile</title>
      </Helmet>
      <section className="bg-slate-50 relative mt-[75px] md:mt-[93px] pb-20 min-h-[700px]">
        <div className="cover h-[280px] md:min-h-[350px] flex justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="user mt-20">
            <h1 className="text-2xl flex gap-5 text-center md:text-3xl text-white font-medium"><img className="w-10 md:w-16" src="https://i.pinimg.com/originals/38/bf/8c/38bf8c31c11789b2da65dff43c401ea2.gif" alt="" /> Welcome! {displayName}</h1>
            </div>
        </div>
        <div className="profile-card animate__animated animate__fadeInUp flex flex-col justify-center items-center w-11/12 sm:w-8/12 md:w-6/12 mx-auto absolute top-[170px] h-fit  md:bottom-5 left-0 right-0 bg-white shadow-2xl shadow-indigo-500 min-h-[400px]">
            <img className="w-[150px] ring ring-blue-500  border h-[150px] rounded-full" src={photoURL} alt="" /><br />
            <h2 className="text-xl"><span>User Name:</span> <span className="text-slate-500">{displayName}</span></h2>
            <h2><span >User Email:</span> <span className="text-slate-500">{email}</span></h2>
            <Link onClick={()=> window.scrollTo(0,0)} className="px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white mt-8" to='/update-profile'>Update Profile</Link>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
