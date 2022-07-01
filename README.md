Utilisation :

- Lancer la base de données : sudo service mongod start
- Dans le répertoire server : npm install puis npm run start
- Dans le répertoire client : npm install puis ng serve

Fichiers principaux : 
(Côté Serveur) : 
    - app.js : la configuration du serveur
    - routes/route.js : les résultats des requêtes HTTP (get, post, delete) 
    - models/contacts.js : le schéma de la BDD

(Côté Client) :
    - header : component de la navbar
    - find-contacts : component enfant de header pour trouver la liste des contacts par prénom
    - register : component pour ajouter un contact à la BDD
    - contacts : component pour lister des contacts et les supprimer
    - models/contacts : contient les champs d'un contact
    - services/contact : service de requêtes au serveur
    - services/searchContact : service pour partager des données entre deux components
    - app-routing.module.ts : gérer les différentes routes pour l'affichage