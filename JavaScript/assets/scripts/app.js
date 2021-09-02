/*declaring  and assigning variable*/
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let logEntry = {} ;

function getUserNumberInput(){
    return parseInt(userInput.value);

}
function calculationDescription(operator, enteredNum,firsNum){
     const calcDescription  = `${firsnum} ${operator} ${enteredNum}`
     return calcDescription
}

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
    const calcDescription = `${currentResult} + ${gotNum}`;
    const initialNum = currentResult;
    let mathOperator;
    if(calculationType == 'ADD'){
        currentResult += gotNum;
        mathOperator = '+'
    }
    else{
        currentResult -= gotNum;
        mathOperator = '-'

    }    
    outputResult(currentResult, calculationDescription);
    writeLog(calculationType,gotNum,initialNum,currentResult)
}

function addNum(){
    calculateResult('ADD');    
}

function multiplyNum(){
    const gotNum = getUserNumberInput();
    const calcDescription = `${currentResult} * ${gotNum}`;
    const initialNum = currentResult;
    currentResult *= gotNum;
    outputResult(currentResult, calcDescription);
    writeLog('MULTIPLY',gotNum,initialNum,currentResult)
}

function divideNum(){
    const gotNum = getUserNumberInput();
    const calcDescription = `${currentResult} / ${gotNum}`;
    const initialNum = currentResult;
    currentResult /= gotNum;
    outputResult(currentResult, calcDescription);
    writeLog('DIVIDE',gotNum,initialNum,currentResult)
}
function subtractNum(){
    calculateResult('SUBTRACT')    
}
addBtn.addEventListener('click',addNum);
subtractBtn.addEventListener('click',subtractNum);
divideBtn .addEventListener('click',divideNum);
multiplyBtn.addEventListener('click',multiplyNum);