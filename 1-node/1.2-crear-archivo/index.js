const fs = require('fs');

//code runner - se ejecuta en la raiz del proyecto
const fileName = './js-avanzado-carina/1-node/1.2-crear-archivo/my-file.txt';
// con la terminal normal 
//const fileName = 'my-file.txt'
const textContent = 'Este texto lo escribi desde node';
fs.writeFile(fileName, textContent, (err) => {
    if (err){
        throw err;
    }else{
        console.log('Archivo creado con exito!');
    }
});

