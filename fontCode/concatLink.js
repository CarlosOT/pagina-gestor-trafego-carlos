import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"

export function concatLink(){
    if (mv.getCounter() <= 4){
        getTxt.list.input.push(String(mg.getValue('inputPrincipal')).toUpperCase());
        mv.setLinkWhats(`${getTxt.list.paddingInput[mv.getCounter()-1]}%20*${getTxt.list.input[mv.getCounter()-1]}*%20%0A`);
    }else{
        mg.setValue('botaoOk', getTxt.texts.botaoCiente);
    }
}