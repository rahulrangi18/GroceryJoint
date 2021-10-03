import axios from 'axios';

const url='http://localhost:5000'


export const authenticateSignup = async (user)=>{
    try{
        return await axios.post(`${url}/signup`,user)
    }catch (error){
        console.log('error while calling api')

    }

}