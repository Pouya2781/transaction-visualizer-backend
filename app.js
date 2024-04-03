var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var accountsRouter = require("./routes/accounts");
var app = express();
const cors = require("cors");

app.use(express.json());

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
let corsOptions = {
  origin: ["http://localhost:4200"],
};

app.use(cors(corsOptions));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/accounts", accountsRouter);

// module.exports = app;

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
