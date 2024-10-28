//VETOR
let nome = [];
let listaPlaceHolders = ["JÁ TEM CONTA NO GOOGLE ADS?","INFORME SEU SITE","INFORME SEU PRINCIPAL SERVIÇO"];
let listaRespostas = ["Nome:", "Tem conta no Google Ads:", "Site:", "Principal Serviço:"];
let c = 0; //contador

//GET
let botaoWhatsapp = document.querySelector('#botaoWhatsapp');
let barraProgresso = document.getElementById('barraProgresso');
let headLine = document.getElementById('headline');
let tituloH1 = document.getElementById('tituloH1');
let tituloH2_1 = document.getElementById('tituloH2_1');
let tituloH2_2 = document.getElementById('tituloH2_2');

//ESCONDENDO PARA TESTES
botaoWhatsapp.style.display = "none";
barraProgresso.style.display = "none";
inputPrincipal.style.display = "";
botaoOk.style.display = "";
headLine.style.display = "";
tituloH1.style.display = "";
tituloH2_1.style.display = "";
tituloH2_2.style.display = "none";


//PROGRESSO E LARGURA
let progresso = 0;
let largura = 0;

//LINKS WHATSAPP
let whatsWeb = document.getElementById('linkWhatsWeb');
let whatsDesk = document.getElementById('linkWhatsDesk');
let linkWhatsDesk = "https://api.whatsapp.com/send?phone=5511968255910&text=Ol%C3%A1%20Carlos,%20tudo%20bem?%20Estou%20precisando%20contratar%20um%20gestor%20de%20tr%C3%A1fego%20para%20a%20minha%20empresa,%20segue%20abaixo%20os%20dados%20que%20preenchi%20no%20site,%20aguardo%20seu%20retorno!%0A%0A";
let linkWhatsWeb = "https://web.whatsapp.com/send?phone=5511968255910&text=Ol%C3%A1%20Carlos,%20tudo%20bem?%20Estou%20precisando%20contratar%20um%20gestor%20de%20tr%C3%A1fego%20para%20a%20minha%20empresa,%20segue%20abaixo%20os%20dados%20que%20preenchi%20no%20site,%20aguardo%20seu%20retorno!%0A%0A";

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
        linkWhatsDesk += `${listaRespostas[c]}%20*${nome[c]}*%20%0A`;
        linkWhatsWeb += `${listaRespostas[c]}%20*${nome[c]}*%20%0A`;
        c++;
        progresso += 25;
        largura += 190;
        barraProgresso.innerText = `${progresso}%`
        barraProgresso.style.width = `${largura}px`
        barraProgresso.style.display = "";
        
        if(nome.length == 4){
            tituloH1.style.display = "none";
            tituloH2_1.style.display = "none";
            tituloH2_2.style.display = "";

            headLine.style.display = "";
            headLine.innerHTML = "Para nos enviar as informações preenchidas, ABRA seu Whatsapp no computador e CLIQUE em uma das opções abaixo para acessar pelo:";

            inputPrincipal.style.display = "none";
            botaoOk.style.display = "none";
            botaoWhatsapp.style.display = "";
            whatsDesk.href = linkWhatsDesk;
            whatsWeb.href = linkWhatsWeb;
            
            borda.style.borderColor = "rgb(66, 241, 2)";
            borda.style["boxShadow"] = "1px 1px 5px #42f102";

            imgCarlos.style.borderColor = "rgb(66, 241, 2)";
            imgCarlos.style["boxShadow"] = "1px 1px 8px #42f102";

            barraProgresso.style.backgroundColor = "#42f102";

        }

    }
    inputPrincipal.focus();
}

