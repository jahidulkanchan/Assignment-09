import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebaseAuth/firebase.init";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const ForgetPassword = () => {
  const {signOutUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const emailRef = useRef()
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value
    if(!email){
      return toast.error('provide a valid email')
    }
    else{
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        toast.success('Reset email sent, Check your email')
        navigate('/login')
        signOutUser()
      })
    }
  }
  return (
    <>
      <section className="flex flex-col pb-10 bg-slate-50 justify-center pt-[80px] mt-[50px] min-h-[50vh] items-center">
        <h2 className="text-3xl text-center font-semibold mb-10"><span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Reset</span> Your Password</h2>
        <form className="w-11/12 md:w-1/2 bg-white py-8 flex flex-col justify-center items-center border shadow-md mx-auto min-h-[300px]">
        <div className="md:w-1/2">
        <label className="text-lg mb-2 font-semibold" htmlFor="email">Email Address:</label><br />
        <input className="p-2 w-full bg-slate-50 border outline-none" type="email" placeholder="Your Email" name="email" ref={emailRef} />
        </div>
        <div className="md:w-1/2">
        <button onClick={handleForgetPassword} className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:to-sky-500 w-full font-semibold px-5 py-3 mt-8 text-white">Reset Password</button>
        </div>
        </form>
       
      </section>
    </>
  );
};

export default ForgetPassword;