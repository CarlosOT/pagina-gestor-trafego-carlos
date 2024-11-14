import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function buttonFadeIn(){
    mg.hideElement('inputPrincipal');
    mg.hideElement('botaoOk');
    setTimeout(fadeIn, );
    function fadeIn() {
        $("#inputPrincipal").fadeIn();
        $("#botaoOk").fadeIn();
        mg.setFocus('inputPrincipal');
    }
}