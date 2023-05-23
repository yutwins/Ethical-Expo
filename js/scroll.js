"use strict";

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
    addVisibilityClass('.performer__subTitle');
    addVisibilityClass('.performer__bg--left');
    addVisibilityClass('.performer__bg--right');
    addVisibilityClass('.performer-floatings');
    addVisibilityClass('.performer-list');
    addVisibilityClass('.speaker__bg--left');
    addVisibilityClass('.speaker__bg--right');
    addVisibilityClass('.speaker-floatings');
    addVisibilityClass('.speaker-list');
    addVisibilityClass('.layout-floatings');
    addVisibilityClass('.layout-inner');
    addVisibilityClass('.team__subTitle');
    addVisibilityClass('.team-floatings');
    addVisibilityClass('.team-wrap');
    addVisibilityClass('.overview-inner');
    addVisibilityClass('.schedule-floatings');
    addVisibilityClass('.schedule-inner');
  });
