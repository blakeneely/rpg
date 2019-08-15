$(document).ready(function() {
var hero = 0;
var enemies = 3;
var heroSelected = false;
var enemySelected = false;

var stark = {
    name: "Stark",
    hp: 120,
    attack: 12,
    counter: 10
};

var baratheon = {
    name: "Baratheon",
    hp: 100,
    attack: 10,
    counter: 8
};

var targaryen = {
    name: "Targaryen",
    hp: 150,
    attack: 15,
    counter: 12
};

var lannister = {
    name: "Lannister",
    hp: 180,
    attack: 18,
    counter: 15
};

function gameStart() {
    
};

// On click hide main card and show hero or enemy card
$("#stark").on("click", function(){
    if (!heroSelected){
        $(this).toggleClass("hidden");
        $("#hero-stark").toggleClass("hidden");
        heroSelected = true;
    }
    else if (heroSelected && enemySelected) {
        return false;
    }
    else {
        $(this).toggleClass("hidden");
        $("#enemy-stark").toggleClass("hidden");
        enemySelected = true;    
    }
});

$("#baratheon").on("click", function(){
    if (!heroSelected) {
        $(this).toggleClass("hidden");
        $("#hero-baratheon").toggleClass("hidden");
        heroSelected = true;
    }
    else if (heroSelected && enemySelected) {
        return false;
    }
    else {
        $(this).toggleClass("hidden");
        $("#enemy-baratheon").toggleClass("hidden");
        enemySelected = true;
    }
});

$("#targaryen").on("click", function(){
    if (!heroSelected) {
        $(this).toggleClass("hidden");
        $("#hero-targaryen").toggleClass("hidden");
        heroSelected = true;
    }
    else if (heroSelected && enemySelected) {
        return false;
    }
    else {
        $(this).toggleClass("hidden");
        $("#enemy-targaryen").toggleClass("hidden");
        enemySelected = true;
    }
});

$("#lannister").on("click", function(){
    if (!heroSelected) {
        $(this).toggleClass("hidden");
        $("#hero-lannister").toggleClass("hidden");
        heroSelected = true;
    }
    else if (heroSelected && enemySelected) {
        return false;
    }
    else {
        $(this).toggleClass("hidden");
        $("#enemy-lannister").toggleClass("hidden");
        enemySelected = true;
    }
});





});
