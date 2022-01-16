const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {


        let salida, consola = '';
        
        for( let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar) {
            console.log('=============================='.green);
            console.log('       Tabla del:'.green, colors.blue(base));
            console.log('=============================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}


// console.log('==============================');
// console.log('==========Tabla del 5=========');
// console.log('==============================');


// let salida = '';

// for( let i = 1; i <= 10; i++){
//     salida = salida += `${base} x ${i} = ${base * i}\n`;

// }

// \n => salto de linea
// console.log(salida);

// Forma con writefile
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${base}.txt creado`);
// });

// Forma con writefilesync
// La diferencia es que al ser sync, al dar un error hay que atraparlo en un try catch
// fs.writeFileSync(`tabla${base}.txt`, salida);
// console.log(`tabla-${ base }.txt creado`);