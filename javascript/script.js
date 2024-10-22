//VETOR
let nome = [];
let listaPlaceHolders = ["DIGITE SEU SEGUNDO NOME AQUI","FUNCIONOU"];
let c = 0;

//PARA ESCONDER ÁREA DE BOTÃO
let idWhatsapp = document.getElementById('whatsapp');
idWhatsapp.style.display = "none";


function execucao(){ 
    let inputPrincipal = document.getElementById('inputPrincipal');
    nome.push(inputPrincipal.value);
    inputPrincipal.value = '';
    inputPrincipal.placeholder = listaPlaceHolders[c];
    window.alert(`${nome}`);
    window.alert(`Vetor com ${nome.length} posições`)
    c++;
}

//QUAIS SÃO AS INFORMAÇÕES ESSENCIAIS QUE PRECISO DE UM CLIENTE QUE ESTÁ PROCURANDO POR UM GESTOR DE TRÁFEGO?
/*
NOME
PALAVRA CHAVE PRINCIPAL (SERVIÇO)
AREA
TEM CONTA NO GOOGLE ADS?
TEM CAMPANHAS ATIVAS?
JÁ TRABALHOU COM ALGUM GESTOR DE TRÁFEGO?


Oi Carlos, meu nome é ${NOME}. Eu sou da area de ${AREA}, desejo contratar um gestor de tráfego para vender no google meu principal serviço, que é ${SERVIÇO}.
*/

