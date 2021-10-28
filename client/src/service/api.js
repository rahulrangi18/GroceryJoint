import axios from 'axios';

const url='http://localhost:5000'


export const authenticateSignup = async (user)=>{
    try{
        return await axios.post(`${url}/signup`,user)
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