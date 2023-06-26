fetch('https://api.qwer.pw/request/helpful_text?apikey=guest')
  .then(response => response.json())
  .then(data => {
    const respondObj = data[1];
    if (respondObj && respondObj.respond) {
      const respond = respondObj.respond;
      const quotes = document.getElementById('quotes');
      quotes.textContent = respond;
    } else {
      console.error('명언 데이터를 가져오는 데 실패했습니다.');
    }
  })
  .catch(error => {
    console.error('API 요청 실패:', error);
    // 에러를 처리하는 추가 작업을 수행할 수 있습니다.
    // 예를 들어, 사용자에게 오류 메시지를 표시하는 등의 작업을 수행할 수 있습니다.
  });
