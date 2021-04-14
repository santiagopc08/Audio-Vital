const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");
const db = require("./db/db");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", routes);

db.then(() => {
	console.log("Se ha conectado a la base de datos");
});

app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});
//
module.exports = app