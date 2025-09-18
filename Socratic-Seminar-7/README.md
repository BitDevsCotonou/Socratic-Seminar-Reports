---
name: Git as Collaborative Tools for Bitcoin Open Source Software
description: Onboard to Git and GitHub and learn how they work in collaborative Open Source Projects
---

**Topic:** [#1](https://github.com/BitDevsCotonou/Socratic-Seminar-Reports/issues/1)

**Lead Facilitators:**
- @heyolaniran
- @AlphonseMehounme


## À propos de la session 

Pendant cet atelier, nous apprendrons à :

- 👤 **Créer et configurer un compte GitHub**
- 🛠️ **Installer Git localement** comme outil de gestion de versions
- 🔗 **Lier notre compte GitHub à Git**
- 🍴 **Comprendre la différence** entre forker et cloner un dépôt
- 📌 **Découvrir les concepts** d'issues et de pull requests, et comment les relier
- 👥 **Explorer les rôles** dans un projet et le processus de contribution open source inspiré de Bitcoin Core
- ✅ **Réviser les notions** vues pendant l'atelier et s'exercer à soumettre des propositions

## Comment bien se préparer

### 1. Avoir un compte sur [GitHub](https://github.com)

GitHub est une plateforme d'hébergement de code source pour vos projets et ceux de votre organisation.

### 2. Installer Git

[Git](https://git-scm.com/downloads) est un système de contrôle de version qui facilite la collaboration sur des projets de développement logiciel, qu'ils soient personnels ou professionnels.

#### Installer Git sur Windows

Sur le [site web de Git](https://git-scm.com/downloads), téléchargez la version de Git selon l'architecture de votre machine.

> **Important :** Assurez-vous d'ajouter Git aux variables d'environnement de votre machine lors de l'installation.

#### Installer Git sur Linux - Ubuntu

```bash
sudo apt-get update

# Lancez l'installation de Git
sudo apt-get install git
```

#### Installer Git sur Fedora 
```bash
sudo dnf install git
```

#### Vérifier son installation

```bash
git --version
```

Cette commande devrait afficher la version de Git installée sur votre système.




### 3. Connecter Git avec son compte GitHub

#### Définir son nom d'utilisateur

```bash
# Liez votre nom d'utilisateur GitHub à Git
git config --global user.name "votre_nom_utilisateur"

# Liez l'adresse e-mail avec laquelle vous avez créé votre compte GitHub
git config --global user.email "votre_email@example.com"
```

#### Configuration SSH pour Linux et distributions UNIX

Pour les utilisateurs sur **Linux et distributions UNIX**, configurez une clé SSH pour authentifier vos signatures :

```bash
ssh-keygen -t ed25519 -C "votre_email@example.com"
```

Un fichier contenant votre clé SSH sera créé dans le répertoire `~/.ssh`. Copiez le contenu du fichier `id_ed25519.pub` :

```bash
cd ~/.ssh

# Afficher la clé SSH publique
cat id_ed25519.pub
```

1. Cliquez sur votre profil GitHub dans le coin supérieur droit
2. Rendez-vous dans le menu **Paramètres**
3. Dans la section **Accès**, cliquez sur **Clés SSH et GPG**
4. Cliquez sur le bouton **Nouvelle clé SSH**
5. Nommez votre clé (ex: "Mon ordinateur personnel")
6. Insérez la clé SSH obtenue plus haut
7. Cliquez sur **Ajouter une clé SSH**

> **Note :** Vous devrez peut-être entrer votre mot de passe GitHub pour confirmer l'ajout de la clé.

---

## Nous rejoindre

Retrouvez tout les details de cet atelier sur notre [page Cloza](https://clooza.com/events/BITDEVS007). Nous serons ravi de vous accueillir et d'échanger avec vous sur le protocole Bitcoin.