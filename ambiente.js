const dateYear = new Date();
const periodDay = 17;

if(periodDay >= 6 && periodDay < 12){
    return console.log("BOM DIA!");
}else if(periodDay >= 12 && periodDay < 18){
    return console.log("BOA TARDE!");
}else{
    return console.log("BOA NOITE!");
}