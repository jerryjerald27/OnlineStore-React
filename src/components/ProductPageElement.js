import React from "react";
import Product from "./Product";

const ProductPageElement = ({ product, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div>
            <div className="row">
              {product.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPageElement;

// <ul className="list-group mb4">
// {product.map((product) => (
//   <li key={product.id} className="list-group-item">
//     {product.title}
//   </li>
// ))}
// </ul>
