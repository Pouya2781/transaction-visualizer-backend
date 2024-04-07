var express = require("express");
var router = express.Router();
const fs = require("fs");

let transactionData = [];
let accountsData = [];

fs.readFile("transactions_truncated.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  transactionData = JSON.parse(data);
});

fs.readFile("accounts.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  accountsData = JSON.parse(data);
});

// for (let transaction of transactionData) {
//   let source =
//     accountsData[Math.floor(Math.random() * accountsData.length)].accountId;
//   let dest =
//     accountsData[Math.floor(Math.random() * accountsData.length)].accountId;
//   while (source == dest) {
//     dest =
//       accountsData[Math.floor(Math.random() * accountsData.length)].accountId;
//   }
//   transaction.sourceAccountId = source;
//   transaction.destinationAccountId = dest;
// }

// const data = JSON.stringify(accountsData);

// fs.writeFile("accounts.txt", data, (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("Data has been written to file.");
// });

/* GET home page. */
router.get("/", function (req, res, next) {
  const accountId = req.query["id"];
  console.log(accountsData.find((x) => x.accountId == accountId));
  res.send(accountsData.find((x) => x.accountId == accountId));
});

router.post("/incoming", function (req, res, next) {
  const accountId = req.body["id"];
  console.log(req.body);

  res.send(transactionData.filter((x) => x.destinationAccountId == accountId));
});

router.post("/outgoing", function (req, res, next) {
  const accountId = req.body["id"];
  console.log(req.body);

  res.send(transactionData.filter((x) => x.sourceAccountId == accountId));
});

module.exports = router;
