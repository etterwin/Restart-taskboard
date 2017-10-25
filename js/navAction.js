let item_1 = $("#nav_item_1");
let item_2 = $("#nav_item_2");
let item_3 = $("#nav_item_3");
let item_4 = $("#nav_item_4");
let item_5 = $("#nav_item_5");

$(item_1).click(function (e){
    if (item_1.is(e.target) && item_1.has(e.target).length === 0) {
        $("#svg_1").addClass("nav-icon--active");
        $("#nav_link_1").addClass("nav-item-link--active");
        $("#nav_move").addClass("navigation-move");
        $("#nav_move").removeClass("navigation-move--second", "navigation-move--third", "navigation-move--fourth","navigation-move--fifth");
    }
});

$(item_2).click(function (e){
    if (item_2.is(e.target) && item_2.has(e.target).length === 0) {
        $("#svg_2").addClass("nav-icon--active");
        $("#nav_link_2").addClass("nav-item-link--active");
        $("#nav_move").addClass("navigation-move--second");
        $("#nav_move").removeClass("navigation-move", "navigation-move--third","navigation-move--fourth","navigation-move--fifth");
    }
});

$(item_3).click(function (e){
    if (item_3.is(e.target) && item_3.has(e.target).length === 0) {
        $("#svg_3").addClass("nav-icon--active");
        $("#nav_link_3").addClass("nav-item-link--active");
        $("#nav_move").addClass("navigation-move--third");
        $("#nav_move").removeClass("navigation-move", "navigation-move--second","navigation-move--fourth","navigation-move--fifth");
    }
});

$(item_4).click(function (e){
    if (item_4.is(e.target) && item_4.has(e.target).length === 0) {
        $("#svg_4").addClass("nav-icon--active");
        $("#nav_link_4").addClass("nav-item-link--active");
        $("#nav_move").addClass("navigation-move--fourth");
        $("#nav_move").removeClass("navigation-move", "navigation-move--third","navigation-move--second","navigation-move--fifth");
    }
});

$(item_5).click(function (e){
    if (item_5.is(e.target) && item_5.has(e.target).length === 0) {
        $("#svg_5").addClass("nav-icon--active");
        $("#nav_link_5").addClass("nav-item-link--active");
        $("#nav_move").addClass("navigation-move--fifth");
        $("#nav_move").removeClass("navigation-move", "navigation-move--third","navigation-move--fourth","navigation-move--second");
    }
});

$(document).click(function (e) {
    if (!item_1.is(e.target) && item_1.has(e.target).length === 0) {
        $("#svg_1").removeClass("nav-icon--active");
        $("#nav_link_1").removeClass("nav-item-link--active");
    }
});

$(document).click(function (e) {
    if (!item_2.is(e.target) && item_2.has(e.target).length === 0) {
        $("#svg_2").removeClass("nav-icon--active");
        $("#nav_link_2").removeClass("nav-item-link--active");
    }
});

$(document).click(function (e) {
    if (!item_3.is(e.target) && item_3.has(e.target).length === 0) {
        $("#svg_3").removeClass("nav-icon--active");
        $("#nav_link_3").removeClass("nav-item-link--active");
    }
});

$(document).click(function (e) {
    if (!item_4.is(e.target) && item_4.has(e.target).length === 0) {
        $("#svg_4").removeClass("nav-icon--active");
        $("#nav_link_4").removeClass("nav-item-link--active");
    }
});

$(document).click(function (e) {
    if (!item_5.is(e.target) && item_5.has(e.target).length === 0) {
        $("#svg_5").removeClass("nav-icon--active");
        $("#nav_link_5").removeClass("nav-item-link--active");
    }
});

