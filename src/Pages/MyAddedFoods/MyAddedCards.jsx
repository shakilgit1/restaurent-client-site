import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const MyAddedCards = ({food}) => {
    const {_id, name, image, price, category, origin} = food || {};

    return (
        <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[460px]">
        <div className="flex justify-center">
        <img
            className="w-full rounded-t-lg h-[250px] hover:scale-[1.05] duration-1000"
            src={image}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5 mt-4">
        <div className="flex justify-between">
        <div>   
         <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <h5 className="text-xl font-semibold  text-blue-400">
             Category : {category}
            </h5>
            
            <h5 className="text-lg font-semibold  text-black">
             Food origin : {origin}
            </h5>
         </div>
         <div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
             ${price}
            </span>
          </div>
        </div>
          <div className="items-center gap-8 flex mt-4">
            <Link to={`/update/${_id}`}>
              <button className="btn bg-black text-white rounded-lg">Update</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

MyAddedCards.propTypes = {
    food: PropTypes.object
  };

export default MyAddedCards;