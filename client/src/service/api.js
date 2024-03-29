import axios from 'axios';

const url='http://172.28.0.150:6060'


export const authenticateSignup = async (user)=>{
    try{
        return await axios.post(`${url}/signup`,user)
    }catch (error){
        console.log('error while calling api')

    }

}

export const authenticateSellerSignup = async (user)=>{
    try{
        return await axios.post(`${url}/SellerSign`,user)
    }catch (error){
        console.log('error while calling api')

    }

}

export const authenticateSellerLogin = async (user)=>{
    try{
        return await axios.post(`${url}/SellerLogin`,user)
    }catch (error){
        console.log('error while calling api')

    }

}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`,user);
    } catch (error) {
        console.log('error while calling log in api');
    }
}

export const getProducts = async() => {
    try {
        return await axios.get(`${url}/products`);
    } catch (error) {
        console.log('error while calling product api')
    }
}



export const productRegistration = async (product)=>{
    try{
        // console.log('welcome store product')
        return await axios.post(`${url}/newProduct`,product)
    }catch (error){
        console.log('error while calling api')

    }

}