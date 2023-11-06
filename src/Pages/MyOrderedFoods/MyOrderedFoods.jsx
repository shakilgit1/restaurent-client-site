import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import Banner from "../Home/Banner";
import useAuth from "../../hooks/useAuth";
import MyFood from "./MyFood";

const MyOrderedFoods = () => {
    const axiosMethod = useAxios();
    const {user} = useAuth();
    const [myFood, setMyFood] = useState([]);
    // console.log(myFood);

    useEffect(() => {
        axiosMethod.get(`/mycarts?email=${user?.email}`)
        .then(res =>{
            setMyFood(res.data);
        })
    }, [axiosMethod, user?.email])

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-4xl font-bold my-8">Your Ordered food is here</h2>
            <div className="container mx-auto mb-8 grid md:grid-cols-2 gap-6">
              {
                myFood?.map(food => <MyFood key={food._id} food={food}></MyFood>)
              }
            </div>
        </div>
    );
};

export default MyOrderedFoods;