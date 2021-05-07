const {argv}=require('./config/yargs');
let colors=require('colors');

const {crearArchivo} =require('./helpers/multiplicar');

console.clear();//Para que la consola se limpie antes de lanzar el programa

// const num=6;

//Argumentos que vienen de la consola
// console.log(process.argv);//este es un arreglo
//Monstrando en argv de yargs
// console.log(argv);//este es un objeto
//Extrayendo la base
// console.log(`La base en Yargs es: ${argv.num}`);

// En la consola aparece como un arreglo: 1-Path de donde está instalado node
// 2-Donde está alojada nuestra app 3-lo que le mandamos como "num"
//Extrayendo el num. Si no se le manda base aparece undefined
// //node app --num=13
// //por si no se le manda un número, el valor por defecto será 12
// const [,,arg3='num=12']=process.argv;
// console.log(arg3);
// // //Extrayendo el valor. Se extrae de arg3, obteniendo, gracias al split dos valores separados
// // //por el =. Éste será el nuevo valor de la var num
// const [,num]=arg3.split('=');
// console.log(num);

console.log('Sebastian'.magenta.bgCyan.bold);
crearArchivo(argv.num,argv.l,argv.h)
.then(respuesta=>{
    console.log('Archivo creado'.rainbow)
})
.catch(err=>console.log(err));

// node app --limite=20 --num=11
// node --help