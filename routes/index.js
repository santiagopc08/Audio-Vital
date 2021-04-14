const express = require("express");
const app = express();

const pacienteRoutes = require("./PacienteRoutes");

const router = express.Router();

router.use("/", pacienteRoutes);
//
module.exports = router;
