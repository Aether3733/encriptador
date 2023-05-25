const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".resultado");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}

function validateAddress(str){
    if( /[^a-zA-Z0-9\- \/]/.test(str) ) {
        Swal.fire('Por favor no ingrese símbolos y/o números');
        return false;
    }

    return true;     
}

function encriptar(stringEncrip){
    
    if(validateAddress(stringEncrip)){
        let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncrip = stringEncrip.toLowerCase()
    
        for(let i = 0; i < matriz.length; i++){
            if(stringEncrip.includes(matriz[i][0])){
                stringEncrip =stringEncrip.replaceAll(matriz[i][0], matriz[i][1])
            }
    
        }
    
        return stringEncrip;
    } else{
        return " "
    }    
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}


function desencriptar(stringDesencrip){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencrip = stringDesencrip.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringDesencrip.includes(matriz[i][1])){
            stringDesencrip =stringDesencrip.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return stringDesencrip
}

function copiar(){
    var copiarTexto = document.querySelector(".resultado");
    copiarTexto.select();
    document.execCommand("copy");
    alerta();
    mensaje.value = " ";
}

function alerta(){
    Swal.fire('Texto copiado con éxito')
}