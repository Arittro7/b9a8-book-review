import { Link } from 'react-router-dom';
import bnrImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='max-w-7xl my-5'>
      <div className="hero min-h-[500px] w-[1280px] bg-[#1313130D] border rounded Playfair">
          <div className="hero-content flex ">
            <div className='w-2/3'>
            <h2 className='text-3xl mb-8'>Books are the quietest and most <br />constant of friends</h2>
            <Link to="/Listed">
            <button className='bg-green-600 text-white text-2xl font-semibold py-2 px-3 rounded-xl'>View The List</button>
            </Link>
            </div>
            <img className='border-2' src={bnrImg} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Banner;