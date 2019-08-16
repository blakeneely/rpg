$(document).ready(function() {
    var heroCount = 0;
    var enemiesCount = 3;
    var heroSelected = false;
    var enemySelected = false;
    var hero = {};
    var enemy = {};
    var ogAttack = 0;

    var characters = {
        "Stark": {
            name: "Stark",
            hp: 120,
            attack: 8,
            counter: 15
        },
        "Baratheon": {
            name: "Baratheon",
            hp: 100,
            attack: 14,
            counter: 5
        },
        "Targaryen": {
            name: "Targaryen",
            hp: 150,
            attack: 8,
            counter: 5
        },
        "Lannister": {
            name: "Lannister",
            hp: 180,
            attack: 7,
            counter: 25
    }};

    function gameRestart() {
        // reset variables
        // hide enemy and hero cards
        // 
    };

    function instructionsText(){
        if (!enemySelected){
            $("#instructions").text("Now chose an enemy!");
        }
        else if (heroSelected && enemySelected) {
            $("#instructions").text("ATTACK!!!")
        }
    };

    function fight() {
        hero.hp = hero.hp - enemy.counter;      // deduct hero attack # from enemy hp
        enemy.hp = enemy.hp - hero.attack;      // deduct enemy counter # from hero hp
        hero.attack =  hero.attack + ogAttack;  // add original hero attack to itself
        roundOver();
        $("#hero-text").text("You attacked House " + enemy.name + " for " + hero.attack + " damage!");
        $("#enemy-text").text("House " + enemy.name + " countered with " + enemy.attack + " damage");
        console.log("Hero hp: " + hero.hp);
        console.log("Hero attack: " + hero.attack);
        console.log("Enemy hp: " + enemy.hp);
    };

    function roundOver() {
        if (hero.hp <= 0) {
            alert("You lose. Game Over!")
        }
        else if (enemy.hp <= 0) {
            enemiesCount--;
            alert("bang");
            // hide enemy card
            if (enemy === characters["Stark"]) {
                $("#enemy-stark").toggleClass("hidden");
            }
            else if (enemy === characters["Baratheon"]) {
                $("#enemy-baratheon").toggleClass("hidden");
            }
            else if (enemy === characters["Targaryen"]) {
                $("#enemy-targaryen").toggleClass("hidden");
            }
            else if (enemy === characters["Lannister"]) {
                $("#enemy-lannister").toggleClass("hidden");
            };
            $("#instructions").text("CHOOSE A NEW ENEMY");
            enemySelected = false;
            $("#hero-text").text(" ");
            $("#enemy-text").text(" ")
        }
    };

    // On click hide main card and show hero or enemy card
    $("#stark").on("click", function(){
        if (!heroSelected){
            $(this).toggleClass("hidden");
            $("#hero-stark").toggleClass("hidden");
            hero = characters["Stark"];
            ogAttack = hero.attack;
            console.log(hero);
            heroSelected = true;
            instructionsText();
        }
        else if (heroSelected && enemySelected) {
            return false;
        }
        else {
            $(this).toggleClass("hidden");
            $("#enemy-stark").toggleClass("hidden");
            enemy = characters["Stark"];
            console.log(enemy);
            enemySelected = true;  
            instructionsText();  
        }
    });

    $("#baratheon").on("click", function(){
        if (!heroSelected) {
            $(this).toggleClass("hidden");
            $("#hero-baratheon").toggleClass("hidden");
            hero = characters["Baratheon"];
            ogAttack = hero.attack;
            console.log(hero);
            heroSelected = true;
            instructionsText();
        }
        else if (heroSelected && enemySelected) {
            return false;
        }
        else {
            $(this).toggleClass("hidden");
            $("#enemy-baratheon").toggleClass("hidden");
            enemy = characters["Baratheon"];
            console.log(enemy);
            enemySelected = true;
            instructionsText();
        }
    });

    $("#targaryen").on("click", function(){
        if (!heroSelected) {
            $(this).toggleClass("hidden");
            $("#hero-targaryen").toggleClass("hidden");
            hero = characters["Targaryen"];
            ogAttack = hero.attack;
            console.log(hero);
            heroSelected = true;
            instructionsText();
        }
        else if (heroSelected && enemySelected) {
            return false;
        }
        else {
            $(this).toggleClass("hidden");
            $("#enemy-targaryen").toggleClass("hidden");
            enemy = characters["Targaryen"];
            console.log(enemy);
            enemySelected = true;
            instructionsText();
        }
    });

    $("#lannister").on("click", function(){
        if (!heroSelected) {
            $(this).toggleClass("hidden");
            $("#hero-lannister").toggleClass("hidden");
            hero = characters["Lannister"];
            ogAttack = hero.attack;
            console.log(hero);
            heroSelected = true;
            instructionsText();
        }
        else if (heroSelected && enemySelected) {
            return false;
        }
        else {
            $(this).toggleClass("hidden");
            $("#enemy-lannister").toggleClass("hidden");
            enemy = characters["Lannister"];
            console.log(enemy);
            enemySelected = true;
            instructionsText();
        }
    });

    // On click attack button deduct hp points
    $(".button").on("click", function(){
        if (heroSelected && enemySelected) {
            fight();
        }
        else {
            return false;
        }
        // $("#hero-text").text("You attacked House " + enemy.name + " for " + hero.attack + " damage!");
        // $("#enemy-text").text("House " + enemy.name + " countered with " + enemy.attack + " damage");
    });





});
