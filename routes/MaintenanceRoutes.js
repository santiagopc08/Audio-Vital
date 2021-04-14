const express = require('express')
const maintenance = require('../controllers/maintenanceController')
const router = express.Router()

//GET
router.get('/mantenimiento',maintenance.listMaintenance)
router.get('/mantenimiento/id', maintenance.listMaintenanceId)

//POST
router.post('/mantenimiento', maintenance.createMaintenance)

//PUT
router.put('/mantenimiento/id',maintenance.addService)
