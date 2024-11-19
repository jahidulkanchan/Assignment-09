import { useLocation, useNavigate } from "react-router-dom";


const MyProfile = () => {
  const location = useLocation()
  const navigate = useNavigate()
  if(location.state){
    navigate(location.state)
  }
  else{
    navigate('/')
  }

  return (
    <>
      <section>
        My Profile Info
      </section>
    </>
  );
};

export default MyProfile;