/*
ROADMAP
*/

import * as mg from "../modules/methodsGeneral.js"
import * as mt from "../modules/methodsText.js"
import * as mv from "../modules/methodsVariables.js"

// ELEMENTOS ESCONDIDOS ATÉ QUE O USUÁRIO FORNEÇA A PRIMEIRA RESPOSTA
mg.hideElement('botaoWhatsapp');
mg.hideElement('barraProgresso');
mg.hideElement('tituloH2_2');
mg.setFocus('inputPrincipal');

function execucao(){ 
    // VALIDAÇÃO --> CAMPO NÃO ACEITA ZERO
    if(mg.getLength('inputPrincipal') == 0){
        window.alert(mt.emptyField())
    }else{
        // LOOP FINITO PARA CONCIENTIZAR O CLIENTE E RECEBER INFORMAÇÕES 
        $("#headline").hide().slideDown(2000);
        mg.hideElement('tituloH2_1');
        mg.insertText('headline', mt.list.headlines[mv.getContador()]);
        mg.setFontSize('headline', '25px');
        mt.list.input.push(String(inputPrincipal.value).toUpperCase());
        mg.setValue('inputPrincipal', '');
        mg.setPlaceHolder('inputPrincipal', mt.list.showPlaceHolders[mv.getContador()]);

        if(mt.list.input.length < 12){
            mg.hideElement('inputPrincipal');
            mg.hideElement('botaoOk');
            setTimeout(fadeIn, 5000);
            function fadeIn() {
              $("#inputPrincipal").fadeIn();
              $("#botaoOk").fadeIn();
              mg.setFocus('inputPrincipal');
            }
        }

        if (mv.getContador() <= 3){
            mv.setLinkWhats(`${mt.list.paddingInput[mv.getContador()]}%20*${mt.list.input[mv.getContador()]}*%20%0A`);
        }else{
            mg.setValue('botaoOk', mt.botaoCiente());
        }

        mv.setIncrement();
        mv.setProgresso(9);
        mv.setLargura(60);
        mg.insertText('barraProgresso', `${mv.getProgresso()}%`);
        mg.setWidth('barraProgresso', `${mv.getLargura()}px`);
        mg.showElement('barraProgresso');
        
        //APÓS TODOS OS DADOS SEREM RECEBIDOS
        if(mt.list.input.length == 12){
            mg.hideElement('tituloH1');
            mg.hideElement('tituloH2_1');
            mg.showElement('tituloH2_2');
            mg.showElement('headline');
            mg.hideElement('inputPrincipal');
            mg.hideElement('botaoOk');
            mg.showElement('botaoWhatsapp');
            mg.hideElement('barraProgresso');
            mg.insertText('headline', mt.list.finalText);
            mg.setFontSize('headline', '30px');
            mg.setHref('linkWhatsWeb', mv.getLinkWhats());
            mg.setBorderColor('bordaPrincipal', "rgb(66, 241, 2)");
            mg.setBoxShadow('bordaPrincipal', '1px 1px 5px #42f102');
            mg.setBorderColor('imgCarlos', 'rgb(66, 241, 2)');
            mg.setBoxShadow('imgCarlos', '1px 1px 8px #42f102');
        }

    }
}
mg.addEventClick('botaoOk', execucao);