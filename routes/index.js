const express = require("express");
const app = express();

const pacienteRoutes = require("./PacienteRoutes");
const citasRoutes = require("./citasRoutes");

const router = express.Router();

router.use("/", pacienteRoutes);
router.use("/", citasRoutes);
//
module.exports = router;
