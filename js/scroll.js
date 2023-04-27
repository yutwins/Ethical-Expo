
// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
// }

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   function addScrollClassToElementA() {
//     const elementA = document.querySelector('.concept__head--horizontal'); // 要素Aのクラス名を指定
  
//     if (isElementInViewport(elementA)) {
//       elementA.classList.add('scroll');
//     } else {
//       elementA.classList.remove('scroll');
//     }
//   }
  
//   window.addEventListener('scroll', addScrollClassToElementA);

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function addScrollClassToElementA() {
    const elementA = document.querySelector('.concept__head--horizontal'); // 要素Aのクラス名を指定
  
    if (isElementInViewport(elementA) && !elementA.classList.contains('scroll')) {
      elementA.classList.add('scroll');
    }
    // 毎回クラスを削除する必要がある場合は、以下のコメントアウトを外す
    // if (isElementInViewport(elementA)) {
    //   elementA.classList.add('scroll');
    // } else {
    //   elementA.classList.remove('scroll');
    // }
  }
  
  window.addEventListener('scroll', addScrollClassToElementA);