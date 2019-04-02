const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarData = () => {

    let dataJson = JSON.stringify(listadoPorHacer);

    const data = new Uint8Array(Buffer.from(dataJson));
    fs.writeFile(`data/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar'.red, err);

    });
}

const cargaData = () => {

    try {
        listadoPorHacer = require('../data/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }


}

const getListado = () => {

    cargaData();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargaData();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion === descripcion)


    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarData();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargaData();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);


    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarData();
        return true;
    }


}

const crear = (descripcion) => {

    cargaData();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarData();

    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}