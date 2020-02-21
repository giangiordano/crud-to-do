const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw err;
        else
            console.log('El archivo fue salvado con exito!');
    });

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const listar = () => {

    cargarDB();

    for (const tarea of listadoPorHacer) {

        console.log('===========================')
        console.log(tarea.descripcion);
        console.log(tarea.completado);
        console.log('===========================')
    }

}


cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {

        listadoPorHacer = [];
    }

}

module.exports = {
    crear,
    listar
}