//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var items=["Buy Food", "Cook Food" , "Eat Food"];
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({urlencoded:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

    var today = new Date();
    var options = {
      weekday:"long",
      day:"numeric",
      month:"long"
    };
    var day =today.toLocaleDateString("en-us",options);

    res.render("list", {  kindofday: day , newItems:items});

});

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item );

    res.redirect("/");
});

app.get("/about",function(req, res){
  res.render("about");
})


app.listen(3000, function() {
    console.log("server has started on port 3000");
});
