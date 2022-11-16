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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

*To complete*

### Built With

- Html
- Scss
- JavaScript
- Vite

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
