// Se Declara el objeto
var clientData = {
    id : 094545,
    fullname: "Not set",
    setUserName: function(firstname,lastname){
        this.fullname = firstname + " " + lastname;       
    }
    
}
// Declarando la funciòn contenedora:
/* En la siguiente fragmento de codigo, cuando se ejecuta clientData.setUserName,
this.fullName no establecera la propiedad fullname en el objeto ClientDat. En su lugar
establecera fullname en el objeto de la ventana , ya que getUserInput es una funcion global.
Esto sucede porque el objeto this en la funciòn global apunta al objeto ventana
*/
/*
function getUserInput(firstname,lastname,cb){
    cb(firstname,lastname);
}

getUserInput("Barack","Obama",clientData.setUserName)
console.log(clientData.fullname);
*/


/*
   Se usa la funcion aplicar, el primer parametro de la funciòn aplicar (apply), tambien es el
   objeto que se usara como objeto this(en este caso cbobj que es a su vez clientData) dentro de
   la funciòn, mientras que el ultimo parametro es una matriz de valores (o el objeto de argumentos)
   para pasar a la funcion
*/
function getUserInput(firstname,lastname,cb,cbobj){
    cb.apply(cbobj,[firstname,lastname]);
}

getUserInput("Barack","Obama",clientData.setUserName,clientData);
console.log(clientData.fullname);