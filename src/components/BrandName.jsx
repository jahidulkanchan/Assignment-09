
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../authProvider/AuthProvider';
import { useContext } from 'react';

const BrandName = () => {
  const {brands} = useContext(AuthContext)
  return (
    <div className="brand-name-marquee-container px-2 md:px-5 flex flex-col justify-center items-center min-h-[400px]">
      <div className='text-center'>
      <h2 className="text-3xl font-semibold mb-2">Popular <span className='text-red-600'>Brands</span></h2>
      <p className="text-gray-500 mb-6">Here are some of the most popular brands you can find with great deals and offers.</p>
      </div>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="card mx-5 my-5 shadow-md flex gap-5 items-center  px-8 py-3 border min-w-[200px] brand-name">
            <img className='w-[70px] h-[50px]' src={brand.brand_logo} alt="logo" />
            <p className='text-xl font-semibold md:text-2xl'>{brand.brand_name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandName;
