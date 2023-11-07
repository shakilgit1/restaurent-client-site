import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

  useEffect(() => {
    AOS.init({duration:"1000", delay:"500"});
  
  }, []);

  return (
    <div
      className="hero min-h-[60vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/wz7HKhS/restaurant-banner2.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-white">
        <div className="max-w-md">
          <h1 data-aos="fade-right" className="mb-5 text-5xl font-bold">
            ENJOY YOUR FAVORITE FOOD WITH FAMILY
          </h1>
          <p data-aos="fade-up" className="mb-5 opacity-82">
          Elevate your dining experience at PIZZAN! Our websites inviting banner welcomes you with a tantalizing glimpse of our exquisite dishes and warm ambiance. 
          </p>
        </div>
        <Link to='/menu'><button  data-aos="fade-down" className="btn btn-error bg-red-500 rounded-md">All Menus</button></Link>
      </div>
    </div>
  );
};

export default Banner;
