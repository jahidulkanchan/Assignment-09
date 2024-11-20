/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateProfile = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const {pathname} = useLocation()
  if(loading){
    return <div className="bg-slate-50 flex justify-center items-center min-h-[85vh]">
      <img className="w-10 md:w-14" src="/loading.gif" alt="" />
    </div>
  }
  if(user){
    return children
  }
  else{
    return <Navigate state={pathname} to='/login'></Navigate>
  }
};

export default PrivateProfile;