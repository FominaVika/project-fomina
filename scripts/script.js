'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
    // * 1. Начало.
    // * 2. Получаем все карточrи. Получаем все элементы (полная информация).
    // * 3. Проверка массива карточек (пустой или нет).
    // *    3.1. Да: продолжаем.
    // *    3.2. Нет: продолжаем.
    // * 4. Нажали на кнопку "Подробнее".
    // *    4.1. Да: открываем полную карточку информации.
    // *    4.2. Нет:продолжаем.
    // * 5. Нажали на кнопку "закрыть" (крестик).
    // *    5.1. Да: информация закрыта.
    // *    5.2. Нет: продолжаем.
    // * 6. Конец.  

    const intensiveImg = document.querySelector(".directions__link");
    intensiveImg.addEventListener('mouseenter', () => {
        console.log('Мышка наведена на изображение, показываем текст');
    });

});

//Появление описания картинки при наведении курсора на картинку (под каждой картинкой)
// * 1. Начало.
// * 2. Получаем все элементы изображений с описанием.
// * 3. Для каждого изображения (проверяем есть ли такие изображения):
// *    3.1 Добавляем обработчик наведения курсора на изображение:
// *        3.1.1. Да:
// *            3.1.1.1. показываем текст при наведении.
// *            3.1.2. Нет: продолжаем.
// *    3.2. Добавляем обработчик курсор уходит с изображения:
// *        3.3.1. Да:
// *            3.3.1.1. Скрываем элемент  описанием.
// *        3.3.2. Нет: продолжаем.
// * 4. Конец.

// const intensiveImg = document.querySelector('.intensive__img');

// intensiveImg.forEach((item, index) => {
//     const intensiveText = document.querySelectorAll('.intensive__description');

//     item.addEventListener('mouseenter', () => {
//         item.style.opacity = 0.5;
//         intensiveText[index].removeAttribute('hidden');
//     });

//     intensiveImg.addEventListener('mouseleave', () => {
//         item.style.opacity = 1;
//         intensiveText[index].setAttribute('hidden', true);
//     });
// });

// Модальное окно
const directions__link = document.querySelectorAll(".directions__link");
// directions__link.addEventListener('click' () => {
//  console.log ("Нажали накнопку Подробнее");
// })
directions__link.forEach((item, index) => {

    item.addEventListener('click', () => {
        const dataid = item.detaset.id;
        const modalApplication = document.querySelector(".applications[data-id'" + dataid + "']")
        modalApplication.removeAttribute("hidden")

        // Закрытие модального окна
        window.addEventListener("click", (event) => {
            if (event.target === modalApplication) {
                modalApplication.setAttribute("hidden", true)
            }
        });

        const closeModalButton = modalApplication.querySelector(".application__close");
        closeModalButton.addEventListener("click", () => {
            modalApplication.setAttribute("hidden", true);
        });
    });
});

// Создание слайдера
let currentIndex = 0;
const slider = document.querySelectorAll(".directions__item");
const prevButton = document.querySelector(".directions__left");
const nextButton = document.querySelector(".directions__right");
const visibleCards = 3;
updateSlider();

if (prevButton) {
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slider.length - visibleCards;
        }
        updateSlider();
    });
}
if (nextButton) {
    nextButton.addEventListener("click", () => {
        if (currentIndex < slider.length - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });
}

function updateSlider() {
    slider.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

// Массивы
const wrapContainer = document.querySelector (".directions");
if (wrapContainer) {
    const dataTitleWrap= [
        "Stretching",
        "Yoga",
        "Balance",
        "Cardio",
        "Power",
    ];
    const titleWrap = 
        wrapContainer.querySelectorAll(".directions__subtitle");

        titleWrap.forEach((item, index) => {
        item.textContent = dataTitleWrap[index];
    });
}