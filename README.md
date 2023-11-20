# API Node.js avec Docker

## Description
Ce projet est une API Node.js qui a été dockerisée. Il y a deux Dockerfiles fournis pour construire l'image Docker de l'application en utilisant des approches différentes.

## Dockerfiles

- `Dockerfile`: Construit et exécute l'API avec un seul stage de build.
- `Dockerfile_FROM`: Utilise un multi-stage build pour séparer les étapes de construction et d'exécution de l'API.

## Analyse de Sécurité avec Trivy

Deux analyses de sécurité ont été effectuées sur les images Docker construites à partir des Dockerfiles :

- `dockerfile_avec_from.txt`: Résultats de l'analyse Trivy pour l'image `api_avec_from`.
- `dockerfile_sans_from.txt`: Résultats de l'analyse Trivy pour l'image `api_sans_from`.

Ces fichiers contiennent les résultats de l'analyse de sécurité pour chaque image et peuvent être utilisés pour évaluer la sécurité de l'image Docker.

## Prérequis

- Docker installé sur votre machine.

## Construire les images Docker

Pour construire l'image Docker en utilisant le `Dockerfile` simple stage :


`docker build -t api_sans_from -f Dockerfile .`

Pour construire l'image Docker en utilisant le `Dockerfile` multi-stage : 

`docker build -t api_avec_from -f Dockerfile_FROM .`


## Exécuter l'API

Pour lancer le conteneur Docker de l'API en utilisant le port 8080 et le Dockerfile simple stage :

```bash
docker run -it -p 8080:8080 api_sans_from
```

Notez que la commande ci-dessus lie le port 8080 de l'hôte au port 8080 du conteneur.

Pour lancer le conteneur Docker de l'API en utilisant le port 8080 et le Dockerfile  multi-stage :

```bash
docker run -it -p 8080:8080 api_avec_from
```

Notez que la commande ci-dessus lie le port 8080 de l'hôte au port 8080 du conteneur.

## Utilisation

Une fois le conteneur en cours d'exécution, vous pouvez accéder à l'API via `http://localhost:8080/ping`.

