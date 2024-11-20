/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <div className="bg-slate-50 flex justify-center items-center min-h-[85vh]">
    <img className="w-10 md:w-14" src="/loading.gif" alt="" />
  </div>
  }
  if(user){
    return <Navigate to='/'></Navigate>
  }
  else{
    return children
  }
};

export default PrivateRoute;