import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate()
  const {user, updateUserProfile,setUser} = useContext(AuthContext)
  const updateProfileData = (e)=>{
    e.preventDefault();
    const name = e.target.name.value 
    const photo = e.target.photo.value
    updateUserProfile({displayName: name, photoURL: photo})
    .then(()=> {
      const updateUser = {
        ...user,
        displayName: name,
        photoURL: photo
      }
      setUser(updateUser)
      toast.success('Profile updated successfully')
      e.target.reset()
      navigate('/my-profile')
      window.scrollTo(0,0)
    })
    .catch((error)=> toast.error(error.message))
  }
  return (
    <> 
       <section className="bg-slate-50 relative pb-20 mt-[110px] md:mt-[90px] min-h-[600px]">
        <div className="cover h-[250px] md:min-h-[280px] flex justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="user text-center mt-16 md:mt-10">
            <h1 className="text-2xl md:text-3xl text-white font-medium">Update Profile Information</h1>
            <p className="text-slate-100 px-3 mt-1 md:mt-3 md:w-2/3 mx-auto">Update your profile with a new name and photo to personalize your account. Make sure your details reflect who you are for a more personalized experience!</p>
            </div>
        </div>
        <form onSubmit={updateProfileData} className="profile-card flex flex-col justify-center items-center w-[350px] sm:w-6/12 mx-auto absolute bottom-4 md:bottom-28 left-0 right-0 bg-white shadow-2xl min-h-[300px]">
         <div className="grid gap-5 grid-cols-1">
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
                required
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
                required
              />
          </div>
         </div>
          <button className="px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white mt-8">Update Now</button>
        </form>
      </section>
    </>
  );
};

export default UpdateProfile;