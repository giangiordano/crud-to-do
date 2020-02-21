const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./to-do/to-do');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        porHacer.listar();
        break;

    case 'actualizar':
        console.log('actualizar las tareas que debemos hacer');
        break;

    default:
        break;
}