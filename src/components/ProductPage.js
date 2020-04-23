import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Title from "./Title";
import { storeProducts, detailProduct } from "../data";
import ProductPageElement from "./ProductPageElement";
import Pagination from "./pagination";
import styles from "./ProductPage.module.css";

class ProductPage extends Component {
  state = {
    product: [],
    actualProduct: [],
    loading: false,
    currentPage: 1,
    productsPerPage: 12,
  };
  componentDidMount() {
    this.setState({ loading: true });

    let tempProducts = [];
    storeProducts.forEach((item) => {
      const eachitem = { ...item };
      tempProducts = [...tempProducts, eachitem];
    });

    this.setState({
      actualProduct: tempProducts,
      product: tempProducts,
      loading: false,
    });

    //   finding current page products
  }

  //paginate function when clicked on numbers
  paginate = (pageNumber) => {
    // use arrow functions when passing a function a child so that this can be properly binded
    this.setState(() => {
      return {
        currentPage: pageNumber,
      };
    });
  };

  handleChange(e) {
    this.setState({
      currentPage: 1,
    });

    const newProduct = this.state.actualProduct.filter((product) => {
      if (product.title.includes(e.target.value)) return product;
    });

    this.setState({ product: newProduct }, () => {
      console.log(this.state.product);
    });
  }

  render() {
    const {
      product,

      loading,
      currentPage,
      productsPerPage,
    } = this.state;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = product.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

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
                    this.handleChange(e);
                  }}
                ></input>
              </div>
              <div className="row">
                <ProductPageElement
                  product={currentProduct}
                  loading={loading}
                />
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={product.length}
                  paginate={this.paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;

//------------------------
