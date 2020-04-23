import React, { useState, useEffect } from "react";
import { ProductConsumer } from "../context";
import Title from "./Title";
import { storeProducts, detailProduct } from "../data";
import ProductPageElement from "./ProductPageElement";
import Pagination from "./pagination";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [actualProduct, setActualProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(12);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let tempProducts = [];
      storeProducts.forEach((item) => {
        const eachitem = { ...item };
        tempProducts = [...tempProducts, eachitem];
      });
      setActualProduct(tempProducts);
      setProduct(tempProducts);
      setLoading(false);
    };
    fetchPosts(); //if we dont write a function , setProduct is async and it renderes the div even before the state is properly updated , leading to an error
  }, []);

  //   finding current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

  //paginate function when clicked on numbers
  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  const handleChange = (e) => {
    setSearchString(e.target.value);
    setCurrentpage(1);
    const newProduct = actualProduct.filter((product) => {
      if (product.title.includes(searchString)) return product;
    });
    setProduct(newProduct);
  };

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div>
            <div className="row">
              <input
                className={styles.searchfield}
                type="text"
                placeholder="search"
                name="search"
                onChange={(e) => {
                  handleChange(e);
                }}
              ></input>
            </div>
            <div className="row">
              <ProductPageElement product={currentProduct} loading={loading} />
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={product.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

//------------------------
