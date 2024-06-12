import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getApi() {
      await axios("http://localhost:8000/user").then((result) => {
        setData(result.data);
      });
    }
    getApi();
  }, []);

  const ui = data.map((item, i) => {
    return (
      <>
        { data? <div className="card border my-4 m-auto" style={{ width: "18rem" }}>
          <div className="card-body">
            <img src={"./Images/"+item.image} alt="product" width={"200px"} height={"200px"}/>
            <h5 className="text-start">{item.name}</h5>
            <p className="text-start fw-bold">₹ {item.price}</p>
            <p className="text-end">view details</p>
            <hr />
            <button className="btn border p-2"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Add Cart</button>&nbsp;&nbsp;
            <button className="btn btn-success p-2"><i class="fa-solid fa-bag-shopping"></i>&nbsp;Buy Now</button>
          </div>
        </div> : <p>Loading...</p> }
      </>
    );
  })
  return (
    <>
      {ui}
    </>
  );
};

export default ProductCard;
