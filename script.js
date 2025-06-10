"use strict";

let prazdnyPole = JSON.parse(localStorage.getItem("result")) || []

const operationDisplay = document.querySelector(".operation-display");
const container = document.querySelector('.padding-text');

function roundTo3Decimals(num) {
  return Math.round(num * 1000) / 1000;
}

function convertCharacters(inputString) {
  if (typeof inputString !== 'string') {
    console.warn("Vstup není řetězec. Pokouším se převést na řetězec.");
    inputString = String(inputString);
  }
  let convertedString = inputString.replace(/÷/g, '/');
  convertedString = convertedString.replace(/×/g, '*');
  return convertedString;
}

operationDisplay.textContent = "";
let shouldClearInput = false;

function calcFunc(value) {
  if (shouldClearInput) {
    operationDisplay.textContent = "";
    shouldClearInput = false;
  }
  operationDisplay.textContent += value;
}

function clearInput() {
  operationDisplay.textContent = "";
  shouldClearInput = false;
}

function calsFuncEqual() {
  try {
    const expressionToEvaluate = convertCharacters(operationDisplay.textContent);
    const result = roundTo3Decimals(math.evaluate(expressionToEvaluate));

    operationDisplay.textContent = result;

    if (container) {
      const reusableResults = document.createElement('div');
      reusableResults.className = 'reusable-results';

      const resultField = document.createElement('div');
      resultField.className = 'data-input-field result';

      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = result;

      resultField.appendChild(resultParagraph);

      const penPicsField = document.createElement('div');
      penPicsField.className = 'data-input-field pen-pics';

      const penImage = document.createElement('img');
      penImage.title = 'Použít znovu jako výsledek';
      penImage.src = '/pics/pen.svg';
      penImage.alt = 'reuse-the-result';
      penPicsField.appendChild(penImage);

      reusableResults.appendChild(resultField);
      reusableResults.appendChild(penPicsField);

      container.appendChild(reusableResults);

      prazdnyPole.push(resultParagraph.textContent)

      penImage.onclick = function() {
        operationDisplay.textContent += result;
        shouldClearInput = false;
      };

    } else {
      console.error('Element s třídou "padding-text" nebyl nalezen.');
    }
    shouldClearInput = true;
  } catch (error) {
    operationDisplay.textContent = "Chybný výraz!";
    shouldClearInput = true;
  }
}

function clearFunc(){
  container.innerHTML = ""
  localStorage.removeItem("result");
  prazdnyPole = []
}

function saveFunc(){
  localStorage.setItem("result", JSON.stringify(prazdnyPole))
}

let saveResultFromLS = JSON.parse(localStorage.getItem("result"))

saveResultFromLS.forEach(function(values){
  try {
    const expressionToEvaluate = convertCharacters(operationDisplay.textContent);
    const result = roundTo3Decimals(math.evaluate(expressionToEvaluate));

    if (container) {
      const reusableResults = document.createElement('div');
      reusableResults.className = 'reusable-results';

      const resultField = document.createElement('div');
      resultField.className = 'data-input-field result';

      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = values;

      resultField.appendChild(resultParagraph);

      const penPicsField = document.createElement('div');
      penPicsField.className = 'data-input-field pen-pics';

      const penImage = document.createElement('img');
      penImage.title = 'Použít znovu jako výsledek';
      penImage.src = '/pics/pen.svg';
      penImage.alt = 'reuse-the-result';
      penPicsField.appendChild(penImage);

      reusableResults.appendChild(resultField);
      reusableResults.appendChild(penPicsField);

      container.appendChild(reusableResults);

      prazdnyPole.push(resultParagraph.textContent)

      penImage.onclick = function() {
        operationDisplay.textContent += values;
        shouldClearInput = false;
      };

    } else {
      console.error('Element s třídou "padding-text" nebyl nalezen.');
    }
    shouldClearInput = true;
  } catch (error) {
    operationDisplay.textContent = "Chybný výraz!";
    shouldClearInput = true;
  }
})