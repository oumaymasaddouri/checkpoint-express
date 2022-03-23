const express = require("express"); 
const isAuth = require("./middleware/auth");
const app = express();
app.use(isAuth);
app.use(express.static("public"));

 
 app.get("/", (request, response) => {
  console.log(__dirname);
   response.sendFile(__dirname + "/public/index.html");
});
app.get("/services", (request, response) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/public/services.html");
 });
 app.get("/style.css", (request, response) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/public/style.css");
 });

const port = 7000;
app.listen(port, () => console.log("server is running"));
