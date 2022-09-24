const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objectobd = mongoose.connection

objectobd.on('connected', () => {
    console.log('Correcta conexion a Mongodb')
})

objectobd.on('error', () => {
    console.log('Error en la conexion a Mongodb')
})

module.exports = mongoose