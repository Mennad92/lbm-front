# Les biscuits de maman - Frontend

Bienvenue dans le projet **Les biscuits de maman** - Frontend ! Il s'agit de la partie frontale du site web de vente de biscuits artisanaux, développée avec React. Ce projet est conçu pour offrir une expérience utilisateur fluide et moderne, permettant de parcourir les différents types de biscuits, de gérer un panier d'achats, et de passer commande.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js 14+** : Vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).
- **npm** : L'outil de gestion de paquets de Node.js, installé avec Node.js.
- **Git** : Pour cloner le dépôt. Téléchargez-le depuis [git-scm.com](https://git-scm.com/).

## Installation

### 1. Cloner le dépôt

Commencez par cloner ce dépôt Git sur votre machine locale :

```bash
git clone https://github.com/Mennad92/lbm-front.git
cd lbm-front
```

### 2. Installer les dépendances
Installez les dépendances du projet en utilisant npm :

```bash
npm install
```

### 3. Lancer le serveur de développement
Une fois les dépendances installées, vous pouvez lancer le serveur de développement :

```bash
npm start
```
Visitez http://localhost:3000/ dans votre navigateur pour voir l'application en action.

## Fonctionnalités
- Navigation fluide entre les pages du site.
- Affichage dynamique des produits disponibles.
- Gestion du panier d'achats.
- Intégration avec l'API Backend pour la gestion des commandes.
- Connexion & Inscription

## Scripts disponibles
Dans le répertoire du projet, vous pouvez exécuter les scripts suivants :

```bash
npm start
```
Lance le serveur de développement en mode développement.
Ouvre automatiquement http://localhost:3000 dans votre navigateur.

```bash
npm run build
```
Construit l'application pour la production dans le dossier build.
Optimise React pour une meilleure performance.

Si vous n'êtes pas satisfait de la configuration de build et des dépendances, vous pouvez les "éjecter". Cette commande copiera toutes les configurations dans le projet, et vous donnera un contrôle total sur celles-ci.

## Déploiement
Pour déployer ce projet en production, suivez les étapes suivantes :

Exécutez npm run build pour créer le bundle optimisé pour la production.
Déployez le contenu du dossier build sur votre serveur web préféré.
Configurez votre serveur pour rediriger toutes les routes vers index.html si vous utilisez une application monopage (SPA).

## Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, merci de suivre les étapes suivantes :

- Forkez le dépôt.
- Créez une branche pour votre fonctionnalité (git checkout -b nouvelle-fonctionnalite).
- Commitez vos modifications (git commit -m 'Ajouter une nouvelle fonctionnalité').
- Poussez sur la branche (git push origin nouvelle-fonctionnalite).
- Ouvrez une Pull Request.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Remerciements
Merci d'avoir utilisé Les biscuits de maman - Frontend ! Nous espérons que vous apprécierez ce projet autant que nous avons apprécié le développer.