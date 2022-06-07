function ValidaLogin(){

    var emailLogin = document.getElementById("exampleInputEmail");
    var senhaLogin = document.getElementById("exampleInputSenha");

    var verif_email = localStorage.getItem("dadosUsuario").split("email");
    var verif_senha = localStorage.getItem("dadosUsuario").split("senha");

    console.log(verif_email);

    if(emailLogin == verif_email && senhaLogin == verif_senha){
        alert(`Bem Vindo ${localStorage.getItem[nome]}`)
        window.location.href = "despesas.html"
    }
    else{
        alert("Usuário não cadastrado \nVolte e realize um cadastro.");
    }

}

