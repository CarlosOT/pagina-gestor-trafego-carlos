/*
ROADMAP

[1.0] PRIMEIRA TELA "PROCURANDO ESPECIALISTA?"
[1.1] INPUT: RECEBER NOME DO CLIENTE
[1.2] INPUT: SABER SE O CLIENTE JÁ TEM CONTA NO GOOGLE ADS
[1.3] INPUT: RECEBER O SITE DO CLIENTE
[1.4] INPUT: SABER QUAL O PRINCIPAL SERVIÇO DO CLIENTE

[2.0] CRIAR CONSCIENTIZAÇÃO NO CLIENTE SOBRE O FUNCIONAMENTO DO GOOGLE ADS
[2.1] RADIO BUTTON + IMG: ACEITAÇÃO DO CLIENTE

*/

import * as mds from "../modules/md.js"

let nome = [];
let listaPlaceHolders = ["JÁ TEM CONTA NO GOOGLE ADS?","INFORME SEU SITE","INFORME SEU PRINCIPAL SERVIÇO"];
let listaRespostas = ["Nome:", "Tem conta no Google Ads:", "Site:", "Principal Serviço:"];
let c = 0;

let botaoWhatsapp = document.querySelector('#botaoWhatsapp');
let barraProgresso = document.getElementById('barraProgresso');
let headLine = document.getElementById('headline');
let tituloH1 = document.getElementById('tituloH1');
let tituloH2_1 = document.getElementById('tituloH2_1');
let tituloH2_2 = document.getElementById('tituloH2_2');
let inputPrincipal = document.getElementById('inputPrincipal');
let botaoOk = document.getElementById('botaoOk');
let borda = document.getElementById('bordaPrincipal');
let imgCarlos = document.getElementById('imgCarlos');

mds.hideElement('botaoWhatsapp');
mds.hideElement('barraProgresso');
mds.hideElement('tituloH2_2');


let progresso = 0;
let largura = 0;

let whatsWeb = document.getElementById('linkWhatsWeb');
let linkWhatsWeb = "https://web.whatsapp.com/send?phone=5511968255910&text=Ol%C3%A1%20Carlos,%20tudo%20bem?%20Estou%20precisando%20contratar%20um%20gestor%20de%20tr%C3%A1fego%20para%20a%20minha%20empresa,%20segue%20abaixo%20os%20dados%20que%20preenchi%20no%20site,%20aguardo%20seu%20retorno!%0A%0A";

inputPrincipal.focus();

function execucao(){ 
    mds.hideElement('tituloH1');
    mds.hideElement('tituloH2_1');
    //VALIDAÇÃO
    if(inputPrincipal.value.length == 0){
        window.alert('O CAMPO NÃO PODE FICAR VAZIO')
    }else{
        nome.push(String(inputPrincipal.value).toUpperCase());
        inputPrincipal.value = '';
        inputPrincipal.placeholder = listaPlaceHolders[c];
        linkWhatsWeb += `${listaRespostas[c]}%20*${nome[c]}*%20%0A`;
        c++;
        progresso += 25;
        largura += 190;
        barraProgresso.innerText = `${progresso}%`
        barraProgresso.style.width = `${largura}px`
        mds.showElement('barraProgresso');
        
        //QUANDO OS DADOS JÁ FORAM RECEBIDOS
        if(nome.length == 4){
            mds.hideElement('tituloH1');
            mds.hideElement('tituloH2_1');
            mds.showElement('tituloH2_2');
            mds.showElement('headline');
            mds.hideElement('inputPrincipal');
            mds.hideElement('botaoOk');
            mds.showElement('botaoWhatsapp');
            mds.hideElement('barraProgresso');
            headLine.innerHTML = "Seu acesso a nossa equipe foi liberado! Fale conosco e tire todas as suas dúvidas para contratar assessoria completa em Gestão de Tráfego Google Ads por um preço especial que cabe no seu bolso!";
            whatsWeb.href = linkWhatsWeb;
            borda.style.borderColor = "rgb(66, 241, 2)";
            borda.style["boxShadow"] = "1px 1px 5px #42f102";
            imgCarlos.style.borderColor = "rgb(66, 241, 2)";
            imgCarlos.style["boxShadow"] = "1px 1px 8px #42f102";
        }

    }
    inputPrincipal.focus();
}

document.getElementById('botaoOk').addEventListener('click', execucao);
