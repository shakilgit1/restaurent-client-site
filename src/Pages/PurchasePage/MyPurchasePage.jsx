import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPurchasePage = () => {
  const [singleItem, setSingleItem] = useState({});
  const axiosMethod = useAxios();
  const { id } = useParams();
  const { user } = useAuth();


  useEffect(() => {
    axiosMethod.get(`/foods/${id}`, {withCredentials: true}).then((res) => {
      setSingleItem(res.data);
    });
  }, [axiosMethod, id]);

  const { _id, name, image, made_by, order_count, quantity } = singleItem;

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const purchaseQuantity = form.quantity.value;
    const date = form.date.value;
    const buyer = form.buyer.value;
    const price = form.price.value;
    const email = user?.email;

    const purchaseItem = {
      name,
      image,
      made_by,
      foodName,
      purchaseQuantity,
      date,
      buyer,
      price,
      email,
      order_count,
    };

    if (singleItem.quantity === 0) {
     return Swal.fire({
        title: "Sorry",
        text: "this food is not available",
        icon: "error",
      });
    }
    if(user.email === singleItem.email){
     return Swal.fire({
        title: "Sorry",
        text: "you can't purchase your added food",
        icon: "error",
      });
    }

    if (singleItem.quantity > 0 && singleItem.order_count >= 0) {
      const updates = {
        order_count: order_count + 1,
        quantity: quantity - purchaseQuantity,
      };

      axiosMethod
        .post("/mycarts", purchaseItem, {withCredentials: true})
        .then((res) => {
          if (res.data.insertedId) {
            console.log(res.data);

            setSingleItem({ ...singleItem, ...updates });

            axiosMethod
              .patch(`/foods/${_id}`, updates, {withCredentials: true})
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
            return Swal.fire({
              title: "Good job",
              text: "food added to your cats",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  };

  return (
    <div className="w-10/12 mx-auto my-12">
      <Helmet>
        <title>Pizzan | Purchase</title>
      </Helmet>
      <form onSubmit={handlePurchase}>
        <div className="bg-black p-20 rounded-lg">
          <div className="flex justify-around items-center flex-col md:flex-row   gap-10">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text text-white">Food name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="food name"
                  defaultValue={singleItem?.name}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  defaultValue={singleItem?.price}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-around items-center flex-col md:flex-row   gap-10">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text text-white">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  required
                  placeholder="quantity"
                  defaultValue="1"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  required
                  placeholder="date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-around items-center flex-col md:flex-row  gap-10">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text text-white">Buyer name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="buyer"
                  required
                  placeholder="buyer name"
                  readOnly={true}
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Buyer email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="buyer email"
                  readOnly={true}
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="btn btn-block btn-primary rounded-lg"
            >
              Purchase Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyPurchasePage;
