[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Commits][commit-shield]][commit-url]
[![Integration tests][build-shield]][build-url]
[![Licence][licence-shield]][licence-url]
[![Website][website-shield]][website-url]
[![Build][milestones1-shield]][milestones1-url]
[![Finetunning][milestones2-shield]][milestones2-url]

<br />
<p align="center">

  <h1 align="center">Projet Git</h3>

  <p align="center">
    Repo for Git best practices.
    <br />
    <br />
    <a href="https://github.com/sDev67/projet_git/issues/new?assignees=&labels=bug&template=bug_report.yml&title=%5BBug%5D%3A+">Report Bug</a>
    ·
    <a href="https://github.com/sDev67/projet_git/issues/new?assignees=&labels=feature&template=feature_request.yml&title=%5BFEATURE%5D%3A+">Request Feature</a>
    .
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-delivery">Project Delivery</a>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This repo is a project rendering that serves to demonstrate the good practices of Git and Gihub.

### Built With

- Html
- Scss
- JavaScript
- Vite

### License

[MIT](https://github.com/sDev67/projet_git/blob/feature/readme/LICENSE)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Install [Git](https://git-scm.com/)
- Install [Docker](https://www.docker.com/).

### Local Development

1. Build the docker image and start the container :

    ```bash
    docker-compose build # Build the conainer
    docker-compose up -d # Run the container
    ```

2. Get into the container :

   ```bash
    docker exec -ti projet-git-node-1
    ```

    <b style="text-decoration: underline;">You will need to run all the project commands into the container.</b>

3. Install the local server, then run it :

    ```bash
    npm install # Install the local server and the dependencies
    npm start # Start the server
    ```

4. Open [http://localhost:8000/](http://localhost:8000/)

### Run styles compilation

Style compilation is made with **Sass**. To run it, use :

```bash
$ cd sources
/sources $ sass --watch scss/styles.scss css/style.css
```

### Run tests

#### Run cypress

```bash
npx cypress run # To execute the test
npx cypress open # Open the GUI (dont work in container)
```

#### Run js linter

```bash
npm run lint-js
```

## Project delivery

### Commits signés de tous les membres et sur tous les commits

Pour cela, on installe premièrement https://www.gnupg.org/download/ et on crée notre clé GPG<br>
On effectue la commande `gpg --full-generate-key` <br>
Puis on choisi `clé RSA` parmi les clés proposées <br>
Ensuite on indique la taille de la clé : `4096` <br>
Puis on sélectionne `0` pour que la clé ne s'expire jamais <br>
Puis on confirme que les informaitions sont correctes avec un `y` <br>
Ensuite on renseigne le nom d'utilisateur qui doit être identique au nom présent dans la config, l'adresse mail, et un commentaire <br>
Pour finaliser la création de la clé, il faut choisir : `o` <br>
Après avoir renseigné cela, toujours dans le terminal, on saisi la commande `gpg --list-secret-keys --keyid-format=long` <br>
On copie l'identifiant situé après le slash dans la ligne `sec` <br>
Puis on execute la commande `gpg --armor --export L862717XYZ98P123` avec L86.... l'identifiant copié au préalable <br> <br>
Puis on renseigne cette clé sur github. <br>
  - Aller dans les paramètres <br>
![setting_image](./images/screen_setting.PNG) <br> 
  - puis SSH and GPG keys <br>
![onglet_ssh_gpg_image](./images/screen_onglet_ssh_gpg.PNG)<br> 
puis ajouter une nouvelle clé GPG <br>
![nouvelle clé gpg](./images/screen_new_gpg_key.PNG) <br>

Après avoir ajouté la clé sur github, il faut ajouter dans la config de notre terminal, les informations de cette clé. <br>
Faire : `git config --global user.signinkey {identifiant}` <br>
Puis, pour que chaque commits soit signés, executer la commande : `git config --global commit.gpgsign true` <br>
Ainsi, tous nos prochains commit seront automatiquement signé

### Issue + issue templates

Pour créer une issue, il faut aller dans l'onglet `issues` puis cliquer sur `new issue`. Vous serez ensuite redirigé vers une page où vous pourrez créer votre issue à l'aide des indications données par le template.

Le template est fait en yaml et permet de créer un template avec des informations précises. Nous avons 2 templates : un pour les bugs et un pour les features.

### Merge Request + Merge Request template

Pour créer une pull request, il faut aller dans l'onglet `pull requests` puis cliquer sur `new pull request`. Vous serez ensuite redirigé vers une page où vous pourrez créer votre pull request à l'aide des indications données par le template.

Le template est fait en Markdown et permet de créer un template avec des informations personnalisées.

### Github project

Afin d'oganiser nos issues et nos pull requests, nous avons créé un projet github. Il permet de créer des colonnes et de déplacer les issues et les pull requests dans ces colonnes. Nous nous sommes basé sur un template disponible sur github. Ce dernier propose 4 colonnes : `To do`, `In progress`, `Review in progress` et `Done`. Nous avons ajouté une colonne `Backlog` pour les issues qui ne sont pas encore prêtes à être traitées et `Ready` pour les issues qui sont prête à être intégré dans le prochain sprint.

Également, le template de projet propose des tableaux pour trier les issues par ordre de priorité et de complexité.

### Contribution guidelines and code of conduct

#### Contribution guidelines

Nous avons créé un fichier `CONTRIBUTING.md` qui contient les règles à respecter pour contribuer au projet. Il contient notamment les règles de nommage des branches, les règles de nommage des commits, les règles de nommage des pull requests et les règles de nommage des issues.

- [CONTRIBUTING](./.github/CONTRIBUTING.md)

#### Code of conduct

Nous avons créé un fichier `CODE_OF_CONDUCT.md` qui contient les règles de bonne conduite à respecter pour contribuer au projet. Il contient notamment les règles de respect, les règles de politesse, les règles de respect de la vie privée et les règles de respect des droits d'auteur.

- [CODE_OF_CONDUCT](./.github/CODE_OF_CONDUCT.md)

### .gitignore

Puisque notre projet est un projet *Node.js*, nous avons utilisé un template de `.gitignore` pour *Node.js* disponible sur [gitignore.io](https://www.toptal.com/developers/gitignore/api/node). Ce template permet d'ignorer les fichiers et dossiers qui ne sont pas utiles pour le projet.

### Respect du Git flow (les bonnes branches et les bonnes protection de branche)

Mise en place de branches feature/xxxx, develop et hotfix <br>
Pour avoir un environnement de travail et une branche main sécurisé, il faut mettre en place quelques règle pour la protection. <br>

- Pour cela aller dans `setting` de votre repo <br>
![repo setting](./images/screen_repo_setting.PNG) <br>
- Puis dans `branches` <br>
![branch](./images/screen_branch.PNG) <br>
- Puis vous pouvez ajouter une nouvelle règle sur la branche souhaité, éditer vos règles déjà présente ou bien supprimer des protections déjà existante <br>
![new rule](./images/screen_new_rule.PNG) <br>

Dans la branche `main`, on a décidé de mettre les règles suivantes : <br>

- `Require a pull request before merging` <br>
Cette règle nous oblige à effectuer une pull/merge request avant de merger sur la branche main <br>
- `Require approvals` <br>
Après avoir effectuer une pull request, on doit avoir au moins 1 personne qui approuve la pull request <br>
- `Require status checks to pass before merging` <br>
Permet de merge uniquement lorsque tous les tests sont passés <br>
- `Require branches to be up to date before merging` <br>
Oblige à avoir la dernière version avant de pouvoir merge <br>
- `Require signed commits` <br>
Les commits effectués sur main doivent tous être signés <br>
- `Require deployments to succeed before merging` <br>
*to complete* <br>
- `Allow force pushes` <br>
Nous autorise à effectuer des pushs forcés. <br>
- `Specify who can force push` <br>
On indique qui sont les utilisateurs qui peuvent effectuer des pushs forcés <br>

### Githooks

#### Pre-commit

Le pre-commit permet d'effectuer des actions avant chaque commit. Nous avons utilisé le pre-commit pour lancer les tests unitaires et les tests d'intégration avant chaque commit.

Nous avons dans notre projet un fichier `package.json` qui contient les scripts à lancer. Nous avons donc ajouté un script `test` qui lance les tests d'intégration et un script `lint-js` qui lance EsLint.

```json
"test": "npx cypress run",
"lint-js": "npx eslint sources/js/*.js",
```

#### Commit-msg

Le commit-msg permet d'effectuer des actions sur le message de commit. Nous avons utilisé le commit-msg pour vérifier que le message de commit respecte les règles de nommage.

Nous avons donné dans le fichier `commit-msg` les règles de nommage des commits. Nous avons utilisé une regex pour vérifier que le message de commit respecte les règles de nommage.

Cette regex verifie que le message de commit commence par un hashtag, le numéro d'issue, un espace, deux points, un espace et le nom du commit.

### Github Actions

Nous avons utilisé Github Actions pour automatiser les tests d'intégration et les tests unitaires. Nous avons utilisé le template `Node.js` disponible sur Github. Ce template permet de lancer les tests d'intégration et les tests unitaires à chaque push sur une branche. Il permet également de lancer les tests d'intégration et les tests unitaires à chaque pull request.

Voici une explication de chaque étape du fichier `nodejs.yml` :

- `name` : nom de l'action
- `on: push` : Lorsqu'il y a un push sur une branche, la Github Action est lancée.
- `on: push: branches: [ main ]` : Lorsqu'il y a un push sur la branche main, la Github Action est lancée.
- `on: pull_request` : Lorsqu'il y a une pull request, la Github Action est lancée.
- `jobs` : Les jobs sont les tâches à effectuer.
- `jobs.build` : Le job `build` permet de lancer les tests d'intégration et les tests unitaires.
- `jobs.build.runs-on` : Le job `build` est lancé sur un environnement `ubuntu-latest`.
- `jobs.build.strategy.matrix.node-version` : La version de Node.js utilisée pour lancer les tests d'intégration et les tests unitaires (ici la version 14, 16 et 18).
- `jobs.build.steps` : Les étapes du job `build`.
- `jobs.build.steps.uses: actions/checkout@v3` : Cette action permet de récupérer le code du projet.
- `jobs.build.steps.name` : Le nom des actions à effectuer dans les étapes du job `build`.
- `jobs.build.steps.uses: actions/setup-node@v1` : Cette action permet d'installer Node.js.
- `jobs.build.steps.with` : Les paramètres à donner aux actions à effectuer dans les étapes du job `build`.
- `jobs.build.steps.run` : Les commandes à effectuer dans les étapes du job `build`.

Lorsque la Github Action est lancée, elle effectue les étapes suivantes :

- `npm i` : Cette commande permet d'installer les dépendances du projet.
- `npm run lint-js` : Cette commande permet de lancer EsLint.
- `npm test` : Cette commande permet de lancer les tests d'intégration.

Lorsque la Github Action a terminé, elle nous donne le résultat des tests d'intégration et des tests unitaires: 

- Si les tests sont passés, la Github Action est verte.
- Si les tests sont échoués, la Github Action est rouge.
- Si les tests sont en cours, la Github Action est jaune.
- Si les tests sont annulés, la Github Action est gris.
- Si les tests sont en attente, la Github Action est bleu.

### Synchro sur un repo gitlab

**Avec la commande "git push" -> push sur les 2 remote (github + gitlab)**

Pour push sur deux remote à la fois avec un git push, il faut dans un premier temps ajouter les deux remote :

```bash
git remote add github https://github.com/sDev67/projet_git.git
git remote add gitlab https://gitlab.com/hkanoute/projet_git.git
```

Une fois cela fait, il faut indiquer sur quel remote push :

```bash
git remote set-url --add --push origin https://github.com/sDev67/projet_git.git
git remote set-url --add --push origin https://gitlab.com/hkanoute/projet_git.git
```

Une fois cela fait, vous pouvez push sur les deux remotes avec un git push.

<!-- CONTACT -->

## Contact

👤 **Nicolas Barbarisi** :

- [![website](https://img.shields.io/badge/website-2300843e?style=for-the-badge&logo=ko-fi&logoColor=white)](https://nicolas-barbarisi.com)
- [![github](https://img.shields.io/badge/ChrisBradford2-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChrisBradford2)
- [![linkedin](https://img.shields.io/badge/nicolas_barbarisi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicolas-barbarisi-a4a97a193/)

👤 **Hamidou Kanoute**

- [![github](https://img.shields.io/badge/hkanoute-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hkanoute)
- [![linkedin](https://img.shields.io/badge/Hamidou_Kanoute-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hamidou-kanoute/)

👤 **Serkan Deveci**

- [![website](https://img.shields.io/badge/website-2300843e?style=for-the-badge&logo=ko-fi&logoColor=white)](http://serkan-deveci.herokuapp.com/fr)
- [![github](https://img.shields.io/badge/sDev67-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChrisBradford2)
- [![linkedin](https://img.shields.io/badge/Serkan_Deveci-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/serkan-deveci-6086aa217/)

[contributors-shield]: https://img.shields.io/github/contributors/sDev67/projet_git.svg?style=for-the-badge
[contributors-url]: https://github.com/sDev67/projet_git/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sDev67/projet_git.svg?style=for-the-badge
[forks-url]: https://github.com/sDev67/projet_git/network/members
[stars-shield]: https://img.shields.io/github/stars/sDev67/projet_git.svg?style=for-the-badge
[stars-url]: https://github.com/sDev67/projet_git/stargazers
[issues-shield]: https://img.shields.io/github/issues/sDev67/projet_git.svg?style=for-the-badge
[issues-url]: https://github.com/sDev67/projet_git/issues
[build-shield]: https://img.shields.io/github/workflow/status/sDev67/projet_git/Node.js%20CI?style=for-the-badge
[build-url]: https://github.com/sDev67/projet_git/actions/workflows/node.js.yml
[licence-shield]: https://img.shields.io/github/license/sDev67/projet_git?style=for-the-badge
[licence-url]: https://github.com/sDev67/projet_git/blob/main/LICENSE
[website-shield]: https://img.shields.io/website?down_color=red&down_message=down&style=for-the-badge&url=https%3A%2F%2Fchrisbradford2.github.io%projet_git%2F
[website-url]: https://venom-linux.xyz
[milestones1-shield]: https://img.shields.io/github/milestones/progress-percent/sDev67/projet_git/1?style=for-the-badge
[milestones1-url]: https://github.com/sDev67/projet_git/milestone/1
[milestones2-shield]: https://img.shields.io/github/milestones/progress-percent/sDev67/projet_git/2?style=for-the-badge
[milestones2-url]: https://github.com/sDev67/projet_git/milestone/2
[commit-shield]: https://img.shields.io/github/commit-activity/m/sDev67/projet_git?style=for-the-badge
[commit-url]: https://github.com/sDev67/projet_git/commits/