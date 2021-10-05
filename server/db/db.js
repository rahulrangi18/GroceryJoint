import mongoose from 'mongoose';


const db = () => {

    
    const URL = "mongodb+srv://groceryjoint:GroceryJoint@groceryjoint.sjaqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open!')
    }).catch(err => {
        console.log('Ohh No Mongo connection error!!')
        console.log(err);
    })
    
}

export default db;