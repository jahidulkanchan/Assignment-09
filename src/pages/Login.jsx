import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser, signWithGoogle, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // Sign up with google ====================================

  const handleSignGoogle = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          setUser(user);
          navigate("/");
          window.scrollTo(0, 0);
        }
      })
      .catch((error) => console.log(error.message));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          setUser(user);
          navigate(location?.state ? location.state : "/");
          e.target.reset();
          window.scrollTo(0,0)
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Coupon_Kit | Login</title>
      </Helmet>
      <section className="flex flex-col pb-10 pt-[80px] mt-[50px] bg-slate-50 justify-center min-h-[600px] items-center">
        <h2 className="text-3xl text-center font-semibold mb-10">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Log In
          </span>{" "}
          to Your Account
        </h2>
        <form
          onSubmit={handleSignIn}
          className="w-11/12 md:w-8/12  lg:w-1/2 bg-white py-10 flex flex-col justify-center items-center border shadow-md mx-auto min-h-[350px]"
        >
          <div className="grid gap-5 mx-5 grid-cols-1">
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
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:shadow-lg duration-150 w-full font-semibold px-5 py-3 mt-8 text-white">
              Log In
            </button>
            <Link to='/forget-password' className="text-gray-500 mt-3 inline-block">Forget Password</Link>
            {errorMessage && (
              <p className="text-red-500 mt-2">
                Something is wrong! <br /> please use correct email or password
              </p>
            )}
            <p className="mt-5 text-center text-slate-700">
              If you have not an account please{" "}
              <Link to="/register" className="text-violet-800">
                Register
              </Link>
            </p>
            <div
              onClick={handleSignGoogle}
              className="flex text-white border w-fit  mx-auto px-5 py-2 shadow-2xl cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 justify-center items-center gap-2 my-5"
            >
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
