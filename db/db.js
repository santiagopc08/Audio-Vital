const mongoose = require('mongoose')
require('../models/CitaClinica');
require('../models/Paciente');

const db = mongoose.connect('mongodb+srv://audiovital:audiovital@audiovital.vkrqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//
module.exports = db
