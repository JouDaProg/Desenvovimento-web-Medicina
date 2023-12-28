document.getElementById("cadastro").onsubmit = function(event){
    event.preventDefault();

    var nome = document.getElementById("inome").value;
    var email = document.getElementById("iemail").value;
    var phone = document.getElementById("phone").value;

    console.log("Paciente cadastrado: " + nome + ", Email: " + email + ", Telefone: " + phone);

    document.getElementById("successMessage").style.display = "block";
}
