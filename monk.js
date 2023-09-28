class Monk extends Character {
  constructor() {
    super(8, 2, 200);
  }

  specialAttack() {
    if (this.mana >= 25) {
      console.log(`${this.constructor.name} utilise son attaque spéciale "Heal" et récupère 8 points de vie.`);
      this.hp += 8;
      this.mana -= 25;
    } else {
      console.log(`${this.constructor.name} n'a pas assez de mana pour son attaque spéciale.`);
    }
  }
}