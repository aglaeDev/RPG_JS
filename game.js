const grace = new Fighter();
const ulder = new Paladin();
const moana = new Monk();
const draven = new Berzerker();
const carl = new Assassin();
class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = []; // Tableau pour stocker les personnages
  }

  // Méthode pour démarrer un tour
  startTurn() {
    console.log(`It's turn ${11 - this.turnLeft}`);
    this.shuffleCharacters(); // Mélanger l'ordre des personnages
    this.characters.forEach((character) => {
      console.log(`It's time for ${character.constructor.name} to play.`);
      const target = this.getRandomAliveCharacter(character);
      if (target) {
        character.dealDamage(target);
      }
    });
    this.watchStats();
    this.skipTurn();
  }

  // Méthode pour passer au tour suivant
  skipTurn() {
    this.turnLeft--;
    if (this.turnLeft === 0) {
      this.endGame();
    }
  }

  // Méthode pour afficher les statistiques de tous les personnages
  watchStats() {
    console.log("Statistiques des personnages :");
    this.characters.forEach((character) => {
      console.log(
        `${character.constructor.name} - HP: ${character.hp}, DMG: ${character.dmg}, Mana: ${character.mana}, Status: ${character.status}`
      );
    });
  }

  // Méthode pour démarrer le jeu
  startGame() {
    // Créer des instances des personnages avec les noms spécifiés
    const grace = new Fighter();
    const ulder = new Paladin();
    const moana = new Monk();
    const draven = new Berzerker();
    const carl = new Assassin();

    // Ajouter les personnages au tableau de personnages
    this.characters = [grace, ulder, moana, draven, carl];

    // Commencer le jeu en bouclant les tours
    while (this.turnLeft > 0) {
      this.startTurn();
    }
  }

  // Méthode pour mélanger l'ordre des personnages
  shuffleCharacters() {
    for (let i = this.characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.characters[i], this.characters[j]] = [this.characters[j], this.characters[i]];
    }
  }

  // Méthode pour vérifier s'il ne reste qu'un joueur en vie
  endGame() {
    const aliveCharacters = this.characters.filter((character) => character.status !== "loser");
    if (aliveCharacters.length === 1) {
      const winner = aliveCharacters[0];
      winner.status = "winner";
      console.log(`${winner.constructor.name} est le gagnant de la partie !`);
    } else {
      console.log("La partie est terminée, c'est un match nul !");
    }
  }

  // Méthode pour obtenir une cible vivante au hasard
  getRandomAliveCharacter(currentCharacter) {
    const aliveCharacters = this.characters.filter(
      (character) => character.status !== "loser" && character !== currentCharacter
    );
    if (aliveCharacters.length > 0) {
      const randomIndex = Math.floor(Math.random() * aliveCharacters.length);
      return aliveCharacters[randomIndex];
    }
    return null;
  }
}

const game = new Game();
game.startGame();