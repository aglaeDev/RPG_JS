class Paladin extends Character {
  constructor() {
    super(16, 3, 160);
  }

  specialAttack(target) {
    if (this.mana >= 40) {
      console.log(`${this.constructor.name} utilise son attaque spéciale "Healing Lighting" !`);
      target.takeDamage(4);
      this.mana -= 40;
      this.hp += 5; // Se soigne de 5 points
    } else {
      console.log(`${this.constructor.name} n'a pas assez de mana pour son attaque spéciale.`);
    }
  }
}