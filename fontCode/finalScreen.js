import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function finalScreen(){
    mg.hideElement('tituloH1');
    mg.hideElement('tituloH2_1');
    mg.hideElement('barraProgresso');
    mg.hideElement('inputPrincipal');
    mg.hideElement('botaoOk');
    mg.showElement('botaoWhatsapp');
    mg.showElement('tituloH2_2');
    mg.showElement('headline');
    mg.insertText('headline', getTxt.list.finalText);
    $("#headline").hide().slideDown(2000);
    mg.setFontSize('headline', '30px');
    mg.setHref('linkWhatsWeb', mv.getLinkWhats());
    mg.setBorderColor('bordaPrincipal', "rgb(66, 241, 2)");
    mg.setBoxShadow('bordaPrincipal', '1px 1px 5px #42f102');
    mg.setBorderColor('imgCarlos', 'rgb(66, 241, 2)');
    mg.setBoxShadow('imgCarlos', '1px 1px 8px #42f102');
}