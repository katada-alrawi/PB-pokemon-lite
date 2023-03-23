
/*
class AttackSkill{

constructor(name,damage,magic){
    this.name = name;
    this.damage =  damage;
    this.magic = magic;
}
}
class Pokemon {
constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = []
}
learnAttackSkill(skill){
    this.skills.push(skill)
}
showStatus() {
    console.log(`${this.name} has ${this.health} health and ${this.magic} magic.`)
}
attack(index,gegner){
  //  console.log(gegner.health -40) => 55
  gegner.health = gegner.health -40 
   this.magic = this.magic -30
  console.log(gegner.health , this.magic, `${this.name} has ${this.magic} point weg`)
}

    

}
let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105);
let lightning = new AttackSkill("Lightning", 40, 30);
let poisonSeed = new AttackSkill("Poison Seed", 20, 20);
pikachu.learnAttackSkill(lightning);
console.log(pikachu.skills)
pikachu.showStatus()
bulbasaur.showStatus()
pikachu.attack(0, bulbasaur)

*/
class AttackSkill {
    constructor(name, damage, magic) {
        this.name = name;
        this.damage = damage;
        this.magic = magic;
    }
}



class Pokemon {
    constructor(name, health, magicB) {
        this.name = name;
        this.health = health;
        this.magicB = magicB;
        this.skills = []
    }
    learnAttackSkill(skill) {
        this.skills.push(skill)
    }

    showStatus() {
        console.log(`${this.name} has ${this.health} health and ${this.magicB} magic.`)
    }

    attack(index, pokemon) {
        const selectedAttack = this.skills[index];
        if (this.health < 0) {
            console.log(`${this.name} is already dead!`)
        } else if (this.magicB < selectedAttack.magic) {
            console.log("Not enough magic,cannot launch attack!" + "\n" + "-------------");
        } else {
            this.magicB -= selectedAttack.magic;
            pokemon.health -= selectedAttack.damage;
            console.log(`${this.name} launched skill ${selectedAttack.name} successfully!`);
            console.log(`${pokemon.name} got ${selectedAttack.damage} damage`)
        } if (pokemon.health < 0) {
            console.log(`${pokemon.name} is killed`)
        }
    }

    getMagic(magicPoints = 20) {
        this.magicB += magicPoints;
        console.log(`${this.name} got ${magicPoints} magic back`)
    }
}



let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105);


let lightning = new AttackSkill("Lightning", 40, 30);
let poisonSeed = new AttackSkill("Poison Seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();

console.log("------------------")
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);