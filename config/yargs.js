const opts = {

    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola las taras por realizar')
    .command('crear', 'agrega una en tarea ', opts)
    .command('actializazr', 'Actualiza la tarea como completada', opts)
    .help()
    .argv;

module.exports = {
    argv
}