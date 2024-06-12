import React,{useState, useEffect} from "react";
import axios from "axios";

const Child = () => {
  const [man, setMan] = useState([]);
  useEffect(() => {
    async function getApi() {
      await axios("http://localhost:8000/user").then((result) => {
      let data = result.data.filter((man)=>{
        return "boyCloth" === man.category || "cloth" === man.category;
      });
      setMan(data)
      });
    }
    getApi();
  }, []);

  const manCards = man.map((item, i) => {
    return (
      <>
        { man? <div className="card border my-4 m-auto" style={{ width: "18rem" }}>
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
      <div className="container text-center border">
      <div id="read-data" className="w-100 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {manCards}        
      </div>
      </div>
    </>
  );
};

export default Child;
