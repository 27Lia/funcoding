//weather.js

// weather 요소를 선택하여 weather 변수에 할당
const weather = document.querySelector("#weather span:first-child");
// city 요소를 선택하여 city 변수에 할당
const city = document.querySelector("#weather span:last-child");

// rain
const rainEl = document.getElementById('rain');
rainEl.classList.add('rains');

// raindrops
const raindropsel = document.getElementById('raindrop');
raindropsel.classList.add('raindrops');

raindrop.querySelectorAll("div").forEach((div) => {
  // div.classList.add("raining");
  div.style.backgroundImage = "url(./img/rain.png)";
});


// 현재 위치 정보를 가져올 때 호출되는 콜백 함수
function onGeoOk(position) {
  // 현재 위치의 위도와 경도 값을 변수에 할당
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // OpenWeatherMap API를 사용하여 날씨 정보를 가져올 URL 생성
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=294d65c2eb13f1961d03f39fc53fb202&units=metric`;
  // 생성된 URL로 API 요청을 보내고 응답 데이터를 처리
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // API 응답 데이터에서 도시 이름을 가져와 city 요소의 내용으로 설정
      city.innerText = data.name;
      // API 응답 데이터에서 날씨 정보와 온도를 가져와 weather 요소의 내용으로 설정
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

      //Rain 경우 
      if (data.weather[0].main === "Clouds") {
        rainEl.style.backgroundImage = "url(./img/rainbowv.png)"; // 배경이미지
        raindropsel.style.backgroundImage = "url(./img/rain.png)"; // 움직이는 이미지 -> rain에 적용할것임. 

        // const rain_init = () => {
        //   document.addEventListener("click", (e) => {
        //       const div = document.createElement("div")
        //       div.innerText = "⛈";
        //       div.style.fontSize = `${Math.random() * 8 + 2}rem`
        //       div.style.top = `calc(${e.y}px - 0.5em)`
        //       div.style.left = `calc(${e.x}px - 0.5em)`
        //       document.querySelector(".rain").appendChild(div)          
                  //  document.querySelector(".rain .footprints").appendChild(div) // 스탬프찍을때 참고.

          // })
        // }
        
        // rain_init();
        
      } else if (data.weather[0].main === "Clouds") {
        document.body.style.backgroundImage = "url(Clouds.jpg)";
      } 
        else if (data.weather[0].main === "sunny") {
          document.body.style.backgroundImage = "url(sunny.jpg)";
        }
      else {
        document.body.style.backgroundImage = "url(clear.jpg)";
      }
    });
}

// 현재 위치 정보를 가져오지 못했을 때 호출되는 콜백 함수
function onGeoError() {
  // 위치 정보를 가져올 수 없을 때 알림 메시지 출력
  alert("Can't find you. No weather for you.");
}

// 현재 위치 정보를 요청하여 성공 또는 실패 시 콜백 함수 호출
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


