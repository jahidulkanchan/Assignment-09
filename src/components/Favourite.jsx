
const Favourite = () => {

  return (
    <>
      <section className="px-5 pb-8">
      <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">
            Favourite <span className="text-red-600">Categories</span>
          </h2>
          <p className="text-slate-500 md:w-4/6 mx-auto">
          My favourite categories span technology, design, and personal growth, each inspiring curiosity and creativity while helping me grow both personally and professionally.
          </p>
        </div><br />
        <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="cart shadow-md border pb-4">
            <img src="https://t3.ftcdn.net/jpg/02/57/16/84/360_F_257168460_AwhicdEIavp7bdCbHXyTaBTHnBoBcZad.jpg" alt="" />
            <p className="mt-3 text-xl text-center">Electronics</p>
          </div>
          <div className="cart shadow-md border pb-4">
            <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjS8ywMSOb3KUk39Ta5Ro3xb9yM6P8TLbdw&s" alt="" />
            <p className="mt-3 text-xl text-center">Fashion</p>
          </div>
          <div className="cart shadow-md border pb-4">
            <img src="https://media.designcafe.com/wp-content/uploads/2020/08/11193522/living-room-decor-ideas.jpg" alt="" />
            <p className="mt-3 text-xl text-center">Home & Living</p>
          </div>
          <div className="cart shadow-md border pb-4">
            <img src="https://dpi.ac/wp-content/uploads/2021/12/Food-and-Beverage-production.jpg" alt="" />
            <p className="mt-3 text-xl text-center">Food & Beverage</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Favourite;