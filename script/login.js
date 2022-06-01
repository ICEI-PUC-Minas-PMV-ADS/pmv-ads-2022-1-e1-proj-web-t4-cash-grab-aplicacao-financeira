function ValidaLogin(){

    var emailLogin = document.getElementById("exampleInputEmail").value;
    var senhaLogin = document.getElementById("exampleInputSenha");

    console.log();

    if(emailLogin == localStorage.getItem("dadosUsuario.name") && senhaLogin == localStorage.getItem("dadosUsuario")){
        alert(`Bem Vindo ${localStorage.getItem[nome]}`)
        window.location.href = "despesas.html"
    }
    else{
        alert("Usuário não cadastrado \nVolte e realize um cadastro.");
    }

}

