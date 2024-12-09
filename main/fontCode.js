import * as mg from "../modules/methodsGeneral.js"
import * as getTxt from "../modules/getTexts.js"
import * as mv from "../modules/methodsVariables.js"


export function popup(){
    const mainConteiner = document.getElementById('mainConteiner');
    const exitPopup = document.getElementById('exit-popup');
    const exitPopupClose = document.getElementById('exit-popup-close');

    const hideMainConteiner = () => mainConteiner.style.display = 'none';
    const hideExitPopup = () => exitPopup.style.display = "none";
    const hideExitPopup2 = () => mainConteiner.style.display = 'block';
    const showExitPopup = () => exitPopup.style.display = "block";
    const setFocusInput = () => mg.setFocus('inputPrincipal');

    document.addEventListener('mouseleave', hideMainConteiner);
    document.addEventListener('mouseleave', showExitPopup);

    exitPopupClose.addEventListener('click', hideExitPopup);
    exitPopupClose.addEventListener('click', hideExitPopup2);
    exitPopupClose.addEventListener('click', setFocusInput);
}

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
    mg.insertHtml('dateFooter', '2017-' + mv.getDateYear());
    mg.insertHtml('currentDate', mv.getGreetingsDay() +  mv.getNameDay() + mv.getCopyPromo());
    mg.setBgColor('copyDate',mv.setPromoColor());
}

export function initialValidation(){
    if(mg.getLength('inputPrincipal') == 0){
        window.alert(getTxt.texts.empty);
        return true;
    }
}

export function hideSome(){
    mg.hideElement('avaliacoes');
    mg.hideElement('copyDate');
    // mg.hideElement('allFooter');
}

export function setHeadlines(){
    mg.setMarginTop('body', '60px');
    $("#headline").hide().slideDown(2000);
    mg.hideElement('tituloH2_1');
    mg.insertText('headline', getTxt.list.headlines[mv.getCounter()]);
    mg.setFontSize('headline', '25px');
    // mg.typeWriterHeadline();
}

export function concatLink(){
    if (mv.getCounter() <= 4){
        getTxt.list.input.push(String(mg.getValue('inputPrincipal')).toUpperCase());
        mv.setLinkWhats(`${getTxt.list.paddingInput[mv.getCounter()-1]}%20*${getTxt.list.input[mv.getCounter()-1]}*%20%0A`);
    }else if(mv.getCounter() == 11){
        mv.setLinkWhats(`Código da Oferta *@${Math.floor(Math.random() * 500) + 100}#cp${mv.randomCopy}#cl${mv.randomCopyColor}*`);
    }else{mg.setValue('botaoOk', getTxt.texts.botaoCiente);}
}

export function clearInput(){
    mg.setValue('inputPrincipal', '');
    mg.setFocus('inputPrincipal');
}

export function progressBar(){
    mv.setProgresso(9);
    mv.setLargura(60);
    mg.setWidth('barraProgresso', `${mv.getLargura()}px`);
    mg.showElement('barraProgresso');
    mg.insertText('barraProgresso', `${mv.getProgresso()}%`);
}

export function inputPlaceHolder(){
    mg.setPlaceHolder('inputPrincipal', getTxt.list.showPlaceHolders[mv.getCounter()]);
}

export function buttonFadeIn(){
    mg.hideElement('inputPrincipal');
    mg.hideElement('botaoOk');
    setTimeout(fadeIn, 5000);
    function fadeIn() {
        $("#inputPrincipal").fadeIn();
        $("#botaoOk").fadeIn();
        mg.setFocus('inputPrincipal');
    }
}

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