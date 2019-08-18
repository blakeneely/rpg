$(document).ready(function() {
    var heroCount = 0;
    var enemiesCount = 3;
    var heroSelected = false;
    var enemySelected = false;
    var hero = {};
    var enemy = {};
    var ogAttack = 0;
    var winAudio = new Audio ("assets/audio/game_of_thrones_end.mp3");
    var loseAudio = new Audio ("assets/audio/cersei_play_the_game.mp3");

    var characters = {
        "Stark": {
            name: "Stark",
            hp: 120,
            attack: 8,
            counter: 15,
            hpHtml: ".stark-hp"
        },
        "Baratheon": {
            name: "Baratheon",
            hp: 100,
            attack: 14,
            counter: 5,
            hpHtml: ".baratheon-hp"
        },
        "Targaryen": {
            name: "Targaryen",
            hp: 150,
            attack: 8,
            counter: 5,
            hpHtml: ".targaryen-hp"
        },
        "Lannister": {
            name: "Lannister",
            hp: 180,
            attack: 7,
            counter: 25,
            hpHtml: ".lannister-hp"
    }};

    function instructionsText(){                        // function to display instructions to choose enemy or attack
        if (!enemySelected){
            $("#instructions").text("Now chose an enemy!");
        }
        else if (heroSelected && enemySelected) {
            $("#instructions").text("ATTACK!!!");
        }
    };

    function fight() {
        hero.hp = hero.hp - enemy.counter;                    // deduct hero attack # from enemy hp
        enemy.hp = enemy.hp - hero.attack;                    // deduct enemy counter # from hero hp
        $(enemy.hpHtml).text(enemy.hp);
        $(hero.hpHtml).text(hero.hp);
        $("#hero-text").text("You attacked House " + enemy.name + " for " + hero.attack + " damage!");
        $("#enemy-text").text("House " + enemy.name + " countered with " + enemy.attack + " damage");
        roundOver();
        hero.attack =  hero.attack + ogAttack;                // add original hero attack to itself
    };

    function roundOver() {                                    // function to check if each round is over
        if (enemy.hp <= 0) {                                  // checks if enemy hp is 0 for defeat
            enemiesCount--;                                   // lowers number of enemies left to defeat count
            $("#hero-text").text("You defeated House " + enemy.name + "!");         // displays win text
            $("#enemy-text").text(" ");
            if (enemy === characters["Stark"]) {              // hide enemy card
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
            $("#instructions").text("CHOOSE A NEW ENEMY");     // changes instructions to choose a new enemy
            enemySelected = false;                             // flags that enemy is no longer selected
            gameOver();                                        // run gameOver function to see if game has ended
        }
        else if (hero.hp <= 0) {
            $("#instructions").text("You were defeated. Game over.")        // checks if hero hp is 0 for defeat
            gameOver();
        }
        else if (hero.hp <=0 && enemy.hp <=0) {               // if both end with 0 hp hero still wins
            enemiesCount--;                                   // lowers number of enemies left to defeat count
            $("#hero-text").text("You defeated House " + enemy.name + "!");         // displays win text
            $("#enemy-text").text(" ");
            if (enemy === characters["Stark"]) {              // hide enemy card
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
            $("#instructions").text("CHOOSE A NEW ENEMY");     // changes instructions to choose a new enemy
            enemySelected = false;                             // flags that enemy is no longer selected
            gameOver();                                        // run gameOver function to see if game has ended
        }
    };

    function gameOver() {                                       // function for game has ended
        if (enemiesCount === 0) {                               // checks if there are no more enemies to defeat for win
            winAudio.play();                                    // plays winning audio
            $(".houses-container").toggleClass("hidden");       // hides houses container
            $(".descrip-text").toggleClass("hidden");           // hides Your House and Enemy h2 text
            if (hero === characters["Stark"]) {                 // shows winning character picture
                $(".stark-wins").toggleClass("hidden");
                $("#hero-stark").toggleClass("hidden");
            }
            else if (hero === characters["Baratheon"]) {
                $(".baratheon-wins").toggleClass("hidden");
                $("#hero-baratheon").toggleClass("hidden");
            }
            else if (hero === characters["Targaryen"]) {
                $(".targaryen-wins").toggleClass("hidden");
                $("#hero-targaryen").toggleClass("hidden");
            }
            else if (hero === characters["Lannister"]) {
                $(".lannister-wins").toggleClass("hidden");
                $("#hero-lannister").toggleClass("hidden");
            }
            $(".attack-button").toggleClass("hidden");          // hides attack button
            $(".restart-button").toggleClass("hidden");         // shows restart button
            $("#instructions").text("YOU WON THE THRONE!!");    // changes instructions with winning text
        }
        else if (hero.hp <= 0) {                                     // checks if hero hp is 0 for loss
            loseAudio.play();                                   // plays losing audio
            $(".attack-button").toggleClass("hidden");          // hides attack button
            $(".restart-button").toggleClass("hidden");         // shows restart button
            $(".lose").toggleClass("hidden");                   // shows winning image
        }
    };

    // On click character hide main card and show hero or enemy card
    $("#stark").on("click", function(){
        if (!heroSelected){                                     // Checks if hero has been selected yet
            $(this).toggleClass("hidden");                      // Hides main card
            $("#hero-stark").toggleClass("hidden");             // Shows matching hero card
            hero = characters["Stark"];                         // Assigns clicked object to variable hero
            ogAttack = hero.attack;                             // Assigns attack value to ogAttack for adding later
            console.log(hero);
            heroSelected = true;                                // Flags that hero has been selected
            instructionsText();                                 // Updates instructions to choose enemy
        }
        else if (heroSelected && enemySelected) {               // If both hero and enemy selected stops click
            return false;
        }
        else {
            $(this).toggleClass("hidden");                      // Hides main card
            $("#enemy-stark").toggleClass("hidden");            // Shows matching enemy card
            enemy = characters["Stark"];                        // Assigns clicked object to variable enemy
            console.log(enemy);
            enemySelected = true;                               // Flags that enemy has been selected
            instructionsText();                                 // Updates instructions to attack
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
    $(".attack-button").on("click", function(){
        if (heroSelected && enemySelected) {
            fight();
        }
        else {
            return false;
        }
    });

    // On click restart button
    $(".restart-button").on("click", function(){
        location.reload();
    });

});
