import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function setHeadlines(){
    $("#headline").hide().slideDown();
    mg.hideElement('tituloH2_1');
    mg.insertText('headline', getTxt.list.headlines[mv.getCounter()]);
    mg.setFontSize('headline', '25px');
    // mg.typeWriterHeadline();
}