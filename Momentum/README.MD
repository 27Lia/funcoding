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

