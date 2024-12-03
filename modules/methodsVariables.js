import * as gt from "./getTexts.js"

//ATRIBUTOS

let progresso = 0;
let largura = 0;
let contador = 0;
let linkWhatsApp = gt.texts.linkWhats;
let dayWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
let semester1 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
let semester2 = ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let fullYear = [...semester1, ...semester2];
const date = new Date();
const periodDay = date.getHours();

//MÉTODOS

/**
 * @returns 
 */
export function getGreetingsDay(){
    if(periodDay >= 6 && periodDay < 12){
        return "<STRONG>BOM DIA</STRONG>,";
    }else if(periodDay >= 12 && periodDay < 18){
        return "<STRONG>BOA TARDE</STRONG>,";
    }else{
        return "<STRONG>BOA NOITE</STRONG>,";
    }
}

/**
 * @returns 
 */
export function getNameMonth(){return fullYear.at(date.getMonth())}

/**
 * @returns 
 */
export function getNameDay(){return dayWeek.at(date.getDay())}

/**
 * @returns 
 */
export function getDateYear(){return date.getFullYear()}

/**
 * return **linkWhatsApp**
 * @returns 
 */
export function getLinkWhats(){return linkWhatsApp}

/**
 * return **progresso**
 * @returns 
 */
export function getProgresso(){return progresso}

/**
 * return **largura**
 * @returns 
 */
export function getLargura(){return largura}

/**
 * return **contador**
 * @returns 
 */
export function getCounter(){return contador}

/**
 * linkWhatsApp += **value**
 * @param {string} value 
 */
export function setLinkWhats(value){linkWhatsApp += value;}

/**
 * progresso += **value**
 * @param {int} value 
 */
export function setProgresso(value){progresso += value}

/**
 * largura += **value**
 * @param {int} value 
 */
export function setLargura(value){largura += value}

/**
 * **contador++**
 * @param {int} value 
 */
export function incrementCounter(){contador++}

