import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import Banner from "../Home/Banner";
import useAuth from "../../hooks/useAuth";
import MyFood from "./MyFood";
import Swal from "sweetalert2";

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


    const handleDelete = (_id) =>{

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          axiosMethod.delete(`/mycarts/${_id}`)
          .then(res =>{
           if(res.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your food has been deleted from your carts.",
              icon: "success"
            });
            const remaining = myFood.filter(item => item._id !== _id);
            setMyFood(remaining);
           }
         })
          }
        });    
      }
    


    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-4xl font-bold my-8">Your Ordered food is here</h2>
            <div className="container mx-auto mb-8 grid md:grid-cols-2 gap-6">
              {
                myFood?.map(food => <MyFood key={food._id} food={food} 
               
                handleDelete={handleDelete}
                ></MyFood>)
              }
            </div>
        </div>
    );
};

export default MyOrderedFoods;