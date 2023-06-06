"use strict"

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController  = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose")
  ;
  
  mongoose.connect(
  'mongodb+srv://Fahad0117:Homies1246..@cluster0.obzag.mongodb.net/pets_db?retryWrites=true&w=majority', 
   {  useNewUrlParser: true , useUnifiedTopology: true  }
  );

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(homeController.logRequestPaths);


app.get("/", (req, res ) => {
    res.render("index");
});
app.get("/aboutus", homeController.showAboutUs);
app.get("/health",  homeController.showHealth);
app.get("/training",  homeController.showTraining);
app.get("/toys",  homeController.showToys);
app.get("/contact", subscribersController.getSubscriptionPage);
app.get("/rating",  homeController.showRating);
app.get("/subscribers", subscribersController.getAllSubscribers);
app.post("/subscribe", subscribersController.saveSubscriber);


app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
