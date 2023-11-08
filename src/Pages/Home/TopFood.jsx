import { Link } from "react-router-dom";
import useAxios from "../../hooks/useaxios";
import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";

const TopFood = () => {
    const axiosMethod = useAxios();
    const [topFood, setTopFood] = useState([]);

    useEffect(() => {
        axiosMethod.get(`/foods?sortField=order_count&sortOrder=desc`, {withCredentials: true})
        .then(res => {
            setTopFood(res.data);
        })
    
      }, [axiosMethod]);


    return (
        <div className="flex justify-center my-8">
            <div className="">
             <h2 className="text-4xl my-8 text-center font-bold">Top 6 Products</h2>
             <h2 className="text-2xl text-center mb-8">Elevate your dining experience at PIZZAN! Our websites inviting banner welcomes <br /> you with a tantalizing glimpse of our exquisite dishes and warm ambiance.</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
               topFood?.slice(0, 6).map(top => <TopFoodCard key={top._id} top={top}></TopFoodCard>)
               }
            </div>

            <div className="flex justify-center mt-8">
            <Link to="/all-foods"><button className="btn bg-red-500 text-center rounded-md">See All</button></Link>
            </div>
            </div>
        </div>
    );
};

export default TopFood;