const express = require("express");
const Router = express.Router();
const {myProducts,mySpecialProducts} = require("../controlers/myproducts")

Router.route("/").get(myProducts);
Router.route("/special").get(mySpecialProducts);

module.exports = Router;