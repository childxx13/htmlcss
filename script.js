document.addEventListener("DOMContentLoaded", function () {
    // Работа с модальным окном
    let modal = document.getElementById("modal");
    let btn = document.getElementById("openModal");
    let close = document.getElementsByClassName("close")[0];

    if (btn) { // Проверяем, есть ли кнопка
        btn.onclick = function () {
            modal.style.display = "block";
        }
    }

    if (close) { // Проверяем, есть ли кнопка закрытия
        close.onclick = function () {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Функция смены отзывов
    let reviews = [
        "🧍‍♂️ Алексей: 'Это был лучший отдых!'",
        "🧍‍♀️ Ольга: 'Я влюбилась в это место!'",
        "🧍‍♂️ Игорь: 'Ещё раз обязательно приедем!'",
        "🧍‍♀️ Мария: 'Теперь только сюда!'",
        "🧍‍♂️ Сергей: 'Восхитительная природа!'"
    ];

    let reviewText = document.getElementById("review-text");
    let reviewButton = document.getElementById("changeReview");

    if (reviewButton) { // Проверяем, есть ли кнопка
        reviewButton.onclick = function () {
            let randomIndex = Math.floor(Math.random() * reviews.length);
            reviewText.innerHTML = reviews[randomIndex];
        }
    }
});
