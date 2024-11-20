import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
const Brands = () => {
  const { brands, loading } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return (
      <div className="bg-slate-50 flex justify-center items-center min-h-[85vh]">
        <img className="w-10 md:w-14" src="/loading.gif" alt="" />
      </div>
    );
  }
  // Search any items by name ====================
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-3xl text-center font-semibold mb-10">
        <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">The Best Brands, </span> 
        All in One Place
      </h2>

      <div className="w-10/12  md:w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Choose brand"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 shadow w-full mb-10 rounded"
        />
      </div>

      <div className="grid grid-cols-1  md:w-10/12 mx-auto gap-7">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="border border-gray-100 bg-slate-50  relative p-4 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="h-20 w-24 mr-4"
                />
                <div className="flex items-center md:items-start mt-4 flex-col">
                  <h2 className="text-xl font-semibold">{brand.brand_name}</h2>
                  <div className="flex items-center text-orange-500">
                    <ReactStars
                      count={5}
                      size={20}
                      value={brand.rating}
                      color2={"#ffd700"}
                    />
                    <span className="ml-2">({brand.rating})</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold">{brand.brand_name}</h2>
                <p className="text-gray-600 md:max-w-[300px] lg:max-w-[500px] mb-4">
                  {brand.description}
                </p>
              </div>
              <Link
                to={`/brand/${brand._id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="bg-red-200 duration-200 hover:bg-red-300  shadow-sm font-semibold px-4 py-2 rounded mb-2"
              >
                View Coupons
              </Link>
            </div>

            {brand.isSaleOn && (
              <div className="text-blue-600 text-right absolute  right-3 top-2 font-bold text-xl animate__animated animate__tada  animate__infinite">
                Sale is on!
              </div>
            )}
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Brands;
