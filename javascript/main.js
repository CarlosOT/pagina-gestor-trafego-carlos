/*
ROADMAP
*/

import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

// ELEMENTOS ESCONDIDOS ATÉ QUE O USUÁRIO FORNEÇA A PRIMEIRA RESPOSTA
mg.hideElement('botaoWhatsapp');
mg.hideElement('barraProgresso');
mg.hideElement('tituloH2_2');

// HTML --> MOSTRAR ELEMENTOS AO CARREGAR PÁGINA
mg.insertHtml('tituloH1', getTxt.texts.tituloH1);
mg.insertHtml('tituloH2_1', getTxt.texts.tituloH2_1);
mg.insertHtml('tituloH2_2', getTxt.texts.tituloH2_2);
mg.insertHtml('headline', getTxt.list.headlines[mv.getContador()]);
mg.setPlaceHolder('inputPrincipal', getTxt.list.showPlaceHolders[mv.getContador()]);
mg.setValue('botaoOk', getTxt.texts.botaoOk);
mg.insertHtml('linkWhatsWeb', getTxt.texts.botaoWhats);

mg.setFocus('inputPrincipal');
function execucao(){ 

    // VALIDAÇÃO --> CAMPO NÃO ACEITA ZERO
    if(mg.getLength('inputPrincipal') == 0){
        window.alert(getTxt.texts.empty);
    }else{
        // LOOP FINITO PARA CONCIENTIZAR O CLIENTE E RECEBER INFORMAÇÕES 
        mv.setIncrement();
        $("#headline").hide().slideDown(2000);
        mg.hideElement('tituloH2_1');
        mg.insertText('headline', getTxt.list.headlines[mv.getContador()]);
        mg.setFontSize('headline', '25px');
        getTxt.list.input.push(String(inputPrincipal.value).toUpperCase());
        mg.setValue('inputPrincipal', '');
        mg.setPlaceHolder('inputPrincipal', getTxt.list.showPlaceHolders[mv.getContador()]);

        //TEMPO PARA APARECER O INPUT
        if(getTxt.list.input.length < 12){
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
            mv.setLinkWhats(`${getTxt.list.paddingInput[mv.getContador()]}%20*${getTxt.list.input[mv.getContador()]}*%20%0A`);
        }else{
            mg.setValue('botaoOk', getTxt.texts.botaoCiente);
        }

        mv.setProgresso(9);
        mv.setLargura(60);
        mg.setWidth('barraProgresso', `${mv.getLargura()}px`);

        mg.showElement('barraProgresso');

        mg.insertText('barraProgresso', `${mv.getProgresso()}%`);
        
        //APÓS TODOS OS DADOS SEREM RECEBIDOS
        if(getTxt.list.input.length == 12){
            mg.hideElement('tituloH1');
            mg.hideElement('tituloH2_1');
            mg.hideElement('barraProgresso');
            mg.hideElement('inputPrincipal');
            mg.hideElement('botaoOk');
            mg.showElement('botaoWhatsapp');
            mg.showElement('tituloH2_2');
            mg.showElement('headline');
            
            mg.insertText('headline', getTxt.list.finalText);

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