var tituloPrincipal = document.querySelector(".titulo-principal");
tituloPrincipal.textContent = "Renato Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

    if (!pesoValido) {
        console.log("Peso inválido!!");
        tdImc.textContent = "Peso inválido!!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválida!!");
        tdImc.textContent = "Altura inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido")
    }

    if (alturaValida && pesoValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    
 
    }
}

function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    } else {
        return false;
    }
}


function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}













