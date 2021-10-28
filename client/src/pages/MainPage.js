import React,{useEffect} from "react";
import "../components/Cards.css";
import Products from "../components/header/Products";
import Footer from "../components/footer/Footer";
import Navbar from '../components/header/Navbar';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts as listProducts} from '../redux/actions/productAction';
import { getProducts } from "../service/api";
const MainPage= () => {
  const {product} = useSelector(state => state.getProducts)
  console.log(product);
  // const product = products;
  // console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar /> 
        <div>
          <Products product={product} />
        </div>
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
