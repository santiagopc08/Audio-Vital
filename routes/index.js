const express = require("express");
const app = express();

const pacienteRoutes = require("./PacienteRoutes");


// Root route of express app
app.get("/", (req, res) => {
    res.send("default route");
  });

const router = express.Router();

router.use("/", pacienteRoutes);
//
module.exports = router;
