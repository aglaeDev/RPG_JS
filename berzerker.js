class Berzerker extends Character {
  constructor() {
    super(8, 4, 0);
  }

  specialAttack() {
    console.log(`${this.constructor.name} utilise son attaque spéciale "Rage" !`);
    this.dmg += 1;
    this.hp -= 1;
  }
}