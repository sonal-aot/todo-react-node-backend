const express = require("express");
const router = require("./Route/router");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};  


app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("====================================");
  console.log("Server is Running.......");
  console.log("====================================");
});
