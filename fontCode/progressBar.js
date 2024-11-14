import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function progressBar(){
    mv.setProgresso(9);
    mv.setLargura(60);
    mg.setWidth('barraProgresso', `${mv.getLargura()}px`);
    mg.showElement('barraProgresso');
    mg.insertText('barraProgresso', `${mv.getProgresso()}%`);
}