const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Noufal:Noufal@cluster0.curyp.mongodb.net/restaurant-DB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=>console.log('Database Connectected'))
    .catch((error)=>console.error(error));



const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    password:String
})
module.exports=mongoose.model('user',userSchema,'users');