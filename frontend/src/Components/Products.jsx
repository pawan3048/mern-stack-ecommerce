import ProductCard from "./UserComp/ProductCard.jsx";
import "./Products.css";

const Products = () => {

  return (
    <>
      <div className="container text-center border">
      <div id="read-data" className="w-100 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {/* <h2>All Products</h2> */}
        <ProductCard/>
      </div>
      </div>
    </>
  );
}

export default Products;
