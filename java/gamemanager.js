let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch (classType) {
            //Warrior Stats 810
            case "warrior":
                player = new Player(classType, 420, 0, 220, 90, 80);
                break;
            //rogue stats 840
            case "rogue":
                player = new Player(classType, 180, 0, 80, 280, 300);
                break;
            //Archer stats 850
            case "archer":
                player = new Player(classType, 220, 0, 300, 80, 250);
                break;
            //Mage stats 790 (+300 mana)
            case "mage":
                player = new Player(classType, 170, 300, 470, 80, 80);
                break;
        }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="images/players/' + classType + '.jpg" class="img-avatar"><div><h2>' + classType + '</h2><p>Health: ' + player.health + '</p>'
     + '<p>Mana: ' + player.mana + '</p>'
     + '<p>Strength: ' + player.strength + '</p>'
     + '<p>Agility: ' + player.agility + '</p>'
     + '<p>Speed: ' + player.speed + '</p></div>';
    },

    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action-bar");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p> Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()"> Search for enemy! </a>';
        getArena.style.visibility= "visible";

    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action-bar");
        let getEnemy = document.querySelector(".enemy");
        //enemy creator
        let enemy00 = new Enemy("wildboar", 400, 0, 75, 155, 180);

        let enemy01 = new Enemy("goblin", 350, 0, 120, 160, 160);
    
        let enemy02 = new Enemy("goblinshaman", 300, 200, 200, 100, 120);
    
        let enemy03 = new Enemy("troll", 550, 0, 200, 80, 50);
    
        let enemy04 = new Enemy("runicbear", 650, 0, 220, 140, 180);

        let enemyPickerRNG = Math.floor(Math.random() * Math.floor(5));
        console.log(enemyPickerRNG);
        switch (enemyPickerRNG) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
        }
        getHeader.innerHTML = `<p>Defeat the enemy</p>`;
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()"> Attack! </a>';
        getEnemy.innerHTML = '<img src="../images/enemies/' + enemy.enemyType + '.png" alt="' + enemy.enemyType + '" class="img-avatar"> <div><h2>' + enemy.enemyType + 
        '</h2><p class="health-enemy">Health: ' + enemy.health + 
        '</p><p>Mana: ' +enemy.mana + '</p><p>Strength: ' + enemy.strength + 
        '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + 
        '</p></div>';
    }
    }