import React from "react";
import ReactDOM from "react-dom";
import { Link, link } from 'react-router-dom';

function Card(props) {
  return (
    <>
      <Link to='/ItemDetails'>
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img" />
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
              {/* <Link to='/cart'> */}
              <button>Add to Cart</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
