let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let confSenha = document.querySelector('#confirmaSenha')

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = 'green' 
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== -1){
        txtEmail.innerHTML = 'Email Invalido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = "Email Valido"
        txtEmail.style.color = 'green' 
    }

}
function validarSenha(){
    let txtSenha = document.querySelector('#txtSenha')

    if(senha.value.length < 4 ){
        txtSenha.innerHTML = 'A senha deve conter no minimo 4 caracteres e um numero'
        txtSenha.style.color = 'red'
    }
    else{
        txtSenha.innerHTML = "Senha valida"
        txtSenha.style.color = 'green'
    }
}

function confirmarSenha(){
    let txtConfirma = document.querySelector('#txtConfSenha')
    if(senha.value != confSenha.value){
        txtConfirma.innerHTML = 'Senhas diferentes'
        txtConfirma.style.color = 'red'
    }else{
        txtConfirma.innerHTML = 'Senhas corretas'
        txtConfirma.style.color = 'green'
    }

}


// function validarSenha(p){
//     let retorno = false;
//     var letrasMaiusculas = /[A-Z]/;
//     var letrasMinusculas = /[a-z]/; 
//     var numeros = /[0-9]/;
//     var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
//     if(p.length > 8){
//     return retorno;
//     }
//     if(p.length < 8){
//         return retorno;
//         }
//     var auxMaiuscula = 0;
//     var auxMinuscula = 0;
//     var auxNumero = 0;
//     var auxEspecial = 0;
//     for(var i=0; i<p.length; i++){
//     if(letrasMaiusculas.test(p[i]))
//     auxMaiuscula++;
//     else if(letrasMinusculas.test(p[i]))
//     auxMinuscula++;
//     else if(numeros.test(p[i]))
//     auxNumero++;
//     else if(caracteresEspeciais.test(p[i]))
//     auxEspecial++;
//     }
//     if (auxMaiuscula > 0){
//         if (auxMinuscula > 0){
//         if (auxNumero > 0){
//         if (auxEspecial) {
//         retorno = true;
//         }
//         }
//         }
//         }
// return retorno;    
// }
// console.log(validarSenha("test1234"));
// console.log(validarSenha("Test123@"));
// console.log(validarSenha("Teste123@"));



// if(retorno = true ){
// txtSenha.innerHTML = "Email Valido"
// txtSenha.style.color = 'green'}
// else{
// txtSenha.innerHTML = 'A senha deve conter no minimo 4 caracteres e um numero'
// txtSenha.style.color = 'red' 
// }
