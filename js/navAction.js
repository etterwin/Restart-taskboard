let item_1 = $("#nav_item_1");
let item_2 = $("#nav_item_2");
let item_3 = $("#nav_item_3");
let item_4 = $("#nav_item_4");
let item_5 = $("#nav_item_5");

$(item_1).click(function (e){
    if (item_1.is(e.target) && item_1.has(e.target).length === 0) {
        $("#svg_1").addClass("nav-icon--active");
        $("#nav_link_1").addClass("nav-item-link--active");
    }
});

$(item_2).click(function (e){
    if (item_2.is(e.target) && item_2.has(e.target).length === 0) {
        $("#svg_2").addClass("nav-icon--active");
        $("#nav_link_2").addClass("nav-item-link--active");
        $("#nav_move").toggleClass("navigation-move--second");
    }
});

$(item_3).click(function (e){
    if (item_3.is(e.target) && item_3.has(e.target).length === 0) {
        $("#svg_3").addClass("nav-icon--active");
        $("#nav_link_3").addClass("nav-item-link--active");
        $("#nav_move").toggleClass("navigation-move--third");
    }
});

$(item_4).click(function (e){
    if (item_4.is(e.target) && item_4.has(e.target).length === 0) {
        $("#svg_4").addClass("nav-icon--active");
        $("#nav_link_4").addClass("nav-item-link--active");
        $("#nav_move").toggleClass("navigation-move--fourth");
    }
});

$(item_5).click(function (e){
    if (item_5.is(e.target) && item_5.has(e.target).length === 0) {
        $("#svg_5").addClass("nav-icon--active");
        $("#nav_link_5").addClass("nav-item-link--active");
        $("#nav_move").toggleClass("navigation-move--fifth");
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

