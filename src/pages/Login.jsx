import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {signInUser,signWithGoogle,setUser} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  // Sign up with google ====================================
 
  const handleSignGoogle = ()=>{
    signWithGoogle()
    .then((result)=> {
      const user = result.user
      if(user){
        setUser(user)
        navigate('/')
        window.scrollTo(0,0)
      }
    })
    .catch((error)=> console.log(error.message))
  }
  const handleSignIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value 
    const password = e.target.password.value
    setErrorMessage('')
    signInUser(email,password)
    .then((result)=> {
      const user = result.user
      if(user){
        setUser(user)
        navigate(location?.state ? location.state : '/' )
        e.target.reset()
      }
    })
    .catch((err)=> {
      setErrorMessage(err.message)
    })
  }
  return (
    <>
      <section className="flex flex-col pb-10 bg-slate-50 justify-center min-h-[90vh] items-center">
        <h2 className="text-3xl text-center font-semibold mb-10"><span className="text-red-600">Log In</span> to Your Account</h2>
        <form onSubmit={handleSignIn}  className="w-11/12 md:w-1/2 bg-white py-8 flex flex-col justify-center items-center border shadow-md mx-auto min-h-[350px]">
        <div className="md:w-1/2">
        <label className="text-lg mb-2 font-semibold" htmlFor="email">Email Address:</label><br />
        <input className="p-2 w-full bg-slate-50 border outline-none" type="email" placeholder="Your Email" name="email" />
        </div><br />
        <div className="md:w-1/2">
        <label className="text-lg mb-2 font-semibold" htmlFor="password">Password:</label><br />
        <input className="p-2 w-full bg-slate-50 border outline-none" type="password" placeholder="Password" name="password" />
        </div>
        <div className="text-slate-500 md:w-1/2 mt-2"><Link to='/forget-password'>Forget Password</Link></div>
        <div className="md:w-1/2">
        <button className="bg-gray-700 w-full font-semibold px-5 py-3 mt-8 text-white">Log In</button>
        {
          errorMessage && <p className="text-red-500 mt-2">Something is wrong! <br /> please use correct email or password</p>
        }
        <p></p>
        <p className="mt-5 text-center text-slate-700">If you have not an account please  <Link to='/register' className="text-violet-800">Register</Link></p>
        <div  onClick={handleSignGoogle} className="flex border w-fit  mx-auto px-5 py-2 shadow-2xl cursor-pointer bg-red-200 justify-center items-center gap-2 my-5">
          <FaGoogle />
          <p>Sign With Google</p>
        </div>
        </div>
        </form>
       
      </section>
    </>
  );
};

export default Login;