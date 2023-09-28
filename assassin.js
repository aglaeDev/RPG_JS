class Assassin extends Character {
  constructor() {
    super(6, 6, 20);
    this.shadowHitUsed = false;
  }

  specialAttack(target) {
    if (this.mana >= 20 && !this.shadowHitUsed) {
      console.log(`${this.constructor.name} utilise son attaque spéciale "Shadow Hit" !`);
      target.takeDamage(7);
      this.mana -= 20;
      this.shadowHitUsed = true;
    } else if (this.shadowHitUsed) {
      console.log(`${this.constructor.name} ne peut pas utiliser Shadow Hit à nouveau ce tour.`);
    } else {
      console.log(`${this.constructor.name} n'a pas assez de mana pour son attaque spéciale.`);
    }
  }
}