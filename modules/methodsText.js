import * as t from "../texts/texts.js"

/**
 * @returns 
 */
export function emptyField(){return t.texts.empty}

/**
 * @returns 
 */
export function botaoCiente(){return t.texts.ciente}

/**
 * @returns 
 */
export function linkWhats(){return t.texts.linkWhats}

/**
 * 
 */
export let list = {
    input:[],

    paddingInput:["Nome:", "Tem conta no Google Ads:", "Site:", "Principal Serviço:"],

    showPlaceHolders:[
        //NOME DO CLIENTE
        "RESPONDA SIM OU NÃO", // 2
        "INFORME O ENDEREÇO DO SEU SITE", // 3
        "INFORME SEU PRINCIPAL SERVIÇO", // 4
        "RESPONDA SIM PARA CONTINUAR", // 5
        "RESPONDA OK", // 6
        "RESPONDA OK", // 7
        "RESPONDA OK", // 8
        "RESPONDA OK", // 9
        "RESPONDA OK", // 10
        "RESPONDA OK", // 11
        "RESPONDA OK", // 12
    ],
    
    headlines:[
        //NOME DO CLIENTE
        `Já tem conta no Google Ads? Se sim, ótimo, pois facilitará o início do trabalho. Caso ainda não tenha, não se preocupe, vamos te ajudar a criar e configurar da forma certa!`, // 2
        `Já tem Site? Para Garantir Resultados no Google, é obrigatório ter um Site Otimizado e um Excelente Atendimento. Caso não tenha um site ou precise de melhorias, vamos te ajudar!`, // 3
        `Qual é o Principal Serviço que você deseja vender? Com base na sua resposta, nós vamos definir o orçamento semanal ideal da sua campanha e evitar gastos desnecessários! `, // 4
        `Nós GARANTIMOS os RESULTADOS da sua empresa no Google, mas existem 7 condições que precisam ser obedecidas para chegarmos lá. Responda SIM para conhecer as condições.`, // 5
        `(1) O saldo de publicidade da sua conta não pode ZERAR. Normalmente solicitamos que seja adicionado saldo uma vez por semana. Sem saldo os anúncios não aparecem no Google.`, // 6
        `(2) Seu site precisa VENDER. Isso significa que a comunicação do seu site precisa ser OTIMIZADA para vendas, isso aumentará muito sua taxa de cliques no whatsapp.`, // 7
        `(3) Seu atendimento deve ser EXCELENTE. Ofereça sempre o melhor atendimento, isso aumentará muito sua taxa de vendas das pessoas que chegarão no seu Whatsapp através do Google.`, // 8
        `(4) Seu Whatsapp deve ser COMERCIAL. Evite usar seu contato pessoal para atender as pessoas que chegarão pelo Google. Ter um Whatsapp Comercial passará confiança e credibilidade. `, // 9
        `(5) Preencha todos os dados do PERFIL do seu Whatsapp Comercial. Vá em configurações no seu Whatsapp e mantenha preenchidos os dados da sua empresa.`, // 10
        `(6) Vocé é FUNDAMENTAL. Precisamos da sua colaboração para dar certo. Contamos com a sua disponibilidade para nos fornecer as informações que possamos precisar ao longo do trabalho.`, // 11
        `(7) Fazer a sua empresa vender com CONSISTÊNCIA pode levar até 3 meses. Você verá resultados logo nos primeiros 15 dias, porém o processo de otimização do Google Ads é CONTÍNUO. `, // 12
    ],
    finalText:[
        'As informações preenchidas ainda não foram enviadas. Todas as informações serão enviadas automaticamente pelo Whatsapp Web clicando no botão abaixo.'
    ]
}