import { useState } from "react";
import axios from "axios";

const CreateProducts = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    console.log(formData)
    
    try {
      await axios.post("http://localhost:8000/user", formData)
        alert("Data uploaded");
        // console.log(resp)
    } catch (error) {
      console.log('Error uploading data:', error);
    }

  };
  return (
  <>
      <div id="admin">

        <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data" >
        <h3>Create Product By Admin</h3>

        <label>Enter Product Name</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" />
        <br /><br />

        <label>Enter Catagory</label>
        <input type="text" onChange={(e)=>{setCategory(e.target.value)}} name="category" />
        <br /><br />

        <label>Enter product Price</label>
        <input type="number" onChange={(e)=>{setPrice(e.target.value)}} name="price" />
        <br /><br />

        <label>Image</label>
        <input type="file" name="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
        <br /><br />

        <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" />
        <label label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>

        <input type="submit" className="btn btn-primary" />
        
        </form>
        
      </div>
      </>
      );
};

export default CreateProducts;
