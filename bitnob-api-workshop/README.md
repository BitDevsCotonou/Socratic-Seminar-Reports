# ⚡ bitdev-cotonou-bitnob-api-workshop

Une interface Vue.js simple pour envoyer des paiements en Bitcoin via le Lightning Network en utilisant l'API de Bitnob. Ce projet a été développé pour les participants du workshop BitDev à Cotonou.

## 🧪 Fonctionnalités

- Saisie de l'adresse Lightning (LNURL)
- Saisie du montant en satoshis
- Saisie de l'e-mail du client (requis par Bitnob)
- Envoi d'un paiement via Bitnob API
- Affichage des messages de succès ou d’erreur

## 🛠️ Technologies

- Vue 3
- Axios
- Lightning Network
- Bitnob API

## 🔧 Configuration du projet

### Installation des dépendances

yarn install


### Lancement en mode développement
```
yarn serve
```

### Compilation pour la production
```
yarn build
```

### Configuration de l'API

VITE_BITNOB_API_KEY=sk.*********************

