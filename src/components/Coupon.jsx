/* eslint-disable react/prop-types */
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Coupon = ({ coupon, singleData }) => {
  const { coupon_type, coupon_code, description, condition, expiry_date } =
    coupon;
  const { brand_logo,shop_link } = singleData[0];
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="cart bg-gray-50 mt-5 shadow min-h-[200px] border py-8 rounded-xl px-5 flex flex-col">
        <img
          className="w-28 shadow-2xl bg-white shadow-indigo-500 animate__animated animate__pulse  animate__infinite mx-auto h-28 border p-3 border-blue-300 mb-2"
          src={brand_logo}
          alt="Logo"
        />
        <h2 className="text-xl text-blue-600 mt-5 mb-2 md:text-2xl font-semibold">{description}</h2>
        <p><b>Type:</b> <span className="text-slate-500">{coupon_type}</span></p>
        <p><b>Condition:</b> <span className="text-slate-500">{condition}</span></p>
        <p><b>Expire Date:</b> <span className="text-slate-500">{expiry_date}</span></p>
        <div className="flex-grow"></div>
        <div className="flex justify-between">
          <Link to={shop_link} className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:to-sky-500 mt-4 border font-semibold px-5 py-2 w-fit">
            Use Now
          </Link>
          <CopyToClipboard text={coupon_code} onCopy={() => {
            setCopied(!copied);
            toast.success('Coupon copied successfully')
          }}>
            <button className="mt-4 text-blue-600 hover:bg-slate-100 border border-slate-300 font-semibold px-5 py-2 w-fit">
              Copy Code
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default Coupon;
