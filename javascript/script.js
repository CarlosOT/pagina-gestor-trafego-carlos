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
let linkWhatsWeb = "https://web.whatsapp.com/send?phone=5511968255910&text=Ol%C3%A1%20Carlos,%20tudo%20bem?%20Estou%20precisando%20contratar%20um%20gestor%20de%20tr%C3%A1fego%20para%20a%20minha%20empresa,%20segue%20abaixo%20os%20dados%20que%20preenchi%20no%20site,%20aguardo%20seu%20retorno!%0A%0A";
// let whatsDesk = document.getElementById('linkWhatsDesk');
// let linkWhatsDesk = "https://api.whatsapp.com/send?phone=5511968255910&text=Ol%C3%A1%20Carlos,%20tudo%20bem?%20Estou%20precisando%20contratar%20um%20gestor%20de%20tr%C3%A1fego%20para%20a%20minha%20empresa,%20segue%20abaixo%20os%20dados%20que%20preenchi%20no%20site,%20aguardo%20seu%20retorno!%0A%0A";


inputPrincipal.focus();
function execucao(){ 
    let inputPrincipal = document.getElementById('inputPrincipal');
    let botaoOk = document.getElementById('botaoOk');
    let borda = document.getElementById('bordaPrincipal');
    let imgCarlos = document.getElementById('imgCarlos');
    
    //VALIDAÇÃO
    if(inputPrincipal.value.length == 0){
        window.alert('O CAMPO NÃO PODE FICAR VAZIO')
    }else{
        nome.push(String(inputPrincipal.value).toUpperCase());
        inputPrincipal.value = '';
        inputPrincipal.placeholder = listaPlaceHolders[c];
        //linkWhatsDesk += `${listaRespostas[c]}%20*${nome[c]}*%20%0A`;
        linkWhatsWeb += `${listaRespostas[c]}%20*${nome[c]}*%20%0A`;
        c++;
        progresso += 25;
        largura += 190;
        barraProgresso.innerText = `${progresso}%`
        barraProgresso.style.width = `${largura}px`
        barraProgresso.style.display = "";
        
        //QUANDO OS DADOS JÁ FORAM RECEBIDOS
        if(nome.length == 4){
            tituloH1.style.display = "none";
            tituloH2_1.style.display = "none";
            tituloH2_2.style.display = "";

            headLine.style.display = "";
            headLine.innerHTML = "Seu acesso a nossa equipe foi liberado! Fale conosco e tire todas as suas dúvidas para contratar assessoria completa em Gestão de Tráfego Google Ads por um preço especial que cabe no seu bolso!";

            inputPrincipal.style.display = "none";
            botaoOk.style.display = "none";
            botaoWhatsapp.style.display = "";
            //whatsDesk.href = linkWhatsDesk;
            whatsWeb.href = linkWhatsWeb;
            barraProgresso.style.display = "none";
            
            borda.style.borderColor = "rgb(66, 241, 2)";
            borda.style["boxShadow"] = "1px 1px 5px #42f102";

            imgCarlos.style.borderColor = "rgb(66, 241, 2)";
            imgCarlos.style["boxShadow"] = "1px 1px 8px #42f102";

            //barraProgresso.style.backgroundColor = "#42f102";

        }

    }
    inputPrincipal.focus();
}


// function clickWhatsWeb(){
//     window.alert(`[ATENÇÃO ${nome[0]}] Você está sendo redirecionado para a página oficial do WHATSAPP WEB. Caso seu Whatsapp não esteja aberto na web, basta escanear o QR Code através do app do seu whatsapp`);

// }

// function clickWhatsDesk(){
// window.alert(`[ATENÇÃO ${nome[0]}] Você escolheu acessar o Whatsapp pelo Desktop. Para que as informações preenchidas sejam enviadas automaticamente, basta que ao abrir seu whatsapp desktop, você minimize a tela, volte para a tela do whatsapp no computador e clique para "iniciar a conversa" novamente, dessa forma todos os dados serão enviados como parâmetros junto com a sua mensagem.`);
// }
