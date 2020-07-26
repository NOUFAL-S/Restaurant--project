const express = require("express");
const StoreData = require("./src/model/StoreData");
const User = require("./src/model/user");
const jwt = require("jsonwebtoken");
const cors = require("cors");
var bodyparser = require("body-parser");
var app = new express();
app.use(cors());
app.use(bodyparser.json());

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

app.get("/stores", verifyToken, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  StoreData.find().then(function (stores) {
    res.send(stores);
  });
  // res.send("Hello mongo");
});
app.post("/insert", verifyToken, function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  console.log(req.body);
  var Store = {
    //    StoreId:req.body.Store.StoreId,
    storeName: req.body.store.storeName,
    storeCode: req.body.store.storeCode,
    releaseDate: req.body.store.releaseDate,
    description: req.body.store.description,
    price: req.body.store.price,
    starRating: req.body.store.starRating,
    imageUrl: req.body.store.imageUrl,
  };
  var store = new StoreData(store);
  store.save().then(function (store) {
    res.send(store);
  });
});

app.put("/edit", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  //    console.log(req.body);
  //    Store.findANd(req.body._id,(err,Store)=>{
  //    if(err)
  const id = req.body.store._id;
  //    res.status(500).json({errmsg:err});
  var store = {
    // StoreId:req.body.Store.StoreId,
    storeName: req.body.store.storeName,
    storeCode: req.body.store.storeCode,
    releaseDate: req.body.store.releaseDate,
    description: req.body.store.description,
    price: req.body.store.price,
    starRating: req.body.store.starRating,
    imageUrl: req.body.store.imageUrl,
  };

  console.log(store);
  // var Store = new StoreData(Store);
  // Store.save();

  StoreData.findByIdAndUpdate(id, { $set: store }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error");
    }
  });
});

app.delete("/delete/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  // var id=req.params.id;
  console.log(req.params.id);

  StoreData.findByIdAndDelete(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error");
    }
  });
});

app.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err);
    } else {
      let payload = { subject: user._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });

      // res.status(200).send(registeredUser)
    }
  });
});

app.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      comsole.log(err);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else if (user.password !== userData.password) {
        res.status(401).send("Invalid Password");
      } else {
        let payload = { subject: user._id };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token });

        // res.status(200).send(user)
      }
    }
  });
});

app.listen(3000, function () {
  console.log("listening to the port 3000");
});
