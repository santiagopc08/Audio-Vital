const express = require('express')
const cita = require('../Controllers/citasController.js')

const router = express.Router()

//get
router.get('/citas', cita.traerCitas)
router.get('/citas/:fecha', cita.citasAgendadasPorDia)

//post
router.post('/cita-clinica', cita.crearCita)

module.exports = router