const express = require("express");
const isAuth = require("./middleware/auth");

const app = express();

let users = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Peter", age: 20 },
];


app.use(express.json()); 
app.use(isAuth);


app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/users", (req, res) => {
  res.send({ msg: "all users", users: users });
});


app.get("/users/:id", (req, res) => {
  
  const user = users.find((el) => el.id == req.params.id);
  if (!user) {
    return res.status(400).send({ msg: "user dont exist" });
  }
  return res.send(user);
});


app.post("/users/post_user", isAuth, (req, res) => {
  const newUser = req.body;
  
  users.push({ ...newUser, id: Date.now() });
  res.send({ msg: "user added", users });
});


app.put("/users/update_user/:id", (req, res) => {
  users = users.map((user) =>
    user.id == req.params.id ? { ...user, ...req.body } : user
  );
  res.send({ msg: "user updated", users });
});

app.delete("/delete_user/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((el) => el.id != id);
  res.send({ msg: "user deleted", users });
});

const port = 5000;

app.listen(port, (err) => {
  err ? console.error(err) : console.log(`server is running on ${port}`);
});
