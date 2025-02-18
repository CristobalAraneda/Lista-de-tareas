const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listadeTareas = porHacer.getListado();

        for (let tarea of listadeTareas) {
            console.log('======================'.white);
            console.log('Tarea:'.white, `${tarea.descripcion}`.cyan);
            console.log('Estado:'.white, `${tarea.completado}`.cyan);
            console.log('======================='.white);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido');
}