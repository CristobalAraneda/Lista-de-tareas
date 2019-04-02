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
    getListado
}