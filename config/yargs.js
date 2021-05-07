const argv=require('yargs')
.option('n',{//Se pueden crear varias opciones que se podrán recibir en la terminal
    alias:'num',
    type:'number',
    demandOption:true,//Hace obligatorio introducir el num para hacer la tabla
    describe:'Número para crear la tabla de multiplicar'
})
.option('l',{//mandarlo también como argumento como argv.l o argv.listar y recibirlo
    //en la f de multiplicar.js
    //node app -n 7 -l : imprime la tabla, si no se manda la l, no la imprime
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'l: para listar la tabla, si no, sólo crearla'
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'h: indica hasta dónde llegará la tabla'
})
.check((argv,option)=>{//pregunta si el número introducido es NotANumber
    if(isNaN(argv.n)){
        throw 'Se debe introducir un número'
    }
    return true;
}).argv;

module.exports={
    argv
}