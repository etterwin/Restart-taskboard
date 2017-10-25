document.getElementById('nav_item').onclick = function(e) { // Вешаем обработчик

    let event = e || window.event, // Получаем event.target (вариант window.event дописываем для поддержки старых IE)
        target = event.CurrentTarget || event.srcElement; //Вариант event.srcElement дописываем для поддержки старых IE

    if (target.tagName == 'LI') { //Проверяем, интересует ли нас это наведение курсора? Если он не на li, то нет
        target.classList.toggle("nav-item--active"); //Если у текущего li нет класса list-decor - дошить к нему класс list-decor
    }
};

document.getElementById('menu').onclick = function(e) {
    let event = e || window.event,
        target = event.CurrentTarget || event.srcElement;
    if (target.tagName == 'LI') {
        target.classList.toggle("nav-item--active"); //Если у текущего элемента есть класс list-decor - убрать класс list-decor
    }
};