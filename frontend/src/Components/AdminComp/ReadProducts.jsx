import React, { useEffect, useState } from "react";
import axios from "axios";

const ReadProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getApi(){
      await axios("http://localhost:8000/user").then((result) => {
      // console.log(result.data);
      setData(result.data);
    });
    }
    getApi();

  }, []);
  return (
    <>
      <div id="read-data">
        <h2>ADMIN PANEL</h2>
        <table className="table border" style={{maxWidth: "1280px", width: "100%", margin: "20px auto"}}>
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, ind) => {
              return (
              <tr key={ind}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.image}</td>
              </tr>
            );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReadProducts;
