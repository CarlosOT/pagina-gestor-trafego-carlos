//VETOR
let nome = [];
let listaPlaceHolders = ["DIGITE SEU SEGUNDO NOME AQUI","FUNCIONOU"];
let c = 0;

//PARA ESCONDER ÁREA DE BOTÃO
let idWhatsapp = document.getElementById('whatsapp');
let escondeWhatsapp = idWhatsapp.innerHTML = '';


function execucao(){ 
    let inputPrincipal = document.getElementById('inputPrincipal');
    nome.push(inputPrincipal.value);
    inputPrincipal.value = '';
    inputPrincipal.placeholder = listaPlaceHolders[c];
    window.alert(`${nome}`);
    window.alert(`Vetor com ${nome.length} posições`)
    c++;
}



