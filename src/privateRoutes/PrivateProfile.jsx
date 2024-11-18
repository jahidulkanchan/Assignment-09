/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateProfile = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <p className="text-2xl flex justify-center items-center min-h-[90vh] font-semibold text-red-500">Loading...</p>
  }
  if(user){
    return children
  }
  else{
    return <Navigate to='/'></Navigate>
  }
};

export default PrivateProfile;