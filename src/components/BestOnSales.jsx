import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const BestOnSales = () => {
  const { brands } = useContext(AuthContext);
  const isSalesOn = brands.filter((brand) => brand.isSaleOn === true);
  return (
    <>
      <section className="px-5 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">
            Best On <span className="text-red-600">Sales</span>
          </h2>
          <p className="text-slate-500 md:w-4/6 mx-auto">
            Find the best deals from your favorite top brands in one place. Shop
            now to enjoy exclusive discounts and incredible savings on every
            purchase!
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 gap-8 mt-5 justify-center items-center sm:grid-cols-2 lg:grid-cols-3">
          {isSalesOn.map((brand, index) => {
            return (
              <div className="card bg-slate-50 border border-transparent hover:border-slate-200 rounded-lg overflow-hidden hover:bg-white duration-200 pt-5 shadow" key={index}>
                <img className="w-[120px] mx-auto h-[100px]" src={brand.brand_logo} alt="" />
                <div className="flex flex-col items-start md:flex-row bg-white p-5 mt-4 justify-between md:items-end">
                  <div>
                  <h3 className="text-2xl font-semibold mb-2">{brand.brand_name}</h3>
                  <p className="text-slate-500">Total Coupons: <span className="text-blue-600 font-semibold">{brand.coupons.length}</span></p>
                  </div>
                  <p className="text-slate-500">Category: <span className="text-blue-600 font-semibold">{brand.category}</span></p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default BestOnSales;
