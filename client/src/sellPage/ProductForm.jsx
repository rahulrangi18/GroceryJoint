import React, { Component,useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormValidator from './FormValidator';
import './ProductForm.css';


class ProductForm extends Component {
    
    constructor() {
        super();
        this.validator = new FormValidator([{
            field: 'full_name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter full name.'
        }, {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter your email address.'
        }, {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Enter valid email address.'
        }, {
            field: 'phone',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter a phone number.'
        }, {
            field: 'phone',
            method: 'matches',
            args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
            validWhen: true,
            message: 'Enter valid phone number.'
        }, {
            field: 'Address',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter the Address.'
        }, {
            field: 'Sname',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter Shop name.'
        }, {
            field: 'Sphone',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter a Phone Number.'
        }, {
            field: 'Sphone',
            method: 'matches',
            args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
            validWhen: true,
            message: 'Enter valid Phone Number.'
        }, {
            field: 'product_name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter Product Name.'
        }, {
            field: 'file',
            method: 'isEmpty',
            validWhen: false,
            message: 'Choose an Image of the product'
        }, {
            field: 'number',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter the quantity of Product'
        }, {
            field: 'Snumber',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter the quantity of Product in Stock'
        }]);
        this.state = {
            full_name: '',
            email: '',
            phone: '',
            Address: '',
            Sname: '',
            Sphone: '',
            product_name: '',
            file: '',
            number: '',
            Snumber: '',
            validation: this.validator.valid(),
        }
        this.submitted = false;
    }
    passwordMatch = (confirmation, state) => (state.password === confirmation)
    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const validation = this.validator.validate(this.state);
        this.setState({
            validation
        });
        this.submitted = true;
        if (validation.isValid) {
            //reaches here if form validates successfully...
        }
    }
    render() {
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        return (
            <div className="mycontainer">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">

                        <form className="registrationForm">

                            <h2 className='title'>Seller form</h2>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="full_name" className="labels">Full Name</label>
                                <input type="string" className="form-control" name="full_name" onChange={this.handleInputChange} /> <span className="help-block">{validation.full_name.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="email" className="labels">Email address</label>
                                <input type="email" className="form-control" name="email" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>

                            <div className={validation.phone.isInvalid && 'has-error'}>
                                <label htmlFor="phone" className="labels">Phone number</label>
                                <input type="phone" className="form-control" name="phone" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="Address" className="labels">Home Address</label>
                                <input type="string" className="form-control" name="Address" onChange={this.handleInputChange} /> <span className="help-block">{validation.Address.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="Address" className="labels">Shop Address</label>
                                <input type="string" className="form-control" name="Address" onChange={this.handleInputChange} /> <span className="help-block">{validation.Address.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="Sname" className="labels">Shop Name</label>
                                <input type="string" className="form-control" name="Sname" onChange={this.handleInputChange} /> <span className="help-block">{validation.Sname.message}</span> </div>

                            <div className={validation.phone.isInvalid && 'has-error'}>
                                <label htmlFor="Sphone" className="labels">Shop Phone number</label>
                                <input type="phone" className="form-control" name="Sphone" onChange={this.handleInputChange} /> <span className="help-block">{validation.Sphone.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="product_name" className="labels">Product Name</label>
                                <input type="string" className="form-control" name="product_name" onChange={this.handleInputChange} /> <span className="help-block">{validation.product_name.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="file" className="labels">Product Image</label>
                                <input type="file" className="image_input" name="file" onChange={this.handleInputChange} /><input type="file" name="file" placeholder="upload here.." onChange={uploadImage}/>
                                    {
                                        loading?(<h3>Loading....</h3>):(<img src={image} style={{width:'300px'}}/>)
                                    } 
                                <span className="help-block">{validation.file.message}</span> 
                            </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="number" className="labels">Quantity</label>
                                <input type="number" className="form-control" name="number" onChange={this.handleInputChange} /> <span className="help-block">{validation.number.message}</span> </div>

                            <div className={validation.email.isInvalid && 'has-error'}>
                                <label htmlFor="Snumber" className="labels">Quantity in Stock</label>
                                <input type="number" className="form-control" name="Snumber" onChange={this.handleInputChange} /> <span className="help-block">{validation.Snumber.message}</span> </div>

                            <button onClick={this.handleFormSubmit} className="btn btn-primary"> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductForm;