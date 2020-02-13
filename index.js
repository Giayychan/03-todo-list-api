const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(4000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running");
  }
});
