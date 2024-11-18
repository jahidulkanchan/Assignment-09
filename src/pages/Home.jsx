import Banner from "../components/Banner";
import BestOnSales from "../components/BestOnSales";
import BrandName from "../components/BrandName";
import Favourite from "../components/Favourite";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      <section>
        <Banner/>
        <BrandName/>
        <BestOnSales/>
        <Favourite/>
        <Subscribe/>
      </section>
    </>
  );
};

export default Home;