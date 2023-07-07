

//sunny
  function createSunny() {
    const sunnyEl = document.getElementById('weatherimg');
    sunnyEl.classList.add("sunnybackground");

   }
//rain

// 빗방울 생성 함수
function createRaindrop() { 
  const rainEl = document.getElementById('weatherimg');
  rainEl.classList.add("rainbackground");

  const raindrop = document.createElement('div');
  raindrop.classList.add("raindrop");
  rainEl.appendChild(raindrop);   // rainEl에 raindrop 요소 추가
  raindrop.style.left = `${Math.random() * 100}%`;
 // 물방울 요소의 왼쪽 위치를 랜덤한 퍼센트 값으로 설정 0%부터 100% 사이의 값
  raindrop.style.animationDuration = `${Math.random() * 20 + 10}s`; // 물방울의 애니메이션 지속 시간을 랜덤한 값으로 설정 1초에서 10초 사이의 랜덤한 값 
}

//clouds
  function createClouds() {
    const CloudsEl = document.getElementById('weatherimg');
    CloudsEl.classList.add("cloudsbackground");
  }

//snow
  function createSnow() {
    const SnowEl = document.getElementById('weatherimg');
    SnowEl.classList.add("snowbackground");
    // 스탬프              
    const snow_init = () => {
      document.addEventListener("click", (e) => {
          const div = document.createElement("div")
          div.innerText = "⛈";
          div.style.fontSize = `${Math.random() * 8 + 2}rem`
          div.style.top = `calc(${e.y}px - 0.5em)`
          div.style.left = `calc(${e.x}px - 0.5em)`
          document.querySelector(".snow").appendChild(div)          
          document.querySelector(".snow .footprints").appendChild(div)
      })
    }
    
    snow_init();
  }


// 날씨 데이터를 처리하는 함수
function handleWeatherData(weather) {
    if ( weather === "Raiasn") {   //Rain 경우 
      for (let i = 0; i < 30; i++) {
        createRaindrop();
      }
    } 
        else if (weather === "d") { //Clouds 경우
          createClouds()
          
      } 
        else if (weather === "a") { //Sunny 경우
        // createSunny()
        // createRaindrop()
        // createClouds()
        createSnow()

      }
        else { // Snow경우
          // createSnow()
         createSunny()
        // createRaindrop()
        // createClouds()

      }}


      export { handleWeatherData };




  // function createSunny() {
  //   const sunnyEl = document.getElementById('sunny');
  //   sunnyEl.classList.add("sunnybackground");
  // }