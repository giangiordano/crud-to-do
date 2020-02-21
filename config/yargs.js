const crearOpts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const actOpt = {

    descripcion: {
        alias: 'd'
    },
    completado: {
        default: true
    }

}

const listaOpt = {

    completado: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento de la lista', crearOpts)
    .command('actualizar', 'Actualiza el elemento de la lista', actOpt)
    .help()
    .argv


module.exports = {
    argv
}