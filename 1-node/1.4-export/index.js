const operations = require('./functions');

function main() {
    let numero1 = 10;
    let numero2 = 40;
    console.log('suma: ', operations.sum(numero1, numero2));
    console.log('division: ', operations.divide(numero1, numero2));
    console.log('resta: ', operations.substract(numero1, numero2));
    console.log('multiplicacion: ', operations.multiply(numero1, numero2));
}

main();