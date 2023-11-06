import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

const AllFoodItems = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [count, setCount] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  // useEffect(() => {
  //     axios.get('http://localhost:5000/foods')
  //     .then(res =>{
  //         setAllFoods(res.data);
  //         // console.log(res.data);
  //     })
  // }, [])

  useEffect(() => {
    fetch("http://localhost:5000/foodsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
    // console.log(value);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, [currentPage, itemsPerPage]);

  return (
    <div className="">
      <h2 className="text-xl text-center">AllFoodItems page</h2>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-5 my-12">
          {allFoods?.map((food) => (
            <FoodItem key={food._id} food={food}></FoodItem>
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="mb-4">Current page: {currentPage + 1}</p>
        <button
          className="btn btn-sm mr-2 btn-outline btn-info"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "btn btn-error mr-2 btn-sm" : "btn btn-primary mr-2 btn-sm"}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn btn-sm mr-2 btn-outline btn-info"
          onClick={handleNextPage}
        >
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoodItems;
