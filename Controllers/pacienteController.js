require("../models/Paciente");
require("../models/CitaClinica");
require("../models/CitaReparaciones");

const mongoose = require("mongoose");
const utils = require("../handlers/utils");

const Paciente = mongoose.model("Paciente");
const CitaClinica = mongoose.model("CitaClinica");
const CitaReparaciones = mongoose.model("CitaReparaciones");

mongoose.set("useFindAndModify", false);

exports.crearPaciente = (req, res) => {
	const paciente = new Paciente(req.body);
	paciente.save((err, paciente) => {
		utils.show(res, err, paciente);
	});
};

exports.traerPacientes = (req, res) => {
	Paciente.find({}).exec(function (err, paciente) {
		utils.show(res, err, paciente);
	});
};

//

exports.traerPacientePorCedula = (req, res) => {
	let cedulaP = req.params.id;
	Paciente.findById(cedulaP).exec((err, paciente) => {
		utils.show(res, err, paciente);
	});
};


exports.ElminarPaciente = (req,res) => {
    let cedulaP = String(req.params.id);
	

    Paciente.findByIdAndDelete(cedulaP,(err, paciente) => {
        if(paciente == undefined || paciente == null){
            res.status(404).send({mensaje: 'No se encontró el paciente'})
        }else {
            res.status(200).send({mensaje: 'Eliminado correctamente'});
        }
    });
  
};

exports.agregarObservaciones = (req, res) => {
	const cedula = {_id: req.body.id};
	let observacion = req.body.observaciones;
	Paciente.find(cedula).exec((err, result) => {
		if (err) throw err;
		observacion = observacion + " - " + result[0].observaciones;

		Paciente.findOneAndUpdate(cedula, { observaciones: observacion }).exec(
			(err, result) => {
				utils.show(res, err, result);
			}
		);
	});
};

exports.cambioTelefono = (req, res) => {
	const cedula = {_id: req.body.id};
	let observacion = req.body.telefono;
	Paciente.find(cedula).exec((err, result) => {
		if (err) throw err;	

		Paciente.findOneAndUpdate(cedula, { telefono: observacion }).exec(
			(err, result) => {
				utils.show(res, err, result);
			}
		);
	});
};




