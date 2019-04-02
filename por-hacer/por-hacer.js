const fs = require('fs');

let listadoPorHacer = [];

const guardarData = () => {

    let dataJson = JSON.stringify(listadoPorHacer);

    const data = new Uint8Array(Buffer.from(dataJson));
    fs.writeFile(`data/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);

    });
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarData();

    return porHacer;
}

module.exports = {
    crear
}