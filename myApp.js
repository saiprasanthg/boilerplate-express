let express = require('express');
let app = express();
var path = require('path');

//console.log("Hello World");
path = __dirname + "/public";
app.use("/public", express.static(path));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});


module.exports = app;
