function ValidaLogin(){

    var emailLogin = document.getElementById("email");
    var senhaLogin = document.getElementById("exampleInputSenha");

    let listaUsuario = []

    var validaUsuario = {
        validaNome: '',
        validaEmail: '',
        validaSenha: ''
    }
//Colocando dados do localstorage em uma variável
    listaUsuario = JSON.parse(localStorage.getItem('dadosUsuario'))

//Colocando os dados na variável par realizar a comparação
    listaUsuario.forEach((item) => {
        if(emailLogin.value == item.email && senhaLogin.value == item.senha){
            validaUsuario ={
                 validaNome: item.nome,
                 validaEmail: item.email,
                 validaSenha: item.senha                
            }
        }
    })

// Validando os campos vazios para comprar as informações do localstorage
    if(emailLogin.value != '' && senhaLogin.value != '' && emailLogin.checkValidity()){
        if(emailLogin.value == validaUsuario.validaEmail && senhaLogin.value == validaUsuario.validaSenha){
            alert("Seja Bem Vindo!")
            window.location.href = "despesas.html"
            //Criando outro localstorage para pegar informações em outras páginas
            localStorage.setItem('usuarioLogado', JSON.stringify(validaUsuario))            
            
        }
        else{
            alert("Usuário não cadastrado. \nCadastre-se para acessar o sistema!")
        }
    }
    else{
        alert("Preencha os campos corretamentes para realizar o login!")
    }

    
}

