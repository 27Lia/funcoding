const loginForm = document.querySelector("#login-form"); //loginForm으로부터 시작되는 새로고침되니까 login-form을 선택해줌
const loginInput = document.querySelector("#login-form input"); // loginForm 안에서 input 요소를 찾아 loginInput 변수에 할당
const link = document.querySelector("a"); // 첫 번째 a 태그를 선택하여 link 변수에 할당
const greeting = document.querySelector("#greeting");



// user가 submit할 때 실행되는 loginSubmit 함수
function loginSubmit(event){ // loginForm이 제출될 때 실행되는 함수 loginSubmit을 정의
    event.preventDefault(); // 이벤트 기본동작(새로고침)방지하기위해 호출
    loginForm.classList.add("hidden"); // 함수 실행 후 클래스가 추가됨.
    const username = loginInput.value;
    localStorage.setItem("username", username); // (저장될 아이템 이름,변수)(key,value)
    paintGreetings(username);
}

// username을 매개변수로 받아 greeting 요소의 텍스트를 수정하고, "hidden" 클래스를 제거하는 함수 결국, h1요소가 보여지게하는 함수!
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

// localStorage에서 "username" key의 value를 가져옴(사용자가 입력한 이름이 값이됨)
const savedUsername = localStorage.getItem("username");  

// local storage에 있는 유저정보 유무 확인하는 조건문
if (savedUsername === null) {
  loginForm.classList.remove("hidden") // 처음 화면에서 login-form,greeting 모두 hidden상태였기 때문에 유저값이 null인경우 login-form을 보이게함
  loginForm.addEventListener('submit', loginSubmit) // loginForm에 submit 이벤트 리스너를 추가, 폼이 제출될 때 loginSubmit 함수가 실행
}
else { 
    paintGreetings(savedUsername); 
}

// .login-form은 선택하는 이유는 새로고침은 login-form으로 부터 시작되니까~
// form의 기본동작은 Submit다.
//  event.preventDefault() 이벤트 기본동작을 방지하기 위해 쓰임.
// 이벤트 리스너를 추가하고자 하는 요소.addEventListener('이벤트 종류', 함수명) -> event가 실행될 함수를 만들어야지.! 그 함수에는 이벤트를 받을 매개변수가 있어야하는것. 까먹지말기
// .remove DOM 요소에서 클래스를 제거하는 메서드
// .localStorage.setItem(key,value)은 Local Storage에 데이터를 저장하는 메서드, 데이터는 "key"와 "value"의 형태로 저장(개발자도구 어플리케이션창에서 확인가능), 저장된 데이터는 문자열 형태로 저장
// local storage에 유저정보가 있으면 form이 보여지면 안됨 h1요소를 보여주어야함 -> 이미 로그인된거니깐 ! -> 결국 local storage에 유저정보 유무를 확인하는 작업 필요
// getItem() 메서드를 호출하면 키의 값(value)이 반환됨, 값을 변수에 할당하여 사용할 수 있음.
// .remove() 메서드는 DOM에서 요소를 제거하는 역할을 함.
// localStorage에는 array 저장이 불가함. 오직 텍스트만 저장 가능
// JSON.stringify() 함수는 JSON 문자열로 직렬화함.
// JSON.parse() 함수는 문자열을 JavaScript 객체나 배열로 변환.
// forEach() 는 array의 각 item에 대해 function를 실행하게 해줌.

// # JavaScript 객체를 JSON 문자열로 변환하고 다시 객체로 변환
// const obj = {"name": "John", "age": 30, "city": "New York"};
// const jsonString = JSON.stringify(obj); // 출력값 문자열 {"name":"John","age":30,"city":"New York"}
// JSON.parse(jsonString); // 출력값 객체 {name: 'John', age: 30, city: 'New York'}

