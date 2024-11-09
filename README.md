# Hyrule Castle

## RPG inspiré de *The Legend of Zelda* (Tour par tour)

### Description

**Hyrule Castle** est un jeu de rôle **TypeScript** en tour par tour inspiré de l'univers de *The Legend of Zelda*. Le joueur incarne un héros généré aléatoirement, qui devra traverser plusieurs étages d'un château rempli d'ennemis et de boss pour accomplir sa quête.

### En quoi consiste le jeu ?

- :game_die: Le joueur commence avec un personnage généré aléatoirement, chaque personnage ayant des statistiques uniques.
- :shield: Le jeu se déroule en tour par tour. Le joueur peut frapper, se mettre en garde ou se soigner à chaque tour.
- :crossed_swords: Des ennemis générés aléatoirement apparaissent à chaque étage. Tous les 10 étages, un boss puissant attend le joueur.
- :star: Le joueur peut choisir la difficulté du jeu et le nombre d'étages à traverser pour finir la partie.

### Fonctionnalités

- **Une version moddée du jeu !** : Le jeu moddé possède les fonctionnalités de statistiques, de difficulté/combats, et avec un peu de lore !
- **Personnages divers** : Chaque personnage a des statistiques différentes (attaque, défense, vie, etc.), offrant une expérience unique à chaque partie.
- **Système de niveau** : À chaque victoire contre un ennemi, le joueur peut augmenter ses statistiques.
- **Mécaniques de combat** : Frapper, se mettre en garde, se soigner et, bien que cela ne serve à rien, il est aussi possible de s’échapper.
- **Génération aléatoire** : Les ennemis et les boss sont générés aléatoirement à chaque partie, garantissant des expériences différentes à chaque session de jeu.
- **Choix de la difficulté et des combats** : Le joueur peut définir la difficulté et le nombre de combats nécessaires pour finir la partie.

## Installation

### Installation du projet

1. Téléchargez le projet en cliquant sur le bouton **Code** puis en sélectionnant **Download ZIP**.
2. Accédez au dossier du projet :

```
cd TheHyruleCastle
```

3. Installez les dépendances nécessaires avec npm (vous aurez donc besoin de node, que vous pouvez installer avec la commande ```apt install node``` sur le terminal) :

```npm install``` ou ```npm i```

### Choisissez la version du jeu à laquelle vous voulez jouer :

- Pour lancer la version moddée du jeu, exécutez le script suivant :

```npm run modded```

- Pour la version de base, exécutez celle-là :

```npm run base```

#### Après chaque 10 étages (Le jeu de base en a 10), vous devrez affronter un boss. Si vous parvenez à vaincre tous les ennemis et les boss avant d'épuiser vos ressources, vous gagnez !

