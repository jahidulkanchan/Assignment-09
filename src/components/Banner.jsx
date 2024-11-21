
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/Slide1.jpg'
import Slide2 from '../assets/Slide2.jpg'
import Slide3 from '../assets/Slide3.jpg'
import Slide4 from '../assets/Slide4.jpg'
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    pauseOnHover: false
  };
  return (
    <>
      <section className="px-5 pt-[100px] mt-[20px] md:mt-[20px] py-10">
      <Slider className="w-full  mx-auto" {...settings}>
      <div>
        <img className="w-full md:w-11/12 shadow md:shadow-xl mb-10 h-[200px] md:h-[370px] mx-auto" src={Slide1} alt="Slide_Banner" />
      </div>
      <div>
        <img className="w-full md:w-11/12 shadow md:shadow-xl mb-10 h-[200px] md:h-[370px] mx-auto" src={Slide2} alt="Slide_Banner" />
      </div>
      <div>
        <img className="w-full md:w-11/12 shadow md:shadow-xl mb-10 h-[200px] md:h-[370px] mx-auto" src={Slide3} alt="Slide_Banner" />
      </div>
      <div>
        <img className="w-full md:w-11/12 shadow md:shadow-xl mb-10 h-[200px] md:h-[370px] mx-auto" src={Slide4} alt="Slide_Banner" />
      </div>
     
    </Slider>
      </section>
    </>
  );
};

export default Banner;
