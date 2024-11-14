import * as gt from "./getTexts.js"

//ATRIBUTOS

let progresso = 0;
let largura = 0;
let contador = 0;
let linkWhatsApp = gt.texts.linkWhats;

//MÉTODOS

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