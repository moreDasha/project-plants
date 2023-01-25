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

const imgItem = document.querySelectorAll('.service-section-img-item');
const gardenButton = document.getElementById("garden");
const lawnButton = document.getElementById("lawn");
const plantingButton = document.getElementById("planting");


gardenButton.addEventListener("click", function() {
    for (i = 0; i < imgItem.length; i++) {
        if(lawnButton.classList.contains("button-orng-activ") && ! plantingButton.classList.contains("button-orng-activ")) {
            if(imgItem[i].classList.contains("planting")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else if(plantingButton.classList.contains("button-orng-activ") && ! lawnButton.classList.contains("button-orng-activ")) {
            if(imgItem[i].classList.contains("lawn")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else if(lawnButton.classList.contains("button-orng-activ") && plantingButton.classList.contains("button-orng-activ")) {
            lawnButton.classList.remove("button-orng-activ");
            plantingButton.classList.remove("button-orng-activ");
            if (! imgItem[i].classList.contains("garden")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else {
            if (! imgItem[i].classList.contains("garden")) {
                imgItem[i].classList.toggle("on-blur");
            }
        }
    }
    gardenButton.classList.toggle("button-orng-activ");
});

lawnButton.addEventListener("click", function() {
    for (i = 0; i < imgItem.length; i++) {
        if(gardenButton.classList.contains("button-orng-activ") && ! plantingButton.classList.contains("button-orng-activ")) {
            if(imgItem[i].classList.contains("planting")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else if(plantingButton.classList.contains("button-orng-activ") && ! gardenButton.classList.contains("button-orng-activ")) {
            if(imgItem[i].classList.contains("garden")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else if(gardenButton.classList.contains("button-orng-activ") && plantingButton.classList.contains("button-orng-activ")) {
            gardenButton.classList.remove("button-orng-activ");
            plantingButton.classList.remove("button-orng-activ");
            if (! imgItem[i].classList.contains("lawn")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else {
            if (! imgItem[i].classList.contains("lawn")) {
                imgItem[i].classList.toggle("on-blur");
            }
        }
    }
    lawnButton.classList.toggle("button-orng-activ");
});

plantingButton.addEventListener("click", function() {
    for (i = 0; i < imgItem.length; i++) {
        if(lawnButton.classList.contains("button-orng-activ") && ! gardenButton.classList.contains("button-orng-activ")) {
            if(imgItem[i].classList.contains("garden")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else if(gardenButton.classList.contains("button-orng-activ") && ! lawnButton.classList.contains("button-orng-activ")) {
            if(imgItem[i].classList.contains("lawn")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else if(gardenButton.classList.contains("button-orng-activ") && lawnButton.classList.contains("button-orng-activ")) {
            lawnButton.classList.remove("button-orng-activ");
            gardenButton.classList.remove("button-orng-activ");
            if (! imgItem[i].classList.contains("planting")) {
                imgItem[i].classList.toggle("on-blur");
            }
        } else {
            if (! imgItem[i].classList.contains("planting")) {
                imgItem[i].classList.toggle("on-blur");
            }
        }
    }
    plantingButton.classList.toggle("button-orng-activ");
});



/* gardenButton.addEventListener("click", function() {
    for (i = 0; i < imgItem.length; i++) {
        if (! imgItem[i].classList.contains("garden")) {
            imgItem[i].classList.toggle("on-blur");
        }
    }
    gardenButton.classList.toggle("button-orng-activ");
});

lawnButton.addEventListener("click", function() {
    for (i = 0; i < imgItem.length; i++) {
        if (! imgItem[i].classList.contains("lawn")) {
            imgItem[i].classList.toggle("on-blur");
        }
    }
    lawnButton.classList.toggle("button-orng-activ");
});

plantingButton.addEventListener("click", function() {
    for (i = 0; i < imgItem.length; i++) {
        if (! imgItem[i].classList.contains("planting")) {
            imgItem[i].classList.toggle("on-blur");
        };
    };
    plantingButton.classList.toggle("button-orng-activ");
}); */



console.log(
    '1. Вёрстка соответствует макету. Ширина экрана 768px +24\n'+
    '2. Вёрстка соответствует макету. Ширина экрана 380px +24\n'+
    '3. Нет полосы прокрутки +15\n'+
    '4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22'
    )