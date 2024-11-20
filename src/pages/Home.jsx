import Banner from "../components/Banner";
import BestOnSales from "../components/BestOnSales";
import BrandName from "../components/BrandName";
import Favourite from "../components/Favourite";
import Subscribe from "../components/Subscribe";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Coupon_kit | Home</title>
      </Helmet>
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