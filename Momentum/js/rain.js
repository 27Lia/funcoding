
// 빗방울 생성 함수
function createRaindrop() {
    const rainEl = document.getElementById('rain');
    rainEl.classList.add("rainbackground");
  
    const raindrop = document.createElement('div');
    raindrop.classList.add("raindrop");
    rainEl.appendChild(raindrop);   // rainEl에 raindrop 요소 추가
    raindrop.style.left = `${Math.random() * 100}%`;
   // 물방울 요소의 왼쪽 위치를 랜덤한 퍼센트 값으로 설정 0%부터 100% 사이의 값
    raindrop.style.animationDuration = `${Math.random() * 20 + 10}s`; // 물방울의 애니메이션 지속 시간을 랜덤한 값으로 설정 1초에서 10초 사이의 랜덤한 값 
  }



  function createSunny() {
    const sunnyEl = document.getElementById('sunny');
    sunnyEl.classList.add("sunnybackground");
  }

// 날씨 데이터를 처리하는 함수
function handleWeatherData(weather) {
    if ( weather === "Rain") {   //Rain 경우 
      for (let i = 0; i < 30; i++) {
        createRaindrop();
      }
    } 
        else if (weather === "Mist") {
          createSunny()
          
      } 
        else if (weather === "sunny") {
        document.body.style.backgroundImage = "url(sunny.jpg)";
      }
        else {
      document.body.style.backgroundImage = "url(clear.jpg)";
      }}




// 스탬프              
      const snow_init = () => {
        document.addEventListener("click", (e) => {
            const div = document.createElement("div")
            div.innerText = "⛈";
            div.style.fontSize = `${Math.random() * 8 + 2}rem`
            div.style.top = `calc(${e.y}px - 0.5em)`
            div.style.left = `calc(${e.x}px - 0.5em)`
            document.querySelector(".snow").appendChild(div)          
            document.querySelector(".snow .footprints").appendChild(div) // 스탬프찍을때 참고.
        })
      }
      
      snow_init();

      export { handleWeatherData };
