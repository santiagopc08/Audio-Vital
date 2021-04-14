const express = require('express')
const paciente = require('../Controllers/pacienteController.js')

const router = express.Router()

//get
router.get('/pacientes/listar', paciente.traerPacientes)
router.get('/pacientes/gestion/:id', paciente.traerPacientePorCedula)

//post
router.post('/pacientes/gestion', paciente.crearPaciente)
router.post('/pacientes/observaciones/', paciente.agregarObservaciones)
router.post('/pacientes/cambioTelefono/', paciente.cambioTelefono)

//delete
router.delete('/pacientes/gestion/eliminar/:id', paciente.ElminarPaciente)
//

    


module.exports = router