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
    .command('actualizar', 'Actualiza la tarea como completada', opts)
    .command('borrar', 'borra la tarea selecionada', opts)
    .help()
    .argv;

module.exports = {
    argv
}