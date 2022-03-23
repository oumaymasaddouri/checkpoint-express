
const isAuth = (req, res, next) => {
  let auth = true;
  if (auth) {
    console.log("authorised");
    next();
  } else {
    res.status(401).send("you are not authorised");
  }
};

module.exports = isAuth;
