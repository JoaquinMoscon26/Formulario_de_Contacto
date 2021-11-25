const textArea = document.getElementById("textArea");
const cantCaracteres = document.getElementById("cantCaracteres");
var Car_max=140; //máximo de caracteres
var sumatoria;


textArea.addEventListener("input",CuentaCaracteres);

function CuentaCaracteres(){ 
    
    console.log(textArea.value.length)

    var caracteresFaltantes=textArea.value.length

    if(textArea.value.length>Car_max){
        cantCaracteres.innerHTML= caracteresFaltantes + "/140 superaste los 140 Caracteres"
        cantCaracteres.classList.add("naranjaRojo");
        cantCaracteres.classList.remove("celesteAzul");
        
    }else{
        if(caracteresFaltantes<=Car_max){

            cantCaracteres.classList.remove("naranjaRojo")
            cantCaracteres.classList.add("celesteAzul");
            
            cantCaracteres.innerHTML= caracteresFaltantes + "/140"
        }
    }
}
