import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function initialSetup(){
    mg.hideElement('botaoWhatsapp');
    mg.hideElement('barraProgresso');
    mg.hideElement('tituloH2_2');
    mg.insertHtml('tituloH1', getTxt.texts.tituloH1);
    mg.insertHtml('tituloH2_1', getTxt.texts.tituloH2_1);
    mg.insertHtml('tituloH2_2', getTxt.texts.tituloH2_2);
    mg.insertHtml('headline', getTxt.list.headlines[mv.getCounter()]);
    mg.setPlaceHolder('inputPrincipal', getTxt.list.showPlaceHolders[mv.getCounter()]);
    mg.setValue('botaoOk', getTxt.texts.botaoOk);
    mg.insertHtml('linkWhatsWeb', getTxt.texts.botaoWhats);
    mg.setFocus('inputPrincipal');
}
