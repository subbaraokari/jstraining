const userInput=document.getElementById("input-number");
const addBtn=document.getElementById('add-btn');
const subBtn=document.getElementById('sub-btn');
const mulBtn=document.getElementById('mul-btn');
const divBtn=document.getElementById('div-btn');

const calcDescOutput=document.getElementById('calc-desc');
const calcResultOutput=document.getElementById('calculator-result');
function outputResult(result,text)
{
    
    calcResultOutput.textContent=result;
    calcDescOutput.textContent=text;
}