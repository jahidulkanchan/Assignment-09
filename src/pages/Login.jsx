import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {signInUser,signWithGoogle,setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // Sign up with google ====================================
 
  const handleSignGoogle = ()=>{
    signWithGoogle()
    .then((result)=> {
      const user = result.user
      if(user){
        setUser(user)
      }
    })
    .catch((error)=> console.log(error.message))
  }

  const handleSignIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value 
    const password = e.target.password.value
    signInUser(email,password)
    .then(()=> {
      e.target.reset()
      navigate('/')
    })
    .catch((err)=> console.log('Error', err))
  }
  return (
    <>
      <section className="flex justify-center min-h-[90vh] items-center">
        <form onSubmit={handleSignIn}  className="w-11/12 md:w-1/2 bg-white py-8 flex flex-col justify-center items-center border shadow-md mx-auto min-h-[350px]">
        <div className="md:w-1/2">
        <label className="text-lg mb-2 font-semibold" htmlFor="email">Email Address:</label><br />
        <input className="p-2 w-full bg-slate-100 border outline-none" type="email" placeholder="Your Email" name="email" />
        </div><br />
        <div className="md:w-1/2">
        <label className="text-lg mb-2 font-semibold" htmlFor="password">Password:</label><br />
        <input className="p-2 w-full bg-slate-100 border outline-none" type="password" placeholder="Password" name="password" />
        </div>
        <div className="md:w-1/2">
        <button className="bg-gray-800 w-full text-lg px-5 py-3 mt-8 text-white">Log In</button>
        <p className="mt-5 text-center text-slate-500">If you have not an account please  <Link to='/register' className="text-violet-800">Register</Link></p>
        <div  onClick={handleSignGoogle} className="flex border w-fit  mx-auto px-5 py-2 shadow cursor-pointer bg-red-200 justify-center items-center gap-2 my-5">
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