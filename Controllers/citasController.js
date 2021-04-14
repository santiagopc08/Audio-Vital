require('../models/CitaClinica')
require('../models/Paciente')

const mongoose = require('mongoose')
const utils = require('../handlers/utils')
const CitaClinica = mongoose.model('CitaClinica')
const Paciente = mongoose.model('Paciente')

exports.crearCita = (req, res) => {
    const cedula = req.body.cedula
    const fechaP = req.body.fecha
    const horaP = req.body.hora
    const cita = new CitaClinica(req.body)

    Paciente.findById(cedula).exec((err, paciente) => {
        if (paciente == undefined || paciente == null) {
            res.status(201).send({
                message: 'No se ha encontrado al paciente, no está registrado'
            })
        } else {
            CitaClinica.find({hora: horaP, fecha: fechaP }).exec((e, citas) => {
                if (err) {
                    return res.status(500).send({ message: 'Ocurrio un error en el server', error: e })
                }
                if (citas.length > 0) {
                    res.status(200).send({ message: 'No hay cita disponible a esa hora' })
                } else {
                    cita.save((err, cita) => {
                        res.status(200).send({message: 'Cita creada exitosamente'})
                        //utils.show(res, err, cita)
                    })
                }
            })
        }
    })
}

exports.traerCitas = (req, res) => {
    // let hora = new Date().getHours()
    // let horaLocal = new Date().toLocaleTimeString()
    // console.log(hora)
    // console.log(horaLocal)
    CitaClinica.find().exec(function (err, cita) {
        utils.show(res, err, cita)
    })
}

//Citas agendadas por día
exports.citasAgendadasPorDia = (req, res) => {
    //La fecha tiene formato d/m/yyyy
    let fechaP = req.params.fecha

    CitaClinica.find({fecha: fechaP}).exec((err, result) => {
        if(err) throw err
        
        let horas = []
        for (let i = 0; i < result.length; i++) {
            horas.push(result[i].hora)
        }

        res.status(200).send({horas: horas})
    })
}