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
      <div className="cart mt-5 shadow min-h-[200px] border p-3 flex flex-col">
        <img
          className="w-28 animate__animated animate__pulse  animate__infinite mx-auto h-28 border p-3 border-black mb-2"
          src={brand_logo}
          alt=""
        />
        <h2 className="text-xl md:text-2xl font-semibold">{description}</h2>
        <p><b>Type:</b> {coupon_type}</p>
        <p><b>Condition:</b> {condition}</p>
        <p><b>Expire Date:</b> {expiry_date}</p>
        <div className="flex-grow"></div>
        <div className="flex justify-between">
          <Link to={shop_link} className="bg-slate-100 mt-4  font-semibold px-5 py-2 w-fit">
            Use Now
          </Link>
          <CopyToClipboard text={coupon_code} onCopy={() => {
            setCopied(!copied);
            toast.success('Coupon copied successfully')
          }}>
            <button className="bg-slate-50 mt-4 text-red-500 font-semibold px-5 py-2 w-fit">
              Copy Code
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default Coupon;
