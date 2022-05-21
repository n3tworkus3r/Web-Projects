const express = require("express");
const bodyParser = require("body-parser");
const loader = require("./loader");
const app = express();

// Использование парсера JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(loader);

app.listen(8080, () => console.log("Server is started"));
