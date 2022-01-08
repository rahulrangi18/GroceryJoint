import React,{useEffect} from "react";
import "../pages/HomeStyle.css";
import SearchBox from "../components/header/SearchBox";
import Products from "../components/header/Products";
import Footer from "../components/footer/Footer";
import Navbar from '../components/header/Navbar';
<<<<<<< Updated upstream
// import SellLogin from "../sellPage/SellLogin";
=======
import {useSelector, useDispatch} from 'react-redux';
import { getProducts as listProducts} from '../redux/actions/productAction';
>>>>>>> Stashed changes

const HomePage = () => {
  const {products} = useSelector(state => state.getProducts)
  console.log(products);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <div className="HomePage">
        <Navbar/>
        <div className="startingImg">
          <div className="mainHeading">
            <p style={{ fontSize: "68px" }}>GroceryJoint</p>
            <p style={{ fontSize: "30px" }}>You want it,we got it</p>

            <div>
              <SearchBox />
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        {/* <SellLogin/> */}
=======
        <div> 
        <Products products={products} n={5} />
        </div>
>>>>>>> Stashed changes
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HomePage;
