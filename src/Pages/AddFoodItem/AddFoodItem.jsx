
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useaxios";
import Swal from "sweetalert2";

const AddFoodItem = () => {
    const {user} = useAuth();
    const axiosMethod = useAxios();

    const handleAddItems = e => {
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

        const addItems  = {name, image, made_by, description, origin, category, price, email, order_count, quantity}; 
        console.log(addItems);

        axiosMethod.post('/foods', addItems, {withCredentials: true})
          .then(res => {
            if(res.data.insertedId){
              return Swal.fire({
                title: "Good job",
                text: "Your food added",
                icon: "success",
              });
            }
          })
    }


    return (
        <div>
         
        <div className="w-10/12 mx-auto my-12">
    <form onSubmit={handleAddItems}>
      <div className="bg-black p-20 rounded-lg">
        <h2 className="text-center text-white font-bold text-4xl mb-4">Add Food</h2>
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
                defaultValue=""
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
                defaultValue=""
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
                className="input input-bordered w-full"
              />
            </label>
            
          </div>
        </div>
        <div className="flex justify-around items-center flex-col md:flex-row  gap-10">
          <div className="form-control w-1/2 ">
          <label className="label">
              <span className="label-text text-white">Adding by</span>
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
              <span className="label-text text-white">Adder email</span>
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
                defaultValue=""
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
        <div className="mt-10">
          <button type="submit" className="btn btn-block btn-primary rounded-lg">
            Add Food
          </button>
        </div>
      </div>

    </form>

    </div>
        </div>
    );
};

export default AddFoodItem;