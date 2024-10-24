//VETOR
let nome = [];
let listaPlaceHolders = ["JÁ TEM CONTA NO GOOGLE ADS?","INFORME SEU SITE","INFORME SEU PRINCIPAL SERVIÇO"];
let c = 0;

//ESCONDER BOTÃO DE WHATSAPP
let botaoWhatsapp = document.querySelector('.wrapper');
botaoWhatsapp.style.display = "none";

//TEMPORÁRIO PARA TESTES
inputPrincipal.style.display = "";
botaoOk.style.display = "";

inputPrincipal.focus();
function execucao(){ 
    let inputPrincipal = document.getElementById('inputPrincipal');
    let botaoOk = document.getElementById('botaoOk');
    let borda = document.getElementById('bordaPrincipal');
    let img = document.getElementById('imgCarlos');
    

    if(inputPrincipal.value.length == 0){
        window.alert('O CAMPO NÃO PODE FICAR VAZIO')
    }else{
        nome.push(inputPrincipal.value);
        inputPrincipal.value = '';
        inputPrincipal.placeholder = listaPlaceHolders[c];
        c++;
        
        if(nome.length == 4){
            inputPrincipal.style.display = "none";
            botaoOk.style.display = "none";
            botaoWhatsapp.style.display = "";
        }

    }
    inputPrincipal.focus();
    window.alert(nome);
}

