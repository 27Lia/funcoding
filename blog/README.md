// JSX문법
// 1. css 사용 시 className  
// 2. 변수 사용 시 {} 중괄호 모든곳에 할수있음 데이터바인딩이라고 함 (원래는 dom사용)
// 3. style 넣을때
// - style={color:red}
// - style 여러개면 style={{color:red, fontSize:20px}} 객체로
// - 대시(-)는 쓰면안됨, 카멜로 작성

// State 문법
// => 변수와 State의 차이점은 변수의 값이 변경이 되면 html에 자동반영이 안됨 State는 html이 자동 리렌더링됨
// 자료를 잠깐 저장하는 것
// state 만드는 법
// 1. import{useState}
// 2. useState('보관할자료')
// 3. let [작명, 작명]
// => let [a,b] = useState('자료저장.')  
// - a는 변수 사용시 {}쓰는거랑 똑같음.{a}하면 자료저장이 보임.
// - b는 state 변경을 도와주는 함수!
//4. state 만들 때 []배열 만들어서 데이터가 여러개라면 ex(let [a,b] = useState(['하나', '둘']) state사용 시 {변수 명[0]} 이렇게 인덱스 사용가능
// Destructuring 문법
// let num = [a, b] = [1, 2];
// 변수 a는 1 변수 b는 2

// state변경 하는 법
// 1. state 변경 함수 사용 => {state변경함수(새로운state)} ex) {addlike(2)}
// => 소괄호안에 넣은 내용으로 state값을 바꿔줌.
// 2. 기존, 신규 state값이 같으면 변경안해줌
// 3.

//onCLick={}안에 함수이름 적어야함.
//onCLick = {() => {console.log(1)}} 이렇게 사용 가능
