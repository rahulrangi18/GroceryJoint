import React, { useState } from "react";



const initializeValues = {
  full_name: "",
  email: "",
  phone: "",
  homeAddress: "",
  shopAddress: "",
  ShopName: "",
  ShopPhone: "",
  productName: "",
  file: "",
  Qnumber: "",
  Snumber: "",

}


function Form() {
  const [product, setProduct] = useState(initializeValues);
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'Products')
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/groceryjoint/image/upload", {
      method: 'POST', body: data
    })

    const file = await res.json()
    console.log(file)
    setImage(file.secure_url)
    setLoading(false)
  }
  const inputsHandler = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };

  const submitButton = () => {
    alert(product.full_name);
    uploadImage();
  };

  return (
    <div className="mycontainer">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form className="registrationForm">
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
              <input
                type="file"
                className="image_input"
                name="file"
                onChange={(e) => inputsHandler(e)}
              />
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

            <button className="btn btn-primary" onClick={submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
