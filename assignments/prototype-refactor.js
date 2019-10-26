class GameObject {
  constructor(gameObj) {
    this.createdAt = gameObj.createdAt;
    this.name = gameObj.name;
    this.dimensions = gameObj.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(gameObj) {
    super(gameObj);
    this.healthPoints = gameObj.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(gameObj) {
    super(gameObj);
    this.team = gameObj.team;
    this.weapons = gameObj.weapons;
    this.language = gameObj.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
  constructor(GameObj) {
    super(GameObj);
    this.dmg = GameObj.dmg;
  }
  hit(enemy) {
    document.getElementById(
      `${this.name}Health`
    ).innerHTML = `${this.name}: ${this.healthPoints} HP`;
    document.getElementById(
      `${enemy.name}Health`
    ).innerHTML = `${enemy.name}: ${enemy.healthPoints} HP`;

    if (this.healthPoints > 0) {
      if (enemy.healthPoints <= 0) {
        return "Game Over! Stop hitting your enemy!!!";
      }
      enemy.healthPoints = enemy.healthPoints - this.dmg;
      let message = "";
      if (enemy.healthPoints <= 0) {
        enemy.healthPoints = 0;
        message = `Now ${enemy.name} is dead. ${this.name} wins the game.`;
        document.getElementById(
          `over`
        ).innerHTML = `GAME OVER! ${this.name} WINS`;
      } else {
        message = `Now ${enemy.name} has ${enemy.healthPoints} health left.`;
      }
      document.getElementById(
        `${enemy.name}Health`
      ).innerHTML = `${enemy.name}: ${enemy.healthPoints} HP`;
      return `${this.name} hit ${this.dmg} damage to ${enemy.name}. ${message}`;
    } else {
      return `You are dead ${this.name}, you can't hit ${enemy.name} anymore!`;
    }
  }
}

class Villain extends Hero {
  constructor(GameObj) {
    super(GameObj);
  }
}

const pudge = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 100,
  name: "Pudge",
  team: "Radiant",
  weapons: ["Hook", "Dismember"],
  language: "Butcherish",
  dmg: 20
});

const sniper = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 2
  },
  healthPoints: 75,
  name: "Sniper",
  team: "Dire",
  weapons: ["Rifle", "Sharapnel"],
  language: "Sniperish",
  dmg: 30
});

document.addEventListener("keypress", hitEnemy);

function hitEnemy(e) {
  if (e.key == "s" || e.key == "S") {
    console.log(sniper.hit(pudge));
  } else if (e.key == "p" || e.key == "P") {
    console.log(pudge.hit(sniper));
  }
}
