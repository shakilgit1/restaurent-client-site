import axios from "axios";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

const AllFoodItems = () => {
   const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/foods')
        .then(res =>{
            setAllFoods(res.data);
            // console.log(res.data);
        })
    }, [])   

    return (
        <div className="">
            <h2 className="text-xl text-center">AllFoodItems page</h2>

            <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-5 my-12">
               {
                allFoods?.map(food => <FoodItem key={food._id} food={food}></FoodItem>)
               }
            </div>
            </div>
        </div>
    );
};

export default AllFoodItems;