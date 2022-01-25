const express = require("express");
const app = express();
const ejs = require("ejs");
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.get("/",function(req,res){
  // res.sendFile(__dirname +"/index.html");
  res.render("index");
})
app.post("/",function(req,res){
  var link = req.body.link;
  if(link.includes('https://youtu.be')){
    var final = link.slice(17);
    var visit = "https://www.youmagictube.com/watch?v="+final;
  }
  else if (link.includes('https://m.youtube')) {
    var final = link.slice(13);
    var visit = "https://www.youmagic"+final;
  }
  else{
    var final = link.slice(15);
    var visit = "https://www.youmagic"+final;
  }

  res.redirect(visit);
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(){
  console.log("server started");
});
