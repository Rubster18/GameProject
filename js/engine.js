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
   getUI.innerHTML = '<img src="images/player/' + classType.toLoweCase() + '.jpg" class="img-avatar">' +
    <div>
        <h3>" + classType"</h3>
            <p>Health:' + player.health + '</p>
            <p>Mana:' + player.mana + '</p>
            <p>Damage:' + player.damage + '</p>
            <p>Agility:' + player.agility + '</p>
            <p>Speed:' + player.speed + '</p>
    </div>
    },
    fightStart: function(){
        let getHeader= document.querySelector('.header');
        let getActions= document.querySelector('.action');
        let getArena= document.querySelector('.arena');
        getHeader.innerHTML= '<p>Task: Search for an enemy.</p>';
        getActions.innerHTML= '<a href="#" class="btn-prefight" onclick="EgineStarter.setStart()">Search now!</a>';
        getArena.style.visibility = "visible";
    },

    setFight: function(){
        let getHeader= document.querySelector('.header');
        let getActions= document.querySelector('.action');
        let getEnemy= document.querySelector('.enemy');
    }
}