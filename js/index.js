document.getElementById("burger-button").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
});

const mobileMenu = document.querySelector(".nav-menu");
const burgerButton = document.getElementById("burger-button");

document.addEventListener( 'click', (e) => {
    const noMobileMenu = e.composedPath().includes(mobileMenu);
    const noBurgerButton = e.composedPath().includes(burgerButton);
    if (! noMobileMenu && ! noBurgerButton) {
        document.querySelector("header").classList.remove("open")
    }
});

const menuLink = document.querySelectorAll(".nav-menu__a");
for (i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function() {
        document.querySelector("header").classList.remove("open")
    });
};

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

/* Кнопки-service */

const activButton = document.querySelectorAll(".button-orng-activ");
const imgItem = document.querySelectorAll(".service-section-img-item");
const serviceButton = document.querySelectorAll(".service-section-buttons__item");

/* Блюрит неподходящие картинки, когда нет активных кнопок */
const setBlurOne = (button) => {
    for (i = 0; i < imgItem.length; i++) {
        if(! imgItem[i].classList.contains(button.id)) {
            imgItem[i].classList.toggle("on-blur");
        }
    }
}
/* Разблюривает картинки, когда одна из кнопок уже активна */
const setBlurTwo = (button) => {
    for (i = 0; i < imgItem.length; i++) {
        if (imgItem[i].classList.contains(button.id)) {
            imgItem[i].classList.remove("on-blur");
        }
    }
}
/* Разблюривает все картинки, когда две кнопки уже активны */
const setNoBlur = () => {
    for (i = 0; i < imgItem.length; i++) {
        imgItem[i].classList.remove("on-blur");
    }
}
/* Убирает активность кнопок */
const setNoActive = () => {
    for (i = 0; i < activButton.length; i++) {
        activButton[i].classList.remove("button-orng-activ");
    }
}
/* Событие клик */
serviceButton.forEach(function(e) {
    e.addEventListener("click", function() {
        if(activButton.length === 0) {
            setBlurOne(e);
            e.classList.toggle("button-orng-activ");
        } else if(activButton.length === 1) {
            setBlurTwo(e);
            e.classList.toggle("button-orng-activ");
        } else if(activButton.length === 2) {
            setNoBlur();
            setNoActive();
            setBlurOne(e);
            e.classList.toggle("button-orng-activ");
        }
    })
})







console.log(
    '1. Вёрстка соответствует макету. Ширина экрана 768px +24\n'+
    '2. Вёрстка соответствует макету. Ширина экрана 380px +24\n'+
    '3. Нет полосы прокрутки +15\n'+
    '4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22'
    )