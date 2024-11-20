import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import Coupon from "../components/Coupon";
import { FaArrowLeftLong } from "react-icons/fa6";
import bigSale from '../assets/bigSale.png'
import { Helmet } from "react-helmet";

const BrandDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const brandData = useLoaderData();
  const singleData = brandData.filter((data) => data._id === id);
  const { brand_logo, isSaleOn, brand_name, rating, coupons } = singleData[0];

  return (
    <>
      <Helmet>
        <title>Coupon_kit | Brand Details</title>
      </Helmet>
      <section className="min-h-[90vh] pt-[80px] md:pt-[100px] md:mt-[20px] mb-10 px-5">
        <h2 className="text-3xl text-center py-5 font-semibold">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Top Deals</span> For You
        </h2>
        <div className="brand-details bg-gray-50 relative flex flex-col md:flex-row items-center justify-evenly shadow-md mx-auto border p-5 my-5 rounded-2xl md:w-4/6 lg:w-1/2">
          <div>
            <img
              className="p-5 h-[200px] max-w-[350px]"
              src={brand_logo}
              alt="Brand Logo"
            />
            <button
              className="text-xl md:text-2xl hover:text-blue-600 absolute left-3 md:left-5 bottom-4"
              onClick={() => {
                navigate('/brands');
                window.scrollTo(0, 0);
              }}
            >
              <FaArrowLeftLong />
            </button>
          </div>
          <div>
            <h3 className="text-3xl mb-3 font-semibold">{brand_name}</h3>
            <p className="text-lg text-slate-500">Rating: {rating}</p>
            <ReactStars count={5} size={24} value={rating} color2={"#ffd700"} />
          </div>
          {isSaleOn && (
            <p className="text-blue-600 text-lg absolute  animate__animated animate__shakeY  animate__delay-500ms -top-5 -right-5 md:-right-10 font-semibold">
              <img className="w-[150px]" src={bigSale} alt="Sticker" />
            </p>
          )}
        </div>
        <br />
        <div
          className={`grid grid-cols-1 sm:grid-cols-2  gap-8 lg:gap-5 ${
            coupons.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
          }`}
        >
          {coupons.map((coupon, i) => (
            <Coupon singleData={singleData} coupon={coupon} key={i}></Coupon>
          ))}
        </div>
      </section>
    </>
  );
};

export default BrandDetails;
