const mongoose =require('mongoose');
// mongoose.connect("mongodb+srv://user_hareesh:Charmcaster@mycluster.zfaab.azure.mongodb.net/StoreDb?retryWrites=true&w=majority");


mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Noufal:Noufal@cluster0.curyp.mongodb.net/restaurant-DB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=>console.log('Database Connectected'))
    .catch((error)=>console.error(error));


 const Schema = mongoose.Schema;
var NewStoreSchema = new Schema({
    // _id:String,
    StoreId:Number,
    StoreName:String,
    StoreCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String
});

module.exports = mongoose.model('StoreData',NewStoreSchema,'Stores');

