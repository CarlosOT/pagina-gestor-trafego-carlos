/*
ROADMAP
*/

import * as m from "../modules/methods.js"
import * as t from "../modules/texts.js"
import * as v from "../modules/variables.js"

// ELEMENTOS ESCONDIDOS ATÉ QUE O USUÁRIO FORNEÇA A PRIMEIRA RESPOSTA
m.hideElement('botaoWhatsapp');
m.hideElement('barraProgresso');
m.hideElement('tituloH2_2');
m.setFocus('inputPrincipal');

function execucao(){ 
    // VALIDAÇÃO --> CAMPO NÃO ACEITA ZERO
    if(m.getLength('inputPrincipal') == 0){
        window.alert(t.emptyField())
    }else{
        // LOOP FINITO PARA CONCIENTIZAR O CLIENTE E RECEBER INFORMAÇÕES 
        $("#headline").hide().slideDown(2000);
        m.hideElement('tituloH2_1');
        m.insertText('headline', t.list.headlines[v.getContador()]);
        m.setFontSize('headline', '25px');
        t.list.input.push(String(inputPrincipal.value).toUpperCase());
        m.setValue('inputPrincipal', '');
        m.setPlaceHolder('inputPrincipal', t.list.showPlaceHolders[v.getContador()]);

        if(t.list.input.length < 12){
            m.hideElement('inputPrincipal');
            m.hideElement('botaoOk');
            setTimeout(fadeIn, 5000);
            function fadeIn() {
              $("#inputPrincipal").fadeIn();
              $("#botaoOk").fadeIn();
              m.setFocus('inputPrincipal');
            }
        }

        if (v.getContador() <= 3){
            v.setLinkWhats(`${t.list.paddingInput[v.getContador()]}%20*${t.list.input[v.getContador()]}*%20%0A`);
        }else{
            m.setValue('botaoOk', t.botaoCiente());
        }

        v.setIncrement();
        v.setProgresso(9);
        v.setLargura(60);
        m.insertText('barraProgresso', `${v.getProgresso()}%`);
        m.setWidth('barraProgresso', `${v.getLargura()}px`);
        m.showElement('barraProgresso');
        
        //APÓS TODOS OS DADOS SEREM RECEBIDOS
        if(t.list.input.length == 12){
            m.hideElement('tituloH1');
            m.hideElement('tituloH2_1');
            m.showElement('tituloH2_2');
            m.showElement('headline');
            m.hideElement('inputPrincipal');
            m.hideElement('botaoOk');
            m.showElement('botaoWhatsapp');
            m.hideElement('barraProgresso');
            m.insertText('headline', t.list.finalText);
            m.setFontSize('headline', '30px');
            m.setHref('linkWhatsWeb', v.getLinkWhats());
            m.setBorderColor('bordaPrincipal', "rgb(66, 241, 2)");
            m.setBoxShadow('bordaPrincipal', '1px 1px 5px #42f102');
            m.setBorderColor('imgCarlos', 'rgb(66, 241, 2)');
            m.setBoxShadow('imgCarlos', '1px 1px 8px #42f102');
        }

    }
}

document.getElementById('botaoOk').addEventListener('click', execucao);