require('colors')//Se importa el módulo 'colors' para agregar color

const main= async() =>{//Se declara la función main con la palabra clave async, lo que significa que puede contener operaciones asíncronas
    console.clear();//Se utiliza console.clear() para limpiar la consola
    let nombres= ('Maria Camila');//Se definen las variables nombres y apellidos 
    let apellidos= ('Bernal');
    let nombrecompleto = nombres[0].toUpperCase() + nombres.substring(1).toLocaleLowerCase() + ' ' + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase();
    //e crea la variable nombrecompleto uniendo las partes de los nombres y apellidos con formato de mayúscula inicial y minúsculas para el resto.
    console.log('::::::::::::::::::::::::::'.bgGreen);
    console.log(':::'.bgGreen + 'NOMBRE ORGANIZADO'.bgBlack + '::::::'.bgGreen);
    console.log('::::::::::::::::::::::::::'.bgGreen)
    
    for(let i= nombrecompleto.length; i > 0; i--) {
        console.log (':::'.bgBlue + ' '.bgBlack + nombrecompleto.substring(0, i) + ':::'.bgBlue);
    }
    for(let i = 1; i<= nombrecompleto.length; i++){
        console.log (':::'.bgBlue + i + ' '.bgBlack + nombrecompleto.substring(0, i).bgBlack + ':::'.bgBlue);
    }
    //Se utilizan dos bucles for para imprimir el nombre organizado
    
    console.log(':::::::::::::::::::::::::'.bgGreen);
    console.log(':::'.bgGreen + nombres.toUpperCase().bgCyan+' '.bgCyan+apellidos.toUpperCase().bgCyan + ':::'.bgGreen);
    console.log(':::'.bgGreen + nombrecompleto.bgCyan + ':::'.bgGreen);
    console.log(':::'.bgGreen + nombres.toLowerCase().bgCyan+' '.bgCyan+apellidos.toLowerCase().bgCyan + ':::'.bgGreen);
    console.log(':::::::::::::::::::::::::'.bgGreen);
}

main();//se cierra main para ejecutar lo que hay en ella