import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart"; // we changed the main file in cart folder to be cart.js using package.json inside the cartfolder
import Default from "./components/Default";
import Modal from "./components/Modal";
import AddressForm from "./components/AddressForm";
import ProductPage from "./components/ProductPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={AddressForm} />
        <Route path="/products" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
