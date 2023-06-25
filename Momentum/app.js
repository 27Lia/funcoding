const loginForm = document.querySelector("#login-form"); //loginForm으로부터 시작되는 새로고침되니까 login-form을 선택해줌
const loginInput = document.querySelector("#login-form input"); // loginForm 안에서 input 요소를 찾아 loginInput 변수에 할당
const link = document.querySelector("a"); // 첫 번째 a 태그를 선택하여 link 변수에 할당
const greeting = document.querySelector("#greeting");

// user가 submit할 때 실행되는 loginSubmit 함수
function loginSubmit(event){ // loginForm이 제출될 때 실행되는 함수 loginSubmit을 정의
    event.preventDefault(); // 이벤트 기본동작(새로고침)방지하기위해 호출
    loginForm.classList.add("hidden"); // 함수 실행 후 클래스가 추가됨.
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove("hidden"); // "hidden" 클래스를 제거하는 코드 -> h1태그의 hidden클래스를 삭제해주어야 username을 화면에서 볼수있음. 
}

// function linkclick(event){ // link가 클릭될 때 실행되는 함수 linkclick을 정의
//     event.preventDefault(); // 이벤트 기본동작(링크클릭시 이동)방지하기위해 호출
// }

loginForm.addEventListener('submit', loginSubmit) // loginForm에 submit 이벤트 리스너를 추가, 폼이 제출될 때 loginSubmit 함수가 실행
// link.addEventListener('click', linkclick) // link에 click 이벤트 리스너를 추가, 링크가 클릭될 때 linkclick 함수가 실행





//.login-form은 선택하는 이유는 새로고침은 login-form으로 부터 시작되니까~
//form의 기본동작은 Submit다.
//  event.preventDefault() 이벤트 기본동작을 방지하기 위해 쓰임.
// 이벤트 리스너를 추가하고자 하는 요소.addEventListener('이벤트 종류', 함수명) 
// .remove DOM 요소에서 클래스를 제거하는 메서드