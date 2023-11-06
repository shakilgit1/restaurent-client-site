import PropTypes from 'prop-types';
import useAxios from '../../hooks/useaxios';
import Swal from 'sweetalert2';

const MyFood = ({ food, myFood, setMyFood }) => {

  const {_id, name, image, date, price, made_by} = food || {};

  const axiosMethod = useAxios();
   
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
      <div className="card w-96 bg-base-100 shadow-xl h-96">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
            <div className="badge badge-secondary">{date}</div>
          </h2>
          <p className=" font-bold">Food owner: {made_by}</p>
          <p className="text-3xl font-bold">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleDelete(_id)} className="badge badge-outline btn-error py-4">Delete</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};


MyFood.propTypes = {
  food: PropTypes.object
};

export default MyFood;
