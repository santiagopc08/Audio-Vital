require("../models/CitaReparaciones")

const mongoose = require("mongoose")
const utils = require("../handlers/utils")

const Maintenance = mongoose.model("CitaReparaciones");

mongoose.set("useFindAndModify", false);

// Crear un nuevo mantenimiento
exports.createMaintenance = (req, res) => {
	const maintenance = new Maintenance(req.body);
	maintenance.save((err, maintenance) => {
		utils.show(res, err, maintenance);
	})
}

//retorna una lista con todos los mantenimientos
exports.listMaintenance = (req, res) => {
	Maintenance.find({}).exec(function (err, maintenance) {
		utils.show(res, err, maintenance);
	})
}

//retorna un mantenimiento especifico
exports.listMaintenanceId = (req, res) => {
	let maintenanceId = req.params.id;
	Maintenance.findById(maintenanceId).exec((err, maintenance) => {
		utils.show(res, err, maintenance)
	})
}

//Agrega  un servicio extra con su id
exports.addService = (req, res) => {
	const cedula = {_id: req.body.id};
	let observacion = req.body.observaciones;
	Maintenance.find(cedula).exec((err, result) => {
		if (err) throw err;
		observacion = observacion + " - " + result[0].observaciones;

		Maintenance.findOneAndUpdate(cedula, { observaciones: observacion }).exec(
			(err, result) => {
				utils.show(res, err, result);
			}
		);
	});
};