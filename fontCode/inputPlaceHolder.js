import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function inputPlaceHolder(){
    mg.setPlaceHolder('inputPrincipal', getTxt.list.showPlaceHolders[mv.getCounter()]);
}