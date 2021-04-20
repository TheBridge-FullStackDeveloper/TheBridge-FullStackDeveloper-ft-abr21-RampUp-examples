function probarVariables(){
    console.log("Mi primera ejecución");

    const PI = 3.1416;
    //PI = 50; // reasignar. No se puede con const

    let numero = 2; // valor variable
    console.log(numero);
    numero = 4;
    console.log(numero);

    console.log("Hola, que tal?. Mi número es: "+numero); // String

    let check = false;
    console.log("seleccionado?: "+check);

    let cadena = "esto es un mensaje";

    //Tipos
    console.log(typeof numero); // numero
    console.log(typeof check); //boolean
    console.log(typeof PI);  // numero
    console.log(typeof cadena);// String
}


function probandoIfElse(){

    let pass = prompt("Introduzca password"); // pide por pantalla
    // pass = "hola" -> lo devuelve la función prompt
    if(pass == "1234"){
        console.log("accediendo al sistema");
    }
    else {
        console.log("password incorrecta");
    }

}

function pruebaSemaforoIfElseIf(){
    // rojo, verde, ambar,azul (4 opciones)

    let color = prompt("color semaforo");
    
    if(color == "verde"){
        console.log("acelera! está en verde");
    }
    else if(color == "ambar"){
        console.log("acelera rápido, que cambia!");
    }
    else if(color == "azul"){
        console.log("acelera, pero marcha atrás!");
    }
    else{ // rojo. Opción por defecto
        console.log("frena, que está rojo");
    }
}

function probandoSwitch(){
    // rojo, verde, ambar,azul (4 opciones)
    let color = prompt("introduce color semaforo");

    switch(color){
        case "rojo":
            console.log("frena, que está rojo");
            break;
        case "verde":
            console.log("acelera!");
        case "ambar":
            console.log("acelera rápido, que cambia!");
            break;
        case "azul":
            console.log("acelera, pero marcha atrás!");
            break;

        default:
            console.log("el color no es válido");
    }
}

function probandoOperadores(){
    let age = 40;
    //AND   
    // true && true --> true 
    if(age >= 18 && age < 65 ){
        console.log("A currar!");
    }
    else // <18 o >=65
     console.log("disfruta de momento");

    // carnet joven-- > OR
    // 40 años --> false || false --> false
    //66 años --> false || true --> true
    if(age <= 30 || age >= 65){ // jóvenes o jubilados
        console.log("tienes descuentos carnet joven");
    }
    else{
        console.log("prepara mínimo 54 pavos");
    }

    year = 1995;
    //olimpiadas de barcelona(1992),sidney(2000),londres(2008)
    if(year%4==0 && (year==1992|| year ==2000 || year==2008)){
        console.log("Tenemos olimpiadas!!");
    }
    else{
        console.log("no es bisiesto o no hay olimpiadas registrada");
    }
}

function bisiesto(year){

    if(year%4==0 &&(year%100!=0 || year%400==0)){
        console.log("es bisiesto"+year)
        return true;
    }
    else{
        console.log("no es bisiesto"+year)
        return false;
    }
}

function suma(a,b){
    let resultado = a+b;
    return resultado;// devuelve la suma
}

function probandoFor(){
    //iteraciones:10
    for(i=0;i<10;i++){
        console.log("El numero es:"+i);
    }
}
// Pepe -> length = 4 --> itera de 0...3
// 0123
function recorrerCadena(frase){
    // Itera de 0 a length-1 posiciones
    for(let i=0;i<frase.length;i++){
        console.log("la letra es:"+frase[i]);
    }
}

function probandoWhile(year){
   
    while(year < 2025){

        if(year == 2020){
            year++;
            continue;
        }

        console.log("El anyo es:"+year); // el último es 2022
        
        if(year == 2022){
            break;
        }
        year++; //Condicion de incremento/decremento
    }
}

function probandoDoWhile(year){
    // Se ejecuta al menos UNA VEZ
    do{
        console.log("El anyo es:"+year); 
        year++;
    }while(year<2021);
}

function probandoArray(){
    let lista = ["patatas","zumo","queso","tomate"];
    console.log(lista);
    console.log("el elemento es: "+lista[1]); // queso
    //console.log(lista.sort()); // ordenar
    console.log(lista[lista.length-1]) // me da el elemento N-1
    
    // Añadir
    lista.push("pasta"); // añade elemento (al final)
    console.log(lista);
    lista.splice(1,0,"jamon"); // añade en pos 1. Borra 0 elementos
    console.log(lista);
    
    // Borrar
    lista.pop(); // elimina el ultimo
    console.log(lista); 

    delete lista[0]; // elimina el de la primera pos. Deja un espacio reservado
    console.log(lista); 

    lista.splice(2,1); // En posicion 2 borra 1 elemento
    console.log(lista); 

    let verduras = ["ajo","cebolla","perejil"];
    console.log(verduras.concat(lista));

    verduras = verduras.concat(lista); // concatenar dos arrays
    console.log(verduras);

    // de Array a string con separador --> JOIN
    console.log(typeof verduras.join("-"));// convierte el array en una cadena
    console.log(verduras.join("-"));

    // de String a Array --> SPLIT
    let cadenaVerso = "Oh brave new world that has such people in it.";
    console.log(cadenaVerso.split(" "));

    
    for(let i=0;i<lista.length;i++){
        console.log("el producto es: "+lista[i]);
    }
}


// --> Sección de ejecución. LLAMADAS a las funciones <--
// probarVariables();
// probandoIfElse();
// pruebaSemaforoIfElseIf();
// probandoSwitch()
// probandoOperadores()

// bisiesto(1992)
// console.log("la suma es: "+suma(2,2))

// probandoFor()
// recorrerCadena("Pepe")
// probandoWhile(2015);
// probandoDoWhile(3015); // se ejecuta una vez
// probandoArray()




















