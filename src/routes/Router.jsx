import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateProfile from "../privateRoutes/PrivateProfile";
import Brands from "../pages/Brands";
import BrandDetails from "../pages/BrandDetails";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";
import ProrectLogin from "../privateRoutes/ProrectLogin";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/brands',
        element: <Brands/>
      },
      {
        path: '/login',
        element: <ProrectLogin><Login></Login></ProrectLogin>
      },
      {
        path: '/register',
        element: <ProrectLogin><Register></Register></ProrectLogin>
      },
      {
        path: '/my-profile',
        element: <PrivateProfile><MyProfile></MyProfile></PrivateProfile>
      },
      {
        path: '/brand/:id',
        loader: ()=> fetch('/coupon.json'),
        element: <PrivateProfile><BrandDetails/></PrivateProfile>
      },
      {
        path: '/forget-password',
        element: <ForgetPassword/>
      },
      {
        path: '/update-profile',
        element: <PrivateProfile><UpdateProfile/></PrivateProfile>
        
      }
    ],
    errorElement: <div className="min-h-screen text-xl flex flex-col justify-center items-center">
      <p>🚫 This page not found (404) 🙄</p>
      <small className="bg-slate-100 px-5 py-1 mt-4"><Link to='/'>Go Back</Link></small>
    </div>
  },
]);