'use strict'

const buttonResult = document.getElementById('sumresult');
const sumResultCase = document.getElementById('sumresult__case');

buttonResult.addEventListener('click', (event) => {
    const numberOne = document.getElementById('numberone').value;
    const numberTwo = document.getElementById('numbertwo').value;
    const operatorSymbol = document.getElementById('operator').value;
    let resultDetection;

    event.preventDefault();

    if (numberOne === '') {
        return console.log('Первое число не указано');
    };

    if (numberTwo === '') {
        return console.log('Второе число не указано');
    };

    if (isNaN(numberOne) === true || isNaN(numberTwo) === true) {
        sumResultCase.innerText = 'Некорректный ввод чисел';
        return console.log('Некорректный ввод чисел');
    };

    switch (operatorSymbol) {
        case '': return console.log('Не введён знак'); break;
        case '+': resultDetection = Number(numberOne) + Number(numberTwo); break;
        case '-': resultDetection = Number(numberOne) - Number(numberTwo); break;
        case '/': resultDetection = Number(numberOne) / Number(numberTwo); break;
        case '*': resultDetection = Number(numberOne) * Number(numberTwo); break;
        default: return sumResultCase.innerText = 'Программа не поддерживает такую операцию', console.log('Программа не поддерживает такую операцию'); break;
    };
    if (isNaN(resultDetection)) {
        sumResultCase.innerText = 'Операция некорректна';
        return console.log('Операция некорректна');
    };

    if (resultDetection === Infinity || resultDetection === -Infinity) {
        sumResultCase.innerText = 'Операция некорректна';
        console.log('Операция некорректна');
    }
    else {
        sumResultCase.innerText = `Ответ: ${resultDetection}`;
        console.log(resultDetection);
    };

});