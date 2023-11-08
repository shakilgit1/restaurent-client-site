
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useaxios";
import Swal from "sweetalert2";
// import { useEffect, useState } from "react";

const UpdatePage = () => {
    const {user} = useAuth();
    const axiosMethod = useAxios();
    // const [updateItem, setUpdateItem] = useState({});
    // const {id} = useParams();
    // console.log(id);

    const updateItem = useLoaderData();
    console.log(updateItem._id);
    const {_id} = updateItem ;

    // useEffect(() => {
    //     axiosMethod.get(`/foods/${id}`)
    //     .then(res => {
    //         setUpdateItem(res.data);
    //     })
    // }, [axiosMethod, id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form  = e.target;
        const name  = form.name.value;
        const quantity  = form.quantity.value;
        const description  = form.description.value;
        const origin = form.origin.value;
        const price  = form.price.value;
        const email = user?.email;
        const image = form.image.value;
        const made_by = form.made.value;
        const category = form.category.value;
        const order_count = 0;

        const update  = {name, image, made_by, description, origin, category, price, email, order_count, quantity}; 
        console.log(update);

        axiosMethod.put(`/foods/${_id}`, updateItem, {withCredentials: true})
          .then(res => {
            if(res.data.modifiedCount > 0){
              return Swal.fire({
                title: "Good job",
                text: "Your food updated",
                icon: "success",
              });
            }
            
          })
          .catch(err => {
            console.log(err);   
        })
    }


    return (
        <div>
        <div className="w-10/12 mx-auto my-12">
    <form onSubmit={handleUpdate}>
      <div className="bg-black p-20 rounded-lg">
        <h2 className="text-center text-white font-bold text-4xl mb-4">Update Your Food</h2>
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
                defaultValue={updateItem?.name}
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
                defaultValue={updateItem.price}
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
                placeholder=""
                defaultValue={updateItem.quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">

          <label className="label">
              <span className="label-text text-white">Food origin</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="origin"
                required
                placeholder="origin"
                defaultValue={updateItem.origin}
                className="input input-bordered w-full"
              />
            </label>
            
          </div>
        </div>
        <div className="flex justify-around items-center flex-col md:flex-row   gap-10">
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text text-white">category</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="category"
                required
                placeholder="category"
                defaultValue={updateItem.category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">

          <label className="label">
              <span className="label-text text-white">Food image</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="image"
                required
                placeholder="image url"
                defaultValue={updateItem.image}
                className="input input-bordered w-full"
              />
            </label>
            
          </div>
        </div>
        <div className="flex justify-around items-center flex-col md:flex-row  gap-10">
          <div className="form-control w-1/2 ">
          <label className="label">
              <span className="label-text text-white">Update by</span>
            </label>
            <label className="input-group">
              
              <input
                type="text"
                name="made"
                required
                placeholder="adder name"
                readOnly={true}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-white">Updater email</span>
            </label>
            <label className="input-group">       
              <input
                type="email"
                name="email"
                required
                placeholder="buyer email"
                defaultValue={user?.email}
                readOnly={true}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-around items-center flex-col md:flex-row   gap-10">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="description"
                required
                placeholder="short description"
                defaultValue={updateItem.description}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
        <div className="mt-10">
          <button type="submit" className="btn btn-block btn-primary rounded-lg">
            Update Food
          </button>
        </div>
      </div>

    </form>

    </div>
        </div>
    );
};

export default UpdatePage;