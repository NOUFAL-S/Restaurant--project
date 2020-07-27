export class StoreModel {
  constructor(
    // public _id:String,
    // public storeId:Number,
    public date: { type: Date },
    public storeName: String,
    public storePlace: String,
    public storeCode: String,
    public releaseDate: String,
    public description: String,
    public price: String,
    public starRating: Number,
    public imageUrl: String
  ) {}
}

//for the storemodel we are creating the schema/Template
