//Importando el fileSystem
const fileSystem=require('fs');
let colors=require('colors');

/*Para grabar el resultado de las multiplicaciones en un archivo de texto, entrando
a la documentación de node, usando writefile */

//salto de línea: \n

const crearArchivo=async (num,listar=false,hasta=10)=>{

    try {
        let ac;
        let salida='';

        if(hasta){
            let h=hasta;
            for(let i=1;i<=h;i++){
                ac=i*num;
                // console.log(ac);
                salida=salida+(`${i} ${'x'.blue.bgGreen} ${num} ${'='.red} ${ac}\n`);
            }
        }
        

        if(listar){
            console.log(salida);
        }

    fileSystem.writeFileSync(`./tablas/tabla-${num}.txt`,salida)
        return ('Archivo escrito')
        
    } catch (error) {
        throw error;
    }
}
    // let mult;
    // for(let i=1;i<=10;i++){
    //     for(let j=1;j<=10;j++){
    //         mult=i*j;
    //         console.log(`${i} x ${j} = ${mult}`);
    //     }
    // }

module.exports={
    crearArchivo
}
