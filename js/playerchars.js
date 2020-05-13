let player;


function Player (classType, health, mana, damage, agility, speed){
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.damage = damage;
    this.agility = agility;
    this.speed = speed;
}

let playerMoves = {
    calculateAtt: function(){
        //who goes first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // player attack
    let playerAttack = function (){
    let baseDmg;
    if(player.mana > 0){
        baseDmg = player.damage * player.mana / 1000;
    } else {
        baseDmg = player.damage * player.agility / 1000;
    }
    let damageRanges = Math.floor(Math.random()* Math.floor(10));
    let finalDamage = baseDmg + damageRanges;
    //how many attacks?
    let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility/10)/2)+1;
    let attackValues = [finalDamage, numberOfHits];
    return attackValues;
} 
//  attack
let Attack = function (){
    let baseDmg;
    if(player.mana > 0){
        baseDmg = player.damage * player.mana / 1000;
    } else {
        baseDmg = player.damage * player.agility / 1000;
    }
    let damageRanges = Math.floor(Math.random()* Math.floor(10));
    let finalDamage = baseDmg + damageRanges;
    //how many times?
    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility/10)/2)+1;
    let attackValues = [finalDamage, numberOfHits];
    return attackValues;
}
//health values to fight
let getPlayerHealth = document.querySelector(".playerHP");
let getEnemyHealth = document.querySelector(".enemyHP");

//speed check 
if(getPlayerSpeed >= getEnemySpeed) {
    let playerAttValues = attackValuesPlayer();
    let totalDamage = playerAttackValues[0] * playerAttackValues[1]; //this is finalDamage * NumberOfHits (for ex 24dmg * 3 times)
    enemy.health = enemy.health - totalDamage;
    alert("You hit for " + playerAttValues[0] + "damage " + playerAttValues[1] + "times.");
    if (enemy.health <= 0 ){
        alert("You won, refresh the browser to fight again!")
        getPlayerHealth.innerHTML = "health: " + player.health;
        getEnemyHealth.innerHTML =  "health: " + 0;
    }
    else {
        //enemy attack
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1]; //this is finalDamage * NumberOfHits (for ex 24dmg * 3 times)
    enemy.health = enemy.health - totalDamage;
    alert("You've been hit for " + enemyAttValues[0] + "damage " + enemyAttValues[1] + "times.");
    if (player.health <= 0 ){
        alert("You died, refresh the browser to fight again!")
        getPlayerHealth.innerHTML = "health: " + 0;
        getEnemyHealth.innerHTML =  "health: " + enemy.health;
    } else{
        getPlayerHealth.innerHTML = "health: " + player.health;
    }
    }
}
//speed check 2
 else if(getEnemySpeed >= getEnemySpeed) {
    let enemyAttValues = attackValuesEnemy();
    let totalDamage = enemyAttackValues[0] * enemyAttackValues[1]; //this is finalDamage * NumberOfHits (for ex 24dmg * 3 times)
    player.health = player.health - totalDamage;
    alert("You've been hit for " + enemyAttValues[0] + "damage " + enemyAttValues[1] + "times.");
    if (player.health <= 0 ){
        alert("You died, refresh the browser to fight again!")
        getEnemyHealth.innerHTML = "health: " + enemy.health;
        getPlayerHealth.innerHTML =  "health: " + 0;
    }
    else {
        //player attack
        let playerAttackValues = playerAttack();
        let totalDamage = enemyAttackValues[0] * playerAttackValues[1]; //this is finalDamage * NumberOfHits (for ex 24dmg * 3 times)
    player.health = player.health - totalDamage;
    alert("You hit for " + playerAttValues[0] + "damage " + playerAttValues[1] + "times.");
    if (enemy.health <= 0 ){
        alert("You died, refresh the browser to fight again!")
        getEnemyHealth.innerHTML = "health: " + 0;
        getPlayerHealth.innerHTML =  "health: " + player.health;
    } else{
        getEnemyHealth.innerHTML = "health: " + enemy.health;
    }
    }
}
}

}