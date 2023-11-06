import { Link } from "react-router-dom";

const TopFood = () => {
    return (
        <div className="flex justify-center my-8">
            <div className="">
             <h2 className="text-4xl my-8 text-center">Top 6 Products</h2>
            <Link to="/all-foods"><button className="btn bg-red-500 text-center rounded-md">See All</button></Link>
            </div>
        </div>
    );
};

export default TopFood;