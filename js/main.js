document.addEventListener("DOMContentLoaded", function() {
  const slideTitleHorizontal = document.querySelector(".hero__slideTitle--horizontal");
  const slideTitleVertical = document.querySelector(".hero__slideTitle--vertical");

  slideTitleHorizontal.style.animationPlayState = "running";
  slideTitleVertical.style.animationPlayState = "running";
});
//ページの読み込みが完了したタイミングで、DOMContentLoadedイベントをトリガーして、アニメーション "horizontal", "vertical"など を発火させる。animationPlayStateプロパティを "running" に設定することで、アニメーションを開始します。


// カウントダウン
function countdown() {
    const now = new Date();
    const eventDate = new Date(2023, 5, 10); //月の数字は0から始まるので、3月なら2を指定する

    const timeRemaining = eventDate - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    //   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); //今回秒数は必要ない

      document.getElementById("countdown-container").innerHTML = `
      <p class="countdown-timeNum">${days}<span class="countdown-timeUnit">DAY</span></p>
      <p class="countdown-timeNum">${hours}<span class="countdown-timeUnit">HOUR</span></p>
      <p class="countdown-timeNum">${minutes}<span class="countdown-timeUnit">MINUTE</span></p>
      `;
    } else {
      document.getElementById("countdown-container").innerHTML = '<p class="countdown-done">イベントはすでに開催されました。</p>';
    }
  }

  countdown();
  setInterval(countdown, 1000);