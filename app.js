const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");
const db = require("./db/db");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", routes);

db.then(() => {
	console.log("Se ha conectado a la base de datos");
});

const server = app.listen(port, () => {
	console.log("El servidor está en:");
	console.log("http://localhost:" + server.address().port);
});
//
module.exports = app