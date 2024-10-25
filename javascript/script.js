//VETOR
let nome = [];
let listaPlaceHolders = ["JÁ TEM CONTA NO GOOGLE ADS?","INFORME SEU SITE","INFORME SEU PRINCIPAL SERVIÇO"];
let listaRespostas = ["Nome:", "Tem conta no Google Ads:", "Site:", "Principal Serviço:"];
let c = 0; //contador

//ESCONDER
let botaoWhatsapp = document.querySelector('#botaoWhatsapp');
botaoWhatsapp.style.display = "none";
let barraProgresso = document.getElementById('barraProgresso');
barraProgresso.style.display = "none";

//TEMPORÁRIO PARA TESTES
inputPrincipal.style.display = "";
botaoOk.style.display = "";

//PROGRESSO E LARGURA
let progresso = 0;
let largura = 0;

//LINKS WHATSAPP
let whatsWeb = document.getElementById('linkWhatsWeb');
let whatsDesk = document.getElementById('linkWhatsDesk');
let linkWhatsDesk = "https://api.whatsapp.com/send?phone=5511968255910&text=";
let linkWhatsWeb = "https://web.whatsapp.com/send?phone=5511968255910&text=";

inputPrincipal.focus();
function execucao(){ 
    let inputPrincipal = document.getElementById('inputPrincipal');
    let botaoOk = document.getElementById('botaoOk');
    let borda = document.getElementById('bordaPrincipal');
    let imgCarlos = document.getElementById('imgCarlos');
    

    if(inputPrincipal.value.length == 0){
        window.alert('O CAMPO NÃO PODE FICAR VAZIO')
    }else{
        nome.push(String(inputPrincipal.value).toUpperCase());
        inputPrincipal.value = '';
        inputPrincipal.placeholder = listaPlaceHolders[c];
        linkWhatsDesk += `${listaRespostas[c]}%20*${nome[c]}*%20//%20`;
        linkWhatsWeb += `${listaRespostas[c]}%20*${nome[c]}*%20//%20`;
        c++;
        progresso += 25;
        largura += 190;
        barraProgresso.innerText = `${progresso}%`
        barraProgresso.style.width = `${largura}px`
        barraProgresso.style.display = "";
        
        if(nome.length == 4){
            inputPrincipal.style.display = "none";
            botaoOk.style.display = "none";
            botaoWhatsapp.style.display = "";
            borda.style.borderColor = "rgb(66, 241, 2)";
            borda.style["boxShadow"] = "1px 1px 5px #42f102";
            imgCarlos.style.borderColor = "rgb(66, 241, 2)";
            imgCarlos.style["boxShadow"] = "1px 1px 8px #42f102";
            barraProgresso.style.backgroundColor = "#42f102";
            whatsDesk.href = linkWhatsDesk;
            whatsWeb.href = linkWhatsWeb;
        }

    }
    inputPrincipal.focus();
}

