import PropTypes from 'prop-types';

const MyFood = ({ food }) => {
    const {name, image, date, price, made_by} = food || {};
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
            <button className="badge badge-outline btn-error py-4">Delete</button>
            
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
