import React, { useState } from "react";


function Form() {
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    gmail: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitButton = () => {
    alert(inputField.first_name);
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
              />
            </div>

            <div>
              <label htmlFor="Address" className="labels">
                Home Address
              </label>
              <input
                type="string"
                className="form-control"
                name="Address"
              />
            </div>

            <div>
              <label htmlFor="Address" className="labels">
                Shop Address
              </label>
              <input
                type="string"
                className="form-control"
                name="Address"
              />
            </div>

            <div>
              <label htmlFor="Sname" className="labels">
                Shop Name
              </label>
              <input
                type="string"
                className="form-control"
                name="Sname"
              />
            </div>

            <div>
              <label htmlFor="Sphone" className="labels">
                Shop Phone number
              </label>
              <input
                type="phone"
                className="form-control"
                name="Sphone"
              />
            </div>

            <div>
              <label htmlFor="product_name" className="labels">
                Product Name
              </label>
              <input
                type="string"
                className="form-control"
                name="product_name"
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
              />
            </div>

            <div>
              <label htmlFor="number" className="labels">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                name="number"
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
              />
            </div>

            <button  className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
