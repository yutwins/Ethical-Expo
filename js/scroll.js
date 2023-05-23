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
  // function isElementInViewport(el) {
  //   const rect = el.getBoundingClientRect();
  //   return (
  //     rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
  //     rect.bottom > 0 &&
  //     rect.right > 0
  //   );
  // }
  
  
  // function addScrollClassToElementA() {
  //   const elementsA = document.querySelectorAll('.concept__head');
    
  //   elementsA.forEach((elementA) => {
  //     if (isElementInViewport(elementA) && !elementA.classList.contains('visible')) {
  //       elementA.classList.add('visible');
  //     }
  //   });
  // }
  
  // function addClassToChildElements() {
  //   const elements = document.querySelectorAll('.concept__msg');
    
  //   elements.forEach((element) => {
  //     if (isElementInViewport(element)) {
  //       element.childNodes.forEach((child) => {
  //         // Check if the child node is an element node
  //         if (child.nodeType === Node.ELEMENT_NODE) {
  //           if (!child.classList.contains('visible')) {
  //             child.classList.add('visible');
  //           }
  //         }
  //       });
  //     }
  //   });
  // }

  // function addScrollClassToConceptFloat() {
  //   const ConceptFloat = document.querySelector('.concept-floatings');
    
  //   if (isElementInViewport(ConceptFloat) && !ConceptFloat.classList.contains('visible')) {
  //     ConceptFloat.classList.add('visible');
  //   }
  // }

  // // contentsセクションの要素が画面内に入ったらクラスを付与する
  // function addScrollClassToContentItem() {
  //   const contentsItems = document.querySelectorAll('.contents-item');
    
  //   contentsItems.forEach((contentsItem) => {
  //     if (isElementInViewport(contentsItem) && !contentsItem.classList.contains('visible')) {
  //       contentsItem.classList.add('visible');
  //     }
  //   });
  // }

  // function addScrollClassToConceptFloat() {
  //   const ConceptFloat = document.querySelector('.performer__bg--left');
    
  //   if (isElementInViewport(ConceptFloat) && !ConceptFloat.classList.contains('visible')) {
  //     ConceptFloat.classList.add('visible');
  //   }
  // }
  
  // window.addEventListener('scroll', () => {
  //   addScrollClassToElementA();
  //   addClassToChildElements();
  //   addScrollClassToConceptFloat();
  //   addScrollClassToContentItem();
  // });
  

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom > 0 &&
        rect.right > 0
    );
}

function addVisibilityClass(selector, isChild=false) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            if(isChild){
                element.childNodes.forEach((child) => {
                    if (child.nodeType === Node.ELEMENT_NODE && !child.classList.contains('visible')) {
                        child.classList.add('visible');
                    }
                });
            } else if(!element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        }
    });
}

window.addEventListener('scroll', () => {
    addVisibilityClass('.section__title');
    addVisibilityClass('.concept__head');
    addVisibilityClass('.concept__msg', true);
    addVisibilityClass('.concept-floatings');
    addVisibilityClass('.contents-item');
    addVisibilityClass('.performer__bg--left');
    addVisibilityClass('.performer__bg--right');
    addVisibilityClass('.performer-floatings');
    addVisibilityClass('.performer-list');
    addVisibilityClass('.speaker__bg--left');
    addVisibilityClass('.speaker__bg--right');
    addVisibilityClass('.speaker-floatings');
    addVisibilityClass('.speaker-list');
    addVisibilityClass('.layout-floatings');
    addVisibilityClass('.team__subTitle');
    addVisibilityClass('.team-floatings');
    addVisibilityClass('.team-wrap');
    addVisibilityClass('.overview-inner');
    addVisibilityClass('.schedule-floatings');
    addVisibilityClass('.schedule-inner');
  });
