const express = require("express");
const app = express();

const pacienteRoutes = require("./PacienteRoutes");
const maintenanceRoutes = require("./MaintenanceRoutes")

const router = express.Router();

router.use("/", pacienteRoutes);
router.use("/", maintenanceRoutes)
//
module.exports = router;
