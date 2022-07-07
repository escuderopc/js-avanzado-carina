const fs = require('fs');

const fileName = 'my-file.txt';
const textContent = 'Este texto lo escribi desde node';
fs.writeFile(fileName, textContent, (err) => {
    if (err){
        throw err;
    }else{
        console.log('Archivo creado con exito!');
    }
});

