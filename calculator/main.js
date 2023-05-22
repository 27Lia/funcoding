// DOM 선택
const inputField = document.getElementById('inputField');
const numbtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

let n1 = 0; // 첫 번째 숫자

// num 버튼에 이벤트 핸들러 등록
numbtns.forEach((button) => {
    button.addEventListener("click", handleNumBtnClick);
  });  

// num 버튼 클릭 이벤트 핸들러
function handleNumBtnClick(event) {
    const num = event.target.innerText;
    handleBtnClick(num);
  }

// 숫자 입력 처리 함수
function handleBtnClick(num) {
    inputField.value += num;
  }

// clear 버튼 클릭 이벤트 핸들러
clearBtn.addEventListener("click", handleClearBtnClick);

// clear 버튼 클릭 처리 함수
function handleClearBtnClick(event) {
  inputField.value = '';
}

// 연산자 버튼에 이벤트 핸들러 등록
operatorBtns.forEach((button) => {
    button.addEventListener("click", handleOperatorBtnClick);
  });

// 연산자 버튼 클릭 이벤트 핸들러
function handleOperatorBtnClick(event) {
    let operator = event.target.innerText;
    handleOperatorClick(operator);
  }

// 연산자 처리 함수
function handleOperatorClick(operator) {
    n1 = Number(inputField.value);
    currentOperator = operator;
    inputField.value = '';
  }

// 합계 버튼 클릭 이벤트 핸들러
equalBtn.addEventListener("click", handleequalBtnClick);

// 합계 버튼 클릭 처리 함수
function handleequalBtnClick() {
    const n2 = Number(inputField.value);
    let result;

    if (currentOperator === '+') {
      result = n1 + n2;
    } else if (currentOperator === '-') {
      result = n1 - n2;
    } else if (currentOperator === '*') {
      result = n1 * n2;
    } else if (currentOperator === '/') {
      result = n1 / n2;
    }
  
    inputField.value = result;
}
    