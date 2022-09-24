const express = require('express')
const app = express()


//Importando conexion mongoDB
const archivoBD = require('./conexion')

app.get('/', (req,res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo')
})


//Configurando el servidor
app.listen(5000, function(){
    console.log('El nuevo servidor está corriendo correctamente en el puerto 5000')
})