const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// match GET localhost:4000/
app.get("/", (req, res)=>{
  res.send("Sawasdee");
});

app.listen(port, () => {
  console.log("App started at port: " + port);
});