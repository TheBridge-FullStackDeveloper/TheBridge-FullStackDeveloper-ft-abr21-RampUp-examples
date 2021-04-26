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



//Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array.
//Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30] --> num*i --> 3*i

function calculaTabla(num){

    let tabla = []; // Inicializar a array vacío

    for(let i=1;i<=10;i++){// i varía desde 1...10
        tabla.push(num*i); // Meter valor al array
    }
    return tabla; // devolver resultado
}
/* 
calculaTabla(3); // se ejecuta pero no se ve
console.log("******");
console.log(calculaTabla(3));
console.log("******");


let res = calculaTabla(5); //almacenar valor devuelto en variable
console.log(res);
console.log("tabla del 5:"+ res); */

// let numero = parseInt(prompt("introduce número"));
// console.log(calculaTabla(numero));


// Crea una función que pida números por teclado (prompt) y mételos en un array. Cuando el usuario meta un 0, dejaremos de insertar(habrá que usar un bucle que pregunte constantemente). Por último, ordena los números ordenados de menor a mayor y devuelve el array. Prompt() devuelve un string. hay que convertirlo a entero con parseInt()

function insertarNumero(){

    let numeros = [];
    let num = 1;
    
    while(num!=0){
        num = parseInt(prompt("introduce número"));
        if(num !== 0){
            numeros.push(num);
        }
    }
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return numeros.sort(function(a, b) {
        return a - b;
      }); // array de número devueltos, ordenados
}

// console.log(insertarNumero());

// Objetos --> conjunto de pares clave-valor (key-value)
// Objeto JSON 
// Objeto NO iterable. No tiene posiciones

let coche = {
                marca: "Peugeot",
                modelo: "Partner",
                color: "rojo",
                combustible:"diesel",
                peso: 1500,
                velocidad: 0,
                acelerar: function(incremento){
                    this.velocidad += incremento;
                    
                    console.log(`acelerando. Incrementando: ${incremento} km/h. Nueva velocidad: ${this.velocidad} km/h`);
                },
                girar: function(direccion){
                    console.log(`Girando hacia la: ${direccion}`);
                },
                pintarCoche: function(nuevoColor){
                    this.color = nuevoColor;
                }
            }; 
/* 
// Desde fuera del objeto
console.log(coche);

coche.color = "verde";
console.log(coche.color);
// acceder a datos
console.log(coche.modelo);
console.log(coche["modelo"]);
coche.acelerar(30); // invoca la función
coche.acelerar(10); // invoca la función 40
coche.acelerar(30); // invoca la función  km/h

coche.girar("izquierda");
coche.girar("derecha");

coche.pintarCoche("azul");
console.log(`El nuevo color es: ${coche.color}`); */


// DOM

document.getElementById("boton1").addEventListener("click", function(){
    //alert("Cambiando texto");
    // cambios en el parrafo
    let p = document.getElementById("cambio");
    p.innerHTML = "mensaje cambiado";
    p.style.backgroundColor = "blue";
    p.style.color = "yellow";
    
    // cambios en el body
    document.body.style.backgroundColor = "aqua";

    // cambiar estilo boton
    let boton = document.getElementById("boton1"); 

    // if(boton.className == "amarillo"){
    //     boton.className = "rojo";
    // }else{
    //     boton.className = "amarillo";
    // }
    boton.classList.toggle("rojo"); // intercambia amarillo por rojo
   
})


document.getElementById("cambio2").addEventListener("mouseover", function(){ // Funcion de callback, que es también anonima
    let p = document.getElementById("cambio2");
    p.innerHTML = "Tachán!";
    p.style.backgroundColor = "blue";
    p.style.color = "yellow";
})




function restablecerColores(){
 
    let p = document.getElementById("cambio2");
    p.innerHTML = "Pasa por encima :) ";
    p.style.backgroundColor = "white";
    p.style.color = "black";
}


document.getElementById("cambio2").addEventListener("mouseout", restablecerColores);


// Más selectores

let parrafo1 = document.getElementsByTagName("p")[0].innerHTML;
let parrafo2 = document.getElementsByTagName("p")[1].innerHTML;
console.log("parrafos"+parrafo1 + parrafo2);


let parrafos = document.getElementsByTagName("p"); // devuelve TODOS los parrafos
for(let i=0;i<parrafos.length;i++){
    console.log(parrafos[i].innerHTML);
}

// Accediendo a links

let links = document.getElementsByTagName("a"); 
for(let i=0;i<links.length;i++){
    console.log(links[i].href);
}

// ClassName
let li1 = document.getElementsByClassName("clase1");
for(let i=0;i<li1.length;i++){
    console.log(li1[i]);
}


let li2 = document.getElementsByClassName("clase2");
for(let i=0;i<li2.length;i++){
    console.log(li2[i]);
}

// Query Selector (devuelve 1)
let elemento = document.querySelector(".clase1");
console.log(elemento);

// Query SelectorAll (devuelve todo)
console.log("***QuerySelectorAll****")
let lista1 = document.querySelectorAll(".clase1");
console.log(lista1);

console.log(lista1[0].innerText);// Devuelve uno solo


for(let i=0;i<lista1.length;i++){
    console.log(lista1[i].innerText);
}


let lista2 = document.querySelectorAll(".clase2 > a");
console.log(lista2[0].href);


// pruebas con selectores
console.log(document.getElementById('miId1').innerText) // uno
console.log(document.querySelector('#miDiv .miClase').innerText) // cinco
console.log(document.querySelector('#miDiv #miId1.miClase').innerText) // uno

console.log(document.querySelectorAll("#miDiv .miClase"));


// Crear nuevos elementos
let p1 = document.createElement("p"); 
let txt1 = document.createTextNode("Párrafo Creado desde JS");
p1.appendChild(txt1); // une p1 --> txt1

//document.body.appendChild(p1); // une body --> p1
document.getElementById("contenido").appendChild(p1);// une #contenido --> p1

// Borrar un elemento
document.getElementById("boton2").addEventListener("click",function(){
    document.getElementById("miId2").remove();
})

// Modificar un elemento
document.getElementById("boton3").addEventListener("click",function(){
    //document.getElementById("miId2").remove();
    let span1 = document.createElement("span");
    // Añadir atributos
    span1.setAttribute("id","miId50");
    span1.setAttribute("class","miClaseBuena");
    span1.setAttribute("title","tres");

    let txt = document.createTextNode("WWWWWW");
    span1.appendChild(txt); // span1-->txt

    
    let padre = document.getElementById("miDiv"); // div padre
    let hijo = document.getElementById("miId1"); // span a cambiar
    padre.replaceChild(span1,hijo); // reemplaza span1 por hijo

})







































