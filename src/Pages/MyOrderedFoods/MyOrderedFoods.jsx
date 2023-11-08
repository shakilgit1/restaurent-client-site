import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import Banner from "../Home/Banner";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyOrderedFoods = () => {
  const axiosMethod = useAxios();
  const { user } = useAuth();
  const [myFood, setMyFood] = useState([]);
  // console.log(myFood);

  useEffect(() => {
    axiosMethod.get(`/mycarts?email=${user?.email}`, {withCredentials: true}).then((res) => {
      setMyFood(res.data);
    });
  }, [axiosMethod, user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosMethod.delete(`/mycarts/${_id}`, {withCredentials: true}).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your food has been deleted from your carts.",
              icon: "success",
            });
            const remaining = myFood.filter((item) => item._id !== _id);
            setMyFood(remaining);
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Pizzan | My Carts</title>
      </Helmet>
      <Banner></Banner>
      <h2 className="text-center text-4xl font-bold my-8">
        Your Ordered food is here
      </h2>
      <div className="container mx-auto mb-8 grid md:grid-cols-2 gap-6">
       
        {myFood?.map((food) => (
          <div key={food._id} className="card w-96 bg-base-100 shadow-xl h-96">
            <figure>
              <img src={food?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {food?.name}
                <div className="badge badge-secondary">{food?.date}</div>
              </h2>
              <p className=" font-bold">Food owner : {food?.made_by}</p>
              <p className="text-3xl font-bold">Price : ${food?.price}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(food?._id)}
                  className="badge badge-outline btn-error py-4"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrderedFoods;
