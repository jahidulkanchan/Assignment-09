
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/Slide2.jpg'
import Slide3 from '../assets/Slide3.webp'
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
    arrows: true, 
  };
  return (
    <>
      <section className="px-5 py-10 bg-blue-500">
      <Slider className="w-11/12 md:w-4/5 mx-auto" {...settings}>
      <div>
        <img className="w-11/12 h-[200px] md:h-[300px] mx-auto" src={Slide1} alt="" />
      </div>
      <div>
        <img className="w-11/12 h-[200px] md:h-[300px] mx-auto" src={Slide2} alt="" />
      </div>
      <div>
        <img className="w-11/12 h-[200px] md:h-[300px] mx-auto" src={Slide3} alt="" />
      </div>
      <div>
        <img className="w-11/12 h-[200px] md:h-[300px] mx-auto" src={Slide4} alt="" />
      </div>
     
    </Slider>
      </section>
    </>
  );
};

export default Banner;
