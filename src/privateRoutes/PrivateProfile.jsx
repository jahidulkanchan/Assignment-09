/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateProfile = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const {pathname} = useLocation()
  if(loading){
    return <p className="text-2xl flex justify-center items-center min-h-[90vh] font-semibold text-red-500">Loading...</p>
  }
  if(user){
    return children
  }
  else{
    return <Navigate state={pathname} to='/login'></Navigate>
  }
};

export default PrivateProfile;