import useAuth from "../../hooks/useAuth";

const AddFoodItem = () => {
    const {user} = useAuth;

    const handleAddItems = e => {
        e.preventDefault();
        const form  = e.target;
        const foodName  = form.name.value;
        const purchaseQuantity  = form.quantity.value;
        const date  = form.date.value;
        const buyer = form.buyer.value;
        const price  = form.price.value;
        const email = user?.email;
        
        console.log(foodName, purchaseQuantity, date, buyer, price, email);
    
        // const purchaseItem  = {name, image, made_by, foodName, purchaseQuantity, date, buyer, price, email, order_count}; 
    }
    return (
        <div>
        <div className="w-10/12 mx-auto my-12">
    <form onSubmit={handleAddItems}>
      <div className="bg-black p-20 rounded-lg">
        <h2 className="text-center text-white font-bold text-4xl">Add Food</h2>
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
                defaultValue=""
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
                defaultValue=""
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
          <button type="submit" className="btn btn-block btn-primary rounded-lg">
            Purchase Now
          </button>
        </div>
      </div>

    </form>

    </div>
        </div>
    );
};

export default AddFoodItem;