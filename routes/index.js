const express = require("express");
const app = express();

const pacienteRoutes = require("./PacienteRoutes");
const maintenanceRoutes = require("./MaintenanceRoutes")
const citasRoutes = require("./citasRoutes")

const router = express.Router();

router.use("/", pacienteRoutes);
router.use("/", citasRoutes);
//
module.exports = router;
