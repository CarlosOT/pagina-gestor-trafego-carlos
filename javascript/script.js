//VETOR
let nome = [];
let listaPlaceHolders = ["JÁ TEM CONTA NO GOOGLE ADS?","INFORME SEU SITE","INFORME SEU PRINCIPAL SERVIÇO"];
let c = 0;

//PARA ESCONDER ÁREA DE BOTÃO
let idWhatsapp = document.getElementById('whatsapp');
idWhatsapp.style.display = "none";


function execucao(){ 
    let inputPrincipal = document.getElementById('inputPrincipal');
    if(inputPrincipal.value.length == 0){
        window.alert('O CAMPO NÃO PODE FICAR VAZIO')
    }else{
        nome.push(inputPrincipal.value);
        inputPrincipal.value = '';
        inputPrincipal.placeholder = listaPlaceHolders[c];
        window.alert(`${nome}`);
        window.alert(`Vetor com ${nome.length} posições`)
        c++;
    }
}

