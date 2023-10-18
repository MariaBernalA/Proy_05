require('colors')

const main= async() =>{
    console.clear();
    let nombres= ('Maria Camila');
    let apellidos= ('Bernal');
    let nombrecompleto = nombres[0].toUpperCase() + nombres.substring(1).toLocaleLowerCase() + ' ' + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase();
    console.log('::::::::::::::::::::::::::'.bgGreen);
    console.log(':::'.bgGreen + 'NOMBRE ORGANIZADO'.bgBlack + '::::::'.bgGreen);
    console.log('::::::::::::::::::::::::::'.bgGreen)
    
    for(let i= nombrecompleto.length; i > 0; i--) {
        console.log (':::'.bgBlue + ' '.bgBlack + nombrecompleto.substring(0, i) + ':::'.bgBlue);
    }
    for(let i = 1; i<= nombrecompleto.length; i++){
        console.log (':::'.bgBlue + i + ' '.bgBlack + nombrecompleto.substring(0, i).bgBlack + ':::'.bgBlue);
    }
    
    console.log(':::::::::::::::::::::::::'.bgGreen);
    console.log(':::'.bgGreen + nombres.toUpperCase().bgCyan+' '.bgCyan+apellidos.toUpperCase().bgCyan + ':::'.bgGreen);
    console.log(':::'.bgGreen + nombrecompleto.bgCyan + ':::'.bgGreen);
    console.log(':::'.bgGreen + nombres.toLowerCase().bgCyan+' '.bgCyan+apellidos.toLowerCase().bgCyan + ':::'.bgGreen);
    console.log(':::::::::::::::::::::::::'.bgGreen);
}

main();