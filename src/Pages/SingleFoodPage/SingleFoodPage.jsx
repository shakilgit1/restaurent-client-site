import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import { Link, useParams } from "react-router-dom";

const SingleFoodPage = () => {
  const [singleItem, setSingleItem] = useState({});
  const axiosMethod = useAxios();
  const { id } = useParams();

  useEffect(() => {
    // axios.get(`http:///foods/${ilocalhost:5000d}`)
    axiosMethod.get(`/foods/${id}`).then((res) => {
      setSingleItem(res.data);
    //   console.log(res.data);
    });
  }, [axiosMethod, id]);


  return (
    <div className="h-screen items-center flex justify-center">
      <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto">
        <div className="flex justify-center">
        <img
            className="w-full rounded-t-lg h-[250px]"
            src={singleItem.image}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5 mt-4">
        <div className="flex justify-between">
        <div>   
         <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {singleItem.name}
            </h5>
            <h5 className="text-xl font-semibold  text-blue-400">
             Category: {singleItem.category}
            </h5>
            <h5 className="text-lg font-semibold  text-purple-400">
           Food origin: {singleItem.origin}
            </h5>
            <h5 className="text-lg font-bold  text-sky-400">
           Made By: {singleItem.made_by}
            </h5>
            <h5 className="text-sm font-semibold  text-black">
           {singleItem.description}
            </h5>
         </div>
         <div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
             ${singleItem.price}
            </span>
          </div>
        </div>
          <div className="items-center gap-8 flex mt-4">
            <Link to="">
              <button className="btn bg-black text-white">Order Now</button>
            </Link>
          </div>
        </div>
            </div>
    </div>
  );
};

export default SingleFoodPage;
