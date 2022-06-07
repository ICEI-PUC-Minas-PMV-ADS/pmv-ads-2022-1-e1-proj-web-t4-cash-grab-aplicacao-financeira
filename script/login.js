function ValidaLogin(){

    var emailLogin = document.getElementById("exampleInputEmail");
    var senhaLogin = document.getElementById("exampleInputSenha");

    let listaUsuario = []

    var validaUsuario = {
        validaNome: '',
        validaEmail: '',
        validaSenha: ''
    }

    listaUsuario = JSON.parse(localStorage.getItem('dadosUsuario'))

    console.log(listaUsuario)

    listaUsuario.forEach((item) => {
        if(emailLogin.value == item.email && senhaLogin.value == item.senha){
            validaUsuario ={
                 validaNome: item.nome,
                 validaEmail: item.email,
                 validaSenha: item.senha                
            }
        }
    })

    if(emailLogin.value != '' && senhaLogin.value != ''){
        if(emailLogin.value == validaUsuario.validaEmail && senhaLogin.value == validaUsuario.validaSenha){
            alert("Seja Bem Vindo!")
            window.location.href = "despesas.html"
        }
        else{
            alert("Usuário não cadastrado. \nCadastre-se para acessar o sistema!")
        }
    }
    else{
        alert("Preencha os campos para realizar o login!")
    }

    
}

