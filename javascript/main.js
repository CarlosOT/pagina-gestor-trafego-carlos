/*
ROADMAP
*/

import * as m from "../modules/methods.js"
import * as a from "../modules/acessArrays.js"



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

m.hideElement('botaoWhatsapp');
m.hideElement('barraProgresso');
m.hideElement('tituloH2_2');
m.hideElement('hr');   

let progresso = 0;
let largura = 0;
let c = 0;

let whatsWeb = document.getElementById('linkWhatsWeb');
let linkWhatsWeb = "https://web.whatsapp.com/send?phone=5511968255910&text=Ol%C3%A1%20Carlos,%20tudo%20bem?%20Estou%20precisando%20contratar%20um%20gestor%20de%20tr%C3%A1fego%20para%20a%20minha%20empresa,%20segue%20abaixo%20os%20dados%20que%20preenchi%20no%20site,%20aguardo%20seu%20retorno!%0A%0A";

inputPrincipal.focus();

function execucao(){ 
    //VALIDAÇÃO
    if(inputPrincipal.value.length == 0){
        window.alert('VOCÊ NÃO RESPONDEU, VOLTE PARA RESPONDER')
    }else{
        $("#headline").hide().slideDown(1500);
        m.showElement('hr');
        m.hideElement('tituloH2_1');
        headLine.innerText = a.listArrays.listHeadlines[c];
        m.setFontSize('headline', '25px');
        a.listArrays.listInput.push(String(inputPrincipal.value).toUpperCase());
        inputPrincipal.value = '';
        inputPrincipal.placeholder = a.listArrays.listShowPlaceHolders[c];

        if (c <= 3){
            linkWhatsWeb += `${a.listArrays.listPaddingInput[c]}%20*${a.listArrays.listInput[c]}*%20%0A`;
        }else{
            botaoOk.value = "ESTOU CIENTE";
        }

        c++;
        progresso += 9;
        largura += 60;
        barraProgresso.innerText = `${progresso}%`
        barraProgresso.style.width = `${largura}px`
        m.showElement('barraProgresso');
        
        //QUANDO OS DADOS JÁ FORAM RECEBIDOS
        if(a.listArrays.listInput.length == 12){
            m.hideElement('tituloH1');
            m.hideElement('tituloH2_1');
            m.showElement('tituloH2_2');
            m.showElement('headline');
            m.hideElement('inputPrincipal');
            m.hideElement('botaoOk');
            m.showElement('botaoWhatsapp');
            m.hideElement('barraProgresso');
            m.hideElement('hr');
            headLine.innerText = a.listArrays.finalText;
            m.setFontSize('headline', '30px');
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
