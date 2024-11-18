import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const {id} = useParams()
  const brandData = useLoaderData()
  const singleData = brandData.filter((data)=> data._id === id)
  return (
    <>
      <section className="min-h-[90vh]">
        <p className="text-xl text-center mt-10">Hello I am ready to show data details my coupon Length {singleData[0].coupons.length}</p>
        <Link className="text-center w-fit mx-auto" to='/brands'>Go Back</Link>
      </section>
    </>
  );
};

export default BrandDetails;