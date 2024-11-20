import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import Coupon from "../components/Coupon";
import { FaArrowLeftLong } from "react-icons/fa6";

const BrandDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const brandData = useLoaderData();
  const singleData = brandData.filter((data) => data._id === id);
  const { brand_logo, isSaleOn, brand_name, rating, coupons } = singleData[0];

  return (
    <>
      <section className="min-h-[90vh] my-10 px-5">
        <h2 className="text-3xl text-center py-5 font-semibold">
          <span className="text-red-600">Top Deals</span> For You
        </h2>
        <div className="brand-details bg-slate-50 relative flex flex-col md:flex-row items-center justify-evenly shadow-md mx-auto border p-5 my-5  md:w-4/6 lg:w-1/2">
          <div>
            <img
              className="p-5 h-[200px] max-w-[350px]"
              src={brand_logo}
              alt=""
            />
            <button
              className="text-2xl hover:text-blue-600 absolute left-5 bottom-4"
              onClick={() => {
                navigate('/');
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
            <p className="text-blue-600 text-lg absolute right-2 animate__animated animate__shakeY  animate__delay-500ms top-1 font-semibold">
              Sale is on
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
