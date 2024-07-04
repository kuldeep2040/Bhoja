import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { toast } from "react-toastify";
const List = ({url}) => {
  
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove/`, {id: foodId});
    if (response.data.success) {
      toast.success("Food Removed");
      await fetchList();
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Food List </p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                Remove
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
