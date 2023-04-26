document.addEventListener("DOMContentLoaded", function() {
  const slideTitleHorizontal = document.querySelector(".hero__slideTitle--horizontal");
  const slideTitleVertical = document.querySelector(".hero__slideTitle--vertical");
  const heroBgLeft = document.querySelector(".hero__bg--left");
  const heroBgRight = document.querySelector(".hero__bg--right");
  const heroFloat01 = document.querySelector(".hero-floating01");
  const heroFloat02 = document.querySelector(".hero-floating02");
  const heroFloat03 = document.querySelector(".hero-floating03");
  const heroFloat04 = document.querySelector(".hero-floating04");
  const heroFloat05 = document.querySelector(".hero-floating05");
  const heroFloat06 = document.querySelector(".hero-floating06");
  const heroFloat07 = document.querySelector(".hero-floating07");
  const heroFloat08 = document.querySelector(".hero-floating08");
  const heroFloat09 = document.querySelector(".hero-floating09");
  const heroTitle = document.querySelector(".hero__title");
  const heroTitleSmall = document.querySelector(".hero__title--small");
  const heroDate = document.querySelector(".hero-dateArea__img");
  const heroPlace = document.querySelector(".hero-place");

  slideTitleHorizontal.style.animationPlayState = "running";
  slideTitleVertical.style.animationPlayState = "running";
  heroBgLeft.style.animationPlayState = "running";
  heroBgRight.style.animationPlayState = "running";
  heroFloat01.style.animationPlayState = "running";
  heroFloat02.style.animationPlayState = "running";
  heroFloat03.style.animationPlayState = "running";
  heroFloat04.style.animationPlayState = "running";
  heroFloat05.style.animationPlayState = "running";
  heroFloat06.style.animationPlayState = "running";
  heroFloat07.style.animationPlayState = "running";
  heroFloat08.style.animationPlayState = "running";
  heroFloat09.style.animationPlayState = "running";
  heroTitle.style.animationPlayState = "running";
  heroTitleSmall.style.animationPlayState = "running";
  heroDate.style.animationPlayState = "running";
  heroPlace.style.animationPlayState = "running";
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