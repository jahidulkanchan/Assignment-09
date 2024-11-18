import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
const Brands = () => {
  const { brands } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Search any items by name
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCouponClick = (isLoggedIn) => {
    if (isLoggedIn) {
      window.location.href = "/brand-details"; // Redirect to the brand details route
    } else {
      window.location.href = "/login"; // Redirect to the login page
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-3xl text-center font-semibold mb-5">
        The Best Brands, All in One Place
      </h2>

      <div className="w-10/12  md:w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search Brands"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 shadow w-full mb-10 rounded"
        />
      </div>

      <div className="grid grid-cols-1  md:w-10/12 mx-auto gap-7">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="border border-red-300 relative p-4 rounded-lg shadow hover:shadow-lg transition-all"
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
                <div className="flex text-lg items-center text-orange-500">
                  <span>{"★".repeat(Math.round(brand.rating))}</span>
                  <span className="ml-2">({brand.rating})</span>
                </div>
              </div>
            </div>

            <div>
            <h2 className="text-3xl font-semibold">{brand.brand_name}</h2>
            <p className="text-gray-600 mb-4">{brand.description}</p>
            </div>
            <button
              onClick={() => handleCouponClick(true)} // Assume user is logged in for now
              className="bg-red-200 shadow-sm font-semibold px-4 py-2 rounded mb-2"
            >View Coupons</button>
           </div>

            {brand.isSaleOn && (
              <div  className="text-red-600 text-right absolute  right-3 top-2 font-bold text-xl animate__animated animate__tada  animate__infinite">
              Sale is on!
            </div>
            )}
          </div>
        ))}
      </div><br /><br />
    </div>
  );
};

export default Brands;
