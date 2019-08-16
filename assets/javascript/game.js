$(document).ready(function() {
    var heroCount = 0;
    var enemiesCount = 3;
    var heroSelected = false;
    var enemySelected = false;
    var hero = {};
    var enemy = {};
    var ogAttack = 0;
    // var starkHero = false;
    // var starkEnemy = false;
    // var baratheonHero = false;
    // var baratheonEnemy = false;
    // var targaryenHero = false;
    // var targaryenEnemy = false;
    // var lannisterHero = false;
    // var lannisterEnemy = false;

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
        hero.hp = hero.hp - enemy.counter;
        enemy.hp = enemy.hp - hero.attack;
        hero.attack =  hero.attack + ogAttack;
        console.log("Hero hp: " + hero.hp);
        console.log("Hero attack: " + hero.attack);
        console.log("Enemy hp: " + enemy.hp);
        // deduct hero attack # from enemy hp
        // deduct enemy counter # from hero hp
    };

    function roundOver() {
        if (hero.hp === 0) {
            alert("You lose. Game Over!")
        }
        else if (enemy.hp === 0) {
            // hide enemy card
            // change text to choose new enemy
            // change text to attack again

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
        
    });





});
