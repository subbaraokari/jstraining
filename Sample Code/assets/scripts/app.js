let defaultValue=0;
let currentResult=defaultValue;
function getUserInput()
{
    return parseInt(userInput.value);
}
function writeData(operator,resultBeforeCalc,enteredNumber){
    let calcDesc=`${resultBeforeCalc}${operator}${enteredNumber}`;
    let calcResult=currentResult+enteredNumber;
    outputResult(calcResult,calcDesc);
}
function add(){
    let enteredNumber=getUserInput();
    let initialResult=currentResult;
    currentResult=currentResult+enteredNumber;
    let calcDescription=writeData('+',initialResult,enteredNumber);
    writeData('+',initialResult,enteredNumber);
}
function substract(){
    let enteredNumber=getUserInput();
    let initialResult=currentResult;
    currentResult-=enteredNumber; 
    let calcDescription=writeData('-',initialResult,enteredNumber);
    writeData('-',initialResult,enteredNumber); 
}
addBtn.addEventListener('click',add);
subBtn.addEventListener('click',substract);