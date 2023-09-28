class Character {
  constructor(hp, dmg, mana) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = "playing";
  }

  dealDamage(target) {
    if (this.status === "playing") {
      console.log(`${this.constructor.name} attaque ${target.constructor.name} et lui inflige ${this.dmg} points de dégâts.`);
      target.takeDamage(this.dmg);
      if (target.status === "loser") {
        console.log(`${this.constructor.name} a éliminé ${target.constructor.name} et regagne 20 points de mana.`);
        this.mana += 20;
      }
    } else {
      console.log(`${this.constructor.name} ne peut pas attaquer ce tour.`);
    }
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(`${this.constructor.name} est maintenant hors combat.`);
    }
  }

  specialAttack(target) {
    // À implémenter dans les classes spécifiques
  }
}