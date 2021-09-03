/*declaring  and assigning variable*/
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let logEntry = {} ;

function getUserNumberInput(){
    return parseInt(userInput.value);

}
/*function calculationDescription(operator, enteredNum,firsNum){
     const calcDescription  = `${firsnum} ${operator} ${enteredNum}`;
    
}*/

function writeLog(oper,fNum,secdNum,resltNum){
    logEntry = {
        operation:oper,
        firstNum : fNum,
        secNum: secdNum,
        resultant: resltNum
    };
    logEntries.push(logEntry);
    console.log(logEntries);

}

function calculateResult(calculationType){
    const gotNum = getUserNumberInput();
    const initialNum = currentResult;
    let mathOperator;
    
    if(calculationType === 'ADD'){
        currentResult += gotNum;
        mathOperator = '+'
    }else if(calculationType === 'SUBTRACT'){
        currentResult -= gotNum;
        mathOperator = '-'
    }else if(calculationType === 'MULTIPLY'){
         currentResult *= gotNum;
         mathOperator = '*';

    }else if (calculationType === 'DIVIDE') {
         currentResult /= gotNum;
         mathOperator = '/';
    }
    outputResult(currentResult);
    writeLog(calculationType,gotNum,initialNum,currentResult);
}
    
function addNum(){
    calculateResult('ADD');    
}
function multiplyNum(){
    calculateResult('MULTIPLY');  
}
function divideNum(){
    calculateResult('DIVIDE');  
}
function subtractNum(){
    calculateResult('SUBTRACT')    
}
addBtn.addEventListener('click',addNum);
subtractBtn.addEventListener('click',subtractNum);
divideBtn .addEventListener('click',divideNum);
multiplyBtn.addEventListener('click',multiplyNum);