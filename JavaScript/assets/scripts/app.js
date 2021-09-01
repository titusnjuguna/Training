/*declaring  and assigning variable*/
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let logEntry = {} ;

function getUserNumberInput(){
    return parseInt(userInput.value);

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



function addNum(){
    const gotNum = getUserNumberInput();
    const calcDescription = `${currentResult} + ${gotNum}`;
    const initialNum = currentResult;
    currentResult += gotNum;
    outputResult(currentResult, calcDescription);
    writeLog('ADD',gotNum,initialNum,currentResult)
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
    const gotNum = getUserNumberInput();
    const calcDescription = `${currentResult} - ${gotNum}`;
    const initialNum = currentResult;
    currentResult -= gotNum;
    outputResult(currentResult, calcDescription);
    writeLog('SUBTRACT',gotNum,initialNum,currentResult)
}
addBtn.addEventListener('click',addNum);
subtractBtn.addEventListener('click',subtractNum);
divideBtn .addEventListener('click',divideNum);
multiplyBtn.addEventListener('click',multiplyNum);