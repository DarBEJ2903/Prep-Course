// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  i = array.length;
  return array[i - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i< array.length ; i++){
    if(Number.isInteger(array[i])){
      array[i] = array[i] + 1;
    }
    else{
      return "Error";
    }
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento)
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena = "";
  for (var i = 0; i < palabras.length; i++ ){
    if (i != palabras.length-1){
      cadena = cadena + palabras[i] + " ";
    }
    else{
      cadena = cadena + palabras[i];
    }
    
  }
  
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++ ){
    if(array[i] === elemento){
      return true
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumatoria = 0;
  for (var i = 0;i<numeros.length;i++){
    if(Number.isInteger(numeros[i])){
      sumatoria = sumatoria + numeros[i];
    }
    else {
      return "La matriz no es de enteros";
    }
  }
  return sumatoria;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  for (var i = 0; i < resultadosTest.length; i ++){
    if(Number.isInteger(resultadosTest[i])){
      promedio = promedio + resultadosTest[i];
    }
    else {

    }
  }
  promedio = promedio / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto = 1;
  if (arguments.length ===  0){
    return 0;
  }
  else if(arguments.length ===  1){
    return arguments[0];
  }
  else{
    for (var i = 0;i < arguments.length;i++){
        producto = producto * arguments[i];
    }
  }
  return producto;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (var i = 0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      contador = contador + 1;
    }
    else{}
  }
  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"] 
  if((dias[numeroDeDia-1]=="Domingo")||(dias[numeroDeDia-1]=="Sabado")){
    return "Es fin de semana";
  }
  else{
    return "Es dia Laboral";
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (Number.isInteger(n)){
    n = String(n);
    if(n[0] == 9){
      return true
    }
    else{
      return false
    }
  }
  else{

  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var referencia;
  if (arreglo.length>0){
    referencia = arreglo[0];
    for(var i = 1;i<arreglo.length;i++){
      if(referencia !== arreglo[i]){
        return false;
      }
    }
    return true;
  }
  else{

  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevo_array = [];
  for(var i = 0; i < array.length;i++){
    if((array[i] == "Enero")||(array[i] == "Marzo")||(array[i] == "Noviembre")){
      nuevo_array.push(array[i]);
    }
  }
  if (nuevo_array.length == 3){
    return nuevo_array;
  }
  else {
    return "No se encontraron los meses pedidos";
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevo_array = [];
  for(var i = 0;i<array.length;i++){
    if(array[i]>100){
      nuevo_array.push(array[i]);
    }
    else{}
  }
  return  nuevo_array;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevo_array = [];
  for (var i = 1; i <= 10 ; i++){
    numero = numero + 2;
    if (numero === i){
      break
    }
    else{
      nuevo_array.push(numero);
      if(i == 10){
        return nuevo_array;
      }
    }
  }
  return "Se interrumpió la ejecución";
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var numero_array = [];
  for (var i = 1 ; i<=10 ; i++){
    if (i == 5){
      continue;
    }
    numero = numero + 2;
    numero_array.push(numero);
  }
  return numero_array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
