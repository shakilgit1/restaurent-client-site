const Banner = () => {
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
          <h1 className="mb-5 text-5xl font-bold">
            ENJOY YOUR FAVORITE FOOD WITH FAMILY
          </h1>
          <p className="mb-5 opacity-82">
          Elevate your dining experience at PIZZAN! Our websites inviting banner welcomes you with a tantalizing glimpse of our exquisite dishes and warm ambiance. 
          </p>
        </div>
        <button className="btn btn-error">All Menus</button>
      </div>
    </div>
  );
};

export default Banner;
