const loginForm = document.querySelector("#login-form"); //loginForm으로부터 시작되는 새로고침되니까 login-form을 선택해줌
const loginInput = document.querySelector("#login-form input"); // loginForm 안에서 input 요소를 찾아 loginInput 변수에 할당
const link = document.querySelector("a"); // 첫 번째 a 태그를 선택하여 link 변수에 할당
const greeting = document.querySelector("#greeting");

// user가 submit할 때 실행되는 loginSubmit 함수
function loginSubmit(event){ // loginForm이 제출될 때 실행되는 함수 loginSubmit을 정의
    event.preventDefault(); // 이벤트 기본동작(새로고침)방지하기위해 호출
    loginForm.classList.add("hidden"); // 함수 실행 후 클래스가 추가됨.
    const username = loginInput.value;
    localStorage.setItem("username", username); // (저장될 아이템 이름,변수)
    greeting.innerText = `Hello ${username}`; // username 값을 "username"이라는 키로 로컬 스토리지에 저장
    greeting.classList.remove("hidden"); // "hidden" 클래스를 제거하는 코드 -> h1태그의 hidden클래스를 삭제해주어야 username을 화면에서 볼수있음. 
}

const savedUsername = localStorage.getItem("username");

// local storage에 있는 유저정보 유무 확인하는 조건문
if (savedUsername === null) {
  loginForm.classList.remove("hidden") // 처음 화면에서 login-form,greeting 모두 hidden상태였기 때문에 유저값이 null인경우 login-form을 보이게함
  loginForm.addEventListener('submit', loginSubmit) // loginForm에 submit 이벤트 리스너를 추가, 폼이 제출될 때 loginSubmit 함수가 실행
}
else {
  greeting.classList.remove("hidden"); // user값이 있는 경우 hidden 클래스 삭제
  greeting.innerText = `Hello ${savedUsername}`; // {username}이 아닌 이유는 지금은 localstorage에 있는 "username" 이름을 확인하는거니까.. 
}




 




//.login-form은 선택하는 이유는 새로고침은 login-form으로 부터 시작되니까~
//form의 기본동작은 Submit다.
//  event.preventDefault() 이벤트 기본동작을 방지하기 위해 쓰임.
// 이벤트 리스너를 추가하고자 하는 요소.addEventListener('이벤트 종류', 함수명) 
// .remove DOM 요소에서 클래스를 제거하는 메서드
// .localStorage.setItem(key,값)은 Local Storage에 데이터를 저장하는 메서드, 데이터는 "key"와 "value"의 형태로 저장(개발자도구 어플리케이션창에서 확인가능), 저장된 데이터는 문자열 형태로 저장
// local storage에 유저정보가 있으면 form이 보여지면 안됨 h1요소를 보여주어야함 -> 이미 로그인된거니깐 ! -> 결국 local storage에 유저정보 유무를 확인하는 작업 필요