import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const Register = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [ishidden, setIsHidden]  = useState(true)
  const {signUpUser,updateUserProfile,signWithGoogle,setUser} = useContext(AuthContext)
    // Sign up with google ====================================
    const handleSignGoogle = ()=>{
      signWithGoogle()
      .then(()=> {
        navigate('/')
        window.scrollTo(0,0)
      })
      .catch((error)=> console.log(error.message))
    }
  const handleSignUp = (e)=>{
    e.preventDefault();
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    setErrorMessage('')
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
        return setErrorMessage('Password must have at least one uppercase letter, one lowercase letter, and at least 6 characters long');
    }
    signUpUser(email, password)
    .then((result)=> {
      const user = result.user
      updateUserProfile({displayName: name, photoURL: photo})
      .then(()=> {
        const updatedUser = {
          ...user,
          displayName: name,
          photoURL: photo,
        };
        setUser(updatedUser);
        navigate('/');
        window.scrollTo(0,0)
      })
      .catch(err=> console.log(err.message))
    })
    .catch((err)=> console.log('Error', err.message))
  }
  return (
    <>
    <section className="flex flex-col bg-slate-50 justify-center py-10 min-h-[90vh] items-center">
    <h2 className="text-3xl text-center font-semibold mb-10"><span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Register</span> to Get Started </h2>
        <form
          onSubmit={handleSignUp}
          className="w-11/12 md:w-1/2 bg-white py-8 flex flex-col justify-center items-center border space-y-4 shadow-md mx-auto min-h-[350px]"
        >
          <div>
            <label className=" mb-2 font-semibold" htmlFor="name">
              Name:
            </label>
            <br />
            <input
              className="p-2 w-full bg-slate-100 border outline-none"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div>
            <label className=" mb-2 font-semibold" htmlFor="photo">
              Photo URL:
            </label>
            <input
              className="p-2 w-full bg-slate-100 border outline-none"
              type="text"
              placeholder="Photo URL"
              name="photo"
            />
          </div>
          <div>
            <label className=" mb-2 font-semibold" htmlFor="email">
              Email Address:
            </label>
            <input
              className="p-2 w-full bg-slate-100 border outline-none"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div>
            <label className=" mb-2 font-semibold" htmlFor="password">
              Password:
            </label>
           <div className="relative">
           <input
              className="p-2 w-full bg-slate-100 border outline-none"
              type={`${ishidden ? 'password' : 'text'}`}
              placeholder="Password"
              name="password"
            />
            {
              errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>
            }
            <div onClick={()=> setIsHidden(!ishidden)} className="absolute cursor-pointer right-2 top-3">
              {ishidden ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
           </div>
          </div>
          <div>
            <button className="bg-gradient-to-r hover:shadow-lg duration-150 from-sky-500 to-indigo-500 w-full  px-5 py-3 mt-2 text-white">
              Register
            </button>
            <p className="mt-5 text-center text-slate-500">
              Already have an account please{" "}
              <Link to="/login" className="text-sky-600">
                Log In
              </Link>
            </p>
            <div  onClick={handleSignGoogle} className="flex text-white border w-fit  mx-auto px-5 py-2 shadow-2xl cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 justify-center items-center gap-2 my-5">
          <FaGoogle />
          <p>Sign With Google</p>
        </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;