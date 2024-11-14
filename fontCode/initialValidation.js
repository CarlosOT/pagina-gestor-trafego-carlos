import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function initialValidation(){
    if(mg.getLength('inputPrincipal') == 0){
        window.alert(getTxt.texts.empty);
        return true;
    }
}