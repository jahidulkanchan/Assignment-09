import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebaseAuth/firebase.init";
import { AuthContext } from "../authProvider/AuthProvider";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const { signOutUser } = useContext(AuthContext);
  const emailRef = useRef();
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      return toast.error("provide a valid email");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.success("Reset email sent, Check your email");
        window.open("https://mail.google.com", "_blank")
        signOutUser();
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Coupon_kit | Reset Password</title>
      </Helmet>
      <section className="flex flex-col pb-10 shadow-2xl justify-center pt-[0px] md:pt-[0px] mt-[78px] md:mt-[92px] min-h-[500px] items-center">
        <h2 className="text-3xl text-center font-semibold mb-10">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Reset
          </span>{" "}
          Your Password
        </h2>
        <form className="w-11/12 sm:w-8/12 md:w-6/12 bg-gray-50 shadow-2xl shadow-indigo-500 py-8 flex flex-col justify-center items-center border mx-auto min-h-[300px]">
          <div className="grid w-10/12 md:w-8/12 grid-cols-1">
            <div>
              <label className="text-lg mb-2 font-semibold" htmlFor="email">
                Email Address:
              </label>
              <br />
              <input
                className="p-2 w-full bg-slate-50 border outline-none"
                type="email"
                placeholder="Your Email"
                name="email"
                ref={emailRef}
              />
            </div>
            <div>
              <button
                onClick={handleForgetPassword}
                className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:to-sky-500 w-full font-semibold px-5 py-3 mt-8 text-white"
              >
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgetPassword;
