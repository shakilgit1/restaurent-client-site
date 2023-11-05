import { Link } from "react-router-dom";

const FoodItem = ({food}) => {

    const {name, image, price, quantity, category} = food || {};
    

  return (
    <div>
       <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
        <img
            className="w-full p-8 rounded-t-lg h-[250px] hover:scale-[1.05] duration-1000"
            src={image}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
         
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <h5 className="text-xl font-semibold  text-blue-400">
             Category: {category}
            </h5>
            <h5 className="text-lg font-semibold  text-purple-400">
            Quantity: {quantity}
            </h5>
         
          <div className="flex justify-between">
          <div className="flex items-center mt-2.5 mb-5 text-2xl">
              
          </div>
          <div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
             ${price}
            </span>
          </div>
          </div>
          <div className="items-center gap-8 flex">
            <Link to="">
              <button className="btn bg-purple-500">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
