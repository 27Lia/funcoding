const loginForm = document.querySelector(".login-form"); //loginForm으로부터 시작되는 새로고침되니까 login-form을 선택해줌
const loginInput = document.querySelector(".login-form input");
const link = document.querySelector("a");

function loginSubmit(event){
    event.preventDefault(); // 이벤트 기본동작(새로고침)방지하기위해 호출
}

function linkclick(event){
    event.preventDefault(); // 이벤트 기본동작(링크클릭시 이동)방지하기위해 호출
}

loginForm.addEventListener('submit', loginSubmit) //loginform 기본동작은 submit
link.addEventListener('click', linkclick) // 링크를 클릭했을 때 이벤트



//.login-form은 선택하는 이유는 새로고침은 login-form으로 부터 시작되니까~
//form의 기본동작은 Submit다.
//
//  event.preventDefault() 이벤트 기본동작을 방지하기 위해 쓰임.
