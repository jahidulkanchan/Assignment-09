
const Subscribe = () => {
  return (
    <>
      <section className="md:w-10/12 flex flex-col justify-center items-center mx-auto py-20">
        <h2 className="text-3xl mb-10 text-center font-semibold">Join Us for <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Exclusive Offers!</span></h2>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center shadow py-8 px-5 w-11/12 min-h-[300px] border">
            <h2 className="text-3xl text-center font-semibold text-white">Subscribe to our weekly newsletter!</h2>
            <p className="text-center text-slate-200 mt-4">Stay updated with the latest trends, tips, and exclusive offers by subscribing to our weekly newsletter. Get valuable insights delivered directly to your inbox every week!</p>
            <br />
            <div className="mx-auto shadow-2xl flex w-fit">
              <input className="px-5 w-full py-2 border outline-none" type="email" placeholder="Type Your Email"  required />
              <button className="px-5 py-2 border text-blue-700 font-semibold text-blue bg-slate-50">Subscribe</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;