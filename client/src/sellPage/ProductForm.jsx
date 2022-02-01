import React, { useState } from "react";

import { productRegistration } from '../service/api'

const initializeValues = {
  full_name: "",
  email: "",
  phone: "",
  homeAddress: "",
  shopAddress: "",
  ShopName: "",
  ShopPhone: "",
  productName: "",
  image_url: "",
  Snumber: "",

}


function Form() {
  const [product, setProduct] = useState(initializeValues);
  const [imgUrl,setImgUrl] = useState('');
  
  const [loading,setLoading]=useState(false)
  const [image,setImage]=useState("")

  const uploadImage= async e=>{
        const files=e.target.files
        const data=new FormData()
        data.append('file',files[0])
        data.append('upload_preset','Products')
        setLoading(true)
        

        const res=await fetch("https://api.cloudinary.com/v1_1/groceryjoint/image/upload",{
            method:'POST',body:data
        })

        const file=await res.json()
        console.log(file)
        
        // product image url file.secure_url
        const img_url = file.secure_url;
        product.image_url= img_url;
       // console.log(img_url)
        setImgUrl({...imgUrl,[imgUrl]:img_url})
        console.log(imgUrl)
        //image_url(img_url)
        setImage(file.secure_url)
        setLoading(false)
    }
  
  const inputsHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };

  // const submitButton = () => {
  //   alert(product.full_name);
  //   uploadImage();
  // };

  const submitButton = async () => {

    console.log(product);
    
    let response = await productRegistration(product);
    console.log(`${product.full_name} has registered`);

  }



  return (
    <div className="mycontainer">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form className="registrationForm" onSubmit={submitButton}>
            <h2 className="title">Seller form</h2>

            <div>
              <label htmlFor="full_name" className="labels">
                Full Name
              </label>
              <input
                type="string"
                className="form-control"
                name="full_name"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div >
              <label htmlFor="email" className="labels">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="phone" className="labels">
                Phone number
              </label>
              <input
                type="phone"
                className="form-control"
                name="phone"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="Address" className="labels">
                Home Address
              </label>
              <input
                type="string"
                className="form-control"
                name="homeAddress"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="Address" className="labels">
                Shop Address
              </label>
              <input
                type="string"
                className="form-control"
                name="shopAddress"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="Sname" className="labels">
                Shop Name
              </label>
              <input
                type="string"
                className="form-control"
                name="ShopName"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="Sphone" className="labels">
                Shop Phone number
              </label>
              <input
                type="phone"
                className="form-control"
                name="ShopPhone"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="product_name" className="labels">
                Product Name
              </label>
              <input
                type="string"
                className="form-control"
                name="productName"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <div>
              <label htmlFor="file" className="labels">
                Product Image
              </label>
              {/* <input
                type="file"
                className="image_input"
                name="file"
                onChange={(e) => inputsHandler(e)}
              /> */}
              <input type="file" className="image_input" name="image_url" onChange={uploadImage}/>
              {
                  loading?(<h3>Loading....</h3>):(<img src={image} style={{width:'300px'}}/>)
              }
              {/* <button type="button" onClick={uploadImage}>
               Upload
              </button> */}
            </div>
            <div >
              <label htmlFor="Snumber" className="labels">
                Quantity in Stock
              </label>
              <input
                type="number"
                className="form-control"
                name="Snumber"
                onChange={(e) => inputsHandler(e)}
              />
            </div>

            <button type="submit"  className="btn btn-primary" >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
