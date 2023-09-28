class Fighter extends Character {
  constructor() {
    super(12, 4, 40);
  }

  specialAttack(target) {
    if (this.mana >= 20) {
      console.log(`${this.constructor.name} utilise son attaque spéciale "Dark Vision" !`);
      target.takeDamage(5);
      this.mana -= 20;
      this.takeDamage(2); // Prend 2 dégâts de moins au prochain tour
    } else {
      console.log(`${this.constructor.name} n'a pas assez de mana pour son attaque spéciale.`);
    }
  }
}
