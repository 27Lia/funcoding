const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function loginBtnClick() {
    console.dir(loginInput.value); // console.dir() 메서드를 사용하여 DOM 요소를 출력하면, 해당 요소의 속성들과 값을 확인
}

loginButton.addEventListener("click", loginBtnClick); // 이벤트 먼저 만들어주고 loginBtnClick함수 생성
//이벤트를 등록할 요소.메서드("이벤트이름", 콜백함수(이벤트가 발생했을 때 실행할함수))

