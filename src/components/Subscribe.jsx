
const Subscribe = () => {
  return (
    <>
      <section className="md:w-10/12 flex flex-col justify-center items-center mx-auto py-20">
        <h2 className="text-3xl mb-10 text-center font-semibold">Join Us for <span className="text-red-600">Exclusive Offers!</span></h2>
        <div className="bg-slate-50 flex flex-col justify-center items-center shadow py-8 px-5 w-11/12 min-h-[300px] border">
            <h2 className="text-3xl text-center font-semibold"><span className="text-red-500">Subscribe to </span>our weekly newsletter!</h2>
            <p className="text-center text-slate-500 mt-4">Stay updated with the latest trends, tips, and exclusive offers by subscribing to our weekly newsletter. Get valuable insights delivered directly to your inbox every week!</p>
            <br />
            <div className="mx-auto flex w-fit">
              <input className="px-5 w-full py-2 border outline-none" type="email" placeholder="Type Your Email"  required />
              <button className="px-5 py-2 font-semibold border bg-red-100">Subscribe</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;