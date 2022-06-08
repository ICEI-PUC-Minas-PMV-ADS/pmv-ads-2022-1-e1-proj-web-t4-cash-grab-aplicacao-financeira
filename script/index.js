function emailSugest(){
    let sugest = document.getElementById("exampleFormControlTextarea1")
    let sugestEmail = document.getElementById("exampleFormControlInput1")

    console.log(sugestEmail)

    if(sugestEmail.value!= ''){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "cashgrap@gmail.com",
            Password : "FB6AA04E07E13FA408FD3D05B43D7E767753",
            To : 'cashgrap@gmail.com',
            From : sugestEmail.value,
            Subject : "Sugestão Site",
            Body : sugest.value
        }).then(message => console.log(message)
        );
        alert("Obrigado pela sugestão!")
    }
    else{
        alert("Digite um e-mail no campo.")
    }
}