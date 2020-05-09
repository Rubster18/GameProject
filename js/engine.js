let gameManager = {
    setStart: function(classType){
        this.reset(classType);
        this.fightStart();
    },
    reset: function(classType) {
        switch(classType){
            //Warrior Stats
            case "warrior":
                player = new Player(classType,300, 0, 180, 90, 80);
                break;
            //rogue stats
            case "rogue":
                player = new Player(classType,180, 0, 75, 280, 300);
                break;
            //Archer stats
            case "archer":
                player = new Player(classType,220, 0, 250, 100, 250);
                break;
            //Mage stats
            case "mage":
                player = new Player(classType,150, 300, 300, 80, 50);
                break;
        }
    let getUI = document.querySelector(".ui");
   getUI.innerHTML = `<img src="images/player/${classType} +.jpg" class="img-player">
    <div>
        <h3>"${classType}"</h3>
            <p>Health:${player.health}</p>
            <p>Mana:${player.mana}</p>
            <p>Damage:${player.damage}</p>
            <p>Agility:${player.agility}</p>
            <p>Speed:${player.speed}</p>
    </div>`
    },
    fightStart: function(){
        let getHeader= document.querySelector('.header');
        let getActions= document.querySelector('.action');
        let getArena= document.querySelector('.arena');
        getHeader.innerHTML= '<p>Task: Search for an enemy.</p>';
        getActions.innerHTML= `<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search now!</a>`;
        getArena.style.visibility = "visible";
    },

    setFight: function(){
        let getHeader= document.querySelector('.header');
        let getActions= document.querySelector('.action');
        let getEnemy= document.querySelector('.enemy');

        // enemy creator
        let enemy00 = new Enemy("wildboar", 400, 0, 75, 155, 180);

        let enemy01 =  new Enemy("goblin", 350, 0, 120, 160, 160);

        let enemy02 = new Enemy("goblinshaman", 300, 200, 200, 100, 120);

        let enemy03 =  new Enemy("troll", 550, 0, 200, 80, 50);

        let enemy04 = new Enemy ("runicbear", 650, 0, 220, 140, 180);

        let enemyPickerRNG = Math.floor(Math.random() * Math.floor(5));
        console.log(enemyPickerRNG);
        switch(enemyPickerRNG){
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
        getHeader.innerHTML = `<p>Choose an action</p>`;
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="playerMoves.calculateAtt()"> Attack!</a>`
        getEnemy.innerHTML = `<img src="../images/enemies/${enemyType} + .jpg" class="img-enemy">
        <div>
        <h3>"${enemyType}"</h3>
            <p>Health:${enemy.health}</p>
            <p>Mana:${enemy.mana}</p>
            <p>Damage:${enemy.damage}</p>
            <p>Agility:${enemy.agility}</p>
            <p>Speed:${enemy.speed}</p>
    </div>`
}