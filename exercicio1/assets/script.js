let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let desc = document.querySelector('#desc');
let img = document.querySelector('#imgcorpo') 

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
        txtEmail.innerHTML = 'Nome Invalido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = "Nome Valido"
        txtEmail.style.color = 'green' 
    }

}
function validarDesc(){
    let txtDesc = document.querySelector('#txtDesc')

    if(desc.value.length > 255){
        txtDesc.innerHTML = 'Valor de caracteres excedido'
        txtDesc.style.color = 'red'
    }
    else{
        txtDesc.innerHTML = ""
        txtDesc.style.color = 'green' 
    }
}
function imgZoom(){
    img.style.width = '600px'
    img.style.heigth = '450px'
}
function imgNormal(){
    img.style.width = '512px'
    img.style.heigth = '320px'
}
