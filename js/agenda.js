

let botao = document.getElementById('agendar');


let divAgenda = document.getElementById('agenda');


let inputData = document.createElement('input');
inputData.type = 'date';
divAgenda.appendChild(inputData);


let inputHora = document.createElement('input');
inputHora.type = 'time';
divAgenda.appendChild(inputHora);


botao.addEventListener('click', function() {
   
    divAgenda.innerHTML = '';

   
    let dataHoraEscolhida = new Date(inputData.value + 'T' + inputHora.value);


    let p = document.createElement('p');
    p.textContent = dataHoraEscolhida.toLocaleString();
    divAgenda.appendChild(p);
});



