import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
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
  } else {
    navigate("/");
  }

  return (
    <>
      <section className="bg-slate-50 relative pb-20 min-h-screen">
        <div className="cover h-[200px] md:min-h-[350px] flex justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="user mt-20">
            <h1 className="text-2xl md:text-3xl text-white font-medium">👋 Welcome Back, {displayName}!</h1>
            </div>
        </div>
        <div className="profile-card flex flex-col justify-center items-center w-[350px] md:max-w-[400px] mx-auto absolute bottom-3  md:bottom-5 left-0 right-0 bg-white shadow-2xl min-h-[400px]">
            <img className="w-[150px] ring ring-blue-500  border h-[150px] rounded-full" src={user?.photoURL} alt="" /><br />
            <h2 className="text-xl"><span className="font-semibold">User Name:</span> <span className="text-slate-500">{displayName}</span></h2>
            <h2><span className="font-semibold">User Email:</span> <span className="text-slate-500">{email}</span></h2>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
