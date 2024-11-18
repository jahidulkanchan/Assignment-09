import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate()
  const {signUpUser,updateUserProfile,signWithGoogle,setUser} = useContext(AuthContext)
    // Sign up with google ====================================
    const handleSignGoogle = ()=>{
      signWithGoogle()
      .then(()=> {
        navigate('/')
      })
      .catch((error)=> console.log(error.message))
    }
  const handleSignUp = (e)=>{
    e.preventDefault();
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password);
    signUpUser(email, password)
    .then((result)=> {
      const user = result.user
      updateUserProfile({displayName: name, photoURL: photo})
      .then(()=> {
        // Update user info after profile update
        const updatedUser = {
          ...user,
          displayName: name,
          photoURL: photo,
        };
        setUser(updatedUser);
        navigate('/');
      })
      .catch(err=> console.log(err.message))
    })
    .catch((err)=> console.log('Error', err))
  }
  return (
    <>
    <section className="flex justify-center mt-10 min-h-[90vh] items-center">
        <form
          onSubmit={handleSignUp}
          className="w-11/12 md:w-1/2 bg-white py-8 flex flex-col justify-center items-center border space-y-4 shadow-md mx-auto min-h-[350px]"
        >
          <div className="md:w-1/2">
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
          <div className="md:w-1/2">
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
          <div className="md:w-1/2">
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
          <div className="md:w-1/2">
            <label className=" mb-2 font-semibold" htmlFor="password">
              Password:
            </label>
            <input
              className="p-2 w-full bg-slate-100 border outline-none"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="md:w-1/2">
            <button className="bg-gray-800 w-full  px-5 py-3 mt-2 text-white">
              Register
            </button>
            <p className="mt-5 text-center text-slate-500">
              Already have an account please{" "}
              <Link to="/login" className="text-violet-800">
                Log In
              </Link>
            </p>
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

export default Register;