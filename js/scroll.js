  // 要素が完全に画面内に入ったらクラスを付与する
  // function isElementInViewport(el) {
  //   const rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // 要素が一部でも画面内に入ったらクラスを付与する
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom > 0 &&
      rect.right > 0
    );
  }
  
  
  function addScrollClassToElementA() {
    const elementsA = document.querySelectorAll('.concept__head');
    
    elementsA.forEach((elementA) => {
      if (isElementInViewport(elementA) && !elementA.classList.contains('visible')) {
        elementA.classList.add('visible');
      }
    });
  }
  
  function addClassToChildElements() {
    const elements = document.querySelectorAll('.concept__msg');
    
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.childNodes.forEach((child) => {
          // Check if the child node is an element node
          if (child.nodeType === Node.ELEMENT_NODE) {
            if (!child.classList.contains('visible')) {
              child.classList.add('visible');
            }
          }
        });
      }
    });
  }

  function addScrollClassToConceptFloat() {
    const ConceptFloat = document.querySelector('.concept-floatings');
    
    if (isElementInViewport(ConceptFloat) && !ConceptFloat.classList.contains('visible')) {
      ConceptFloat.classList.add('visible');
    }
  }
  
  window.addEventListener('scroll', () => {
    addScrollClassToElementA();
    addClassToChildElements();
    addScrollClassToConceptFloat();
  });
  