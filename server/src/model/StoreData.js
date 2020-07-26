const mongoose =require('mongoose');



mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Noufal:Noufal@cluster0.curyp.mongodb.net/restaurant-DB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=>console.log('Database Connectected'))
    .catch((error)=>console.error(error));


 const Schema = mongoose.Schema;
var NewStoreSchema = new Schema({
    // _id:String,
    // StoreId:Number,
    date: { type: Date, default: Date.now },
    storeName:String,
    storeCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String
});

module.exports = mongoose.model('StoreData',NewStoreSchema,'stores');

