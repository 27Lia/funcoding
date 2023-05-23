import './App.css';
import {useState} from 'react'

function App() {
  let post = "강남 우동 맛집"; //서버에서 가져온 데이터라고 생각.
  let [글제목, 글제목변경] = useState(['일상', '다이빙', '취미'])  
  let [like,c] = useState(0);
  // let [a,d] = useState(['다이빙','공부', '취미']) 
  // function addLike() { //span 이벤트속성에 담긴 함수
  //   c(like+1)
  // }

  return (
    <div className="app">
      <div className="nav">
        <h4>BLOG</h4>
      </div>
      <div className='btn'>
      <button onClick={()=>{
        let arr= [...글제목];
        글제목변경(arr.sort());
      }}>정렬</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '변경되는 값'
        글제목변경(copy);
        }}>변경하기</button>
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick = {() => { c(like+1)} }>💜</span>{like}</h4>
        <p>5월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>5월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>5월 23일 발행</p>
      </div>
    </div>   
  );
}

export default App;
