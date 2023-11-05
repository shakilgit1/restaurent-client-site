import { useEffect, useState } from "react";
import useAxios from "../../hooks/useaxios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const MyPurchasePage = () => {
  const [singleItem, setSingleItem] = useState({});
  const axiosMethod = useAxios();
  const { id } = useParams();
  const {user} = useAuth();

  console.log(user?.displayName);

  useEffect(() => {
    // axios.get(`http:///foods/${ilocalhost:5000d}`)
    axiosMethod.get(`/foods/${id}`).then((res) => {
      setSingleItem(res.data);
        
    });
  }, [axiosMethod, id]);


  const handleAddProduct = e =>{
    e.preventDefault();
    const form  = e.target;
    const name  = form.name.value;
    const quantity  = form.quantity.value;
    const date  = form.date.value;
    const buyer = form.buyer.value;
    const price  = form.price.value;
    const email = user?.email;

    const addProduct  = {name, quantity, date, buyer, price, email};
    console.log(addProduct);
    
    // fetch('https://brand-shop-server-rosy.vercel.app/technologies', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(addProduct)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if(data.insertedId){
    //     Swal.fire({
    //       title: 'Success!',
    //       text: 'Product added Successfully ',
    //       icon: 'success',
    //       confirmButtonText: 'Cool'
    //     })
    //     console.log(data);
    //     form.reset();
    //   }
      
    // })
  }

  return (
    <div className="w-10/12 mx-auto my-12">
    <form onSubmit={handleAddProduct}>
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
                defaultValue={singleItem?.quantity}
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
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
        <div className="mt-10">
          <button type="submit" className="btn btn-block btn-primary">
            Purchase Now
          </button>
        </div>
      </div>

    </form>

  </div>
  );
};

export default MyPurchasePage;
