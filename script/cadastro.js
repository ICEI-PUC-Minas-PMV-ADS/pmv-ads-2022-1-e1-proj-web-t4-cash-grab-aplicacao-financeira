function cadastroUsuario(){
    //pegando informações e transformando em JSON
    var nomeUsuario =document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("password");

    var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

    if(dados == null){
        localStorage.setItem("dadosUsuario","[]");
        dados = [];
    }

    // Colocando os valores em uma variável e colocando no localstorage
    var auxUsuario = {
        nome: nomeUsuario.value,
        email: email.value,
        senha: senha.value
    }
    

    if (nomeUsuario.value.length == 0 || email.value.length == 0 || senha.value.length == 0){
        alert('Preencha os campos vazios');
    }
    else{
        dados.push(auxUsuario);
        localStorage.setItem("dadosUsuario", JSON.stringify(dados));
        // alerta e limpando dados dos campos
        alert("Usuário Cadastrado com Sucesso!");
        nomeUsuario.value = "";
        email.value = "";
        senha.value = "";
        window.location.href = "index.html"
    }

}