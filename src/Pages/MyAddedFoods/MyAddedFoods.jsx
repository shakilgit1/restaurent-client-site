import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import useAuth from "../../hooks/useAuth";
import MyAddedCards from "./MyAddedCards";
import Banner from "../Home/Banner";

const MyAddedFoods = () => {
  const axiosMethod = useAxios();
  const { user } = useAuth();
  const [myAddedFoods, setMyAddedFoods] = useState([]);

  useEffect(() => {
    axiosMethod.get(`/foods?email=${user?.email}`, {withCredentials: true}).then((res) => {
      setMyAddedFoods(res.data);
    });
  }, [axiosMethod, user?.email]);

  return (
    <div>
        <Banner></Banner>
      <h2 className="text-center text-4xl font-bold my-8">My added foods</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {myAddedFoods?.map((food) => (
        <MyAddedCards key={food._id} food={food}></MyAddedCards>
      ))}
      </div>
    </div>
  );
};

export default MyAddedFoods;
