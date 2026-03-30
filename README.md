# Sae_Bd_Math_Web_Mobile

### Lien vidéos d'utilisation ###
https://filesender.renater.fr/?s=download&token=f38b1573-af94-4f01-a504-01e0bbdce5d6 

## Description générale du projet  

 Pour la partie Web/Mobile de la SAE (SAE3.01c), l’objectif est de réaliser une application complète de gestion de données à partir de la base de données réalisée au préalable pour la partie BD/Maths. La base de données porte sur une gestion de vols d'aéroport. Elle nous a servi à développer une API à partir des différentes tables et de relier les données à ceux-ci. L’API nous a ensuite permis de faire une SPA (Single Page Application) et une application mobile développée avec Flutter. La SPA sert à manipuler les informations de la base de données (modification, suppression, création, et accès aux données) avec une interface graphique. 
Le mobile sert seulement à accéder plus facilement aux informations.  
    
  L'API est développée avec Flask avec l'architecture RESTx et est codée en Python, la base de données étant gérée à l'aide de l'ORM SQLAlchemy.
  Le mobile est développé avec Flutter. 
  La SPA (Single Page Application) est développé en Javascript.
  Le Flutter et la SPA utilise tout les deux l'API pour pouvoir gérer les données de l'application



## Composition de l'équipe de développeurs

- Blandin Pernelle (@PernelleBlandin)   
- Hachelef Asma (@Asminouch)  
- Kerrien Bastian (@k3rr13n)  

## Packages nécessaires au lancement de l'application

La liste des packages nécessaire à l'application se trouve dans le fichier `requirements.txt`  

## Commandes à effectuer pour lancer l'API

Tout d'abord nous vous conseillons de lancer l'application dans un environnement virtuel afin de ne pas surchager votre ordinateur. Vous pouvez par exemple utiliser `venv`.  
  
- Si vous ne l'avez pas installé, faites le avec la commande suivante :  
```sudo apt install python3-virtualenv```  
  
- Ensuite créez l'environnement virtuel :  
```virtualenv -p python3 venv```  

- Lancez l'environnement virtuel dans le dossier où se trouve le dossier `venv` :  
```source venv/bin/activate```

- Les packages que vous allez maintenant installer le seront dans cet environnement. Installez les packages nécessaires à l'application :  
```pip install -r requirements.txt -v```  

- Chargez la base de données en lançant cette commande depuis le dossier Api_vol :  
```flask syncdb```

- Maintenant lancez la commande
```flask run```
depuis la racine du projet, le serveur se lance et vous n'avez plus qu'à `Ctrl+clic` sur le lien pour voir la page s'afficher.
  
## Commandes à effectuer pour lancer le Flutter

# Prérequis:
- Il faut préalablement lancer le serveur de l'API pour avoir accès aux données.
- Avoir Flutter d'installer
-  Vous pouvez vérifier qu’il est bien installer en faisant `flutter doctor` dans un terminal. Si vous avez un  message d’erreur, c’est que Flutter n’est pas installé. On vous renvoie vers la documentation officielle :  https://docs.flutter.dev/install 

# Lancement:
- Déplacez vous dans le dossier `mobile/sae_avion/sae_s4_avion`
- Maintenant lancez la commande
```flutter run -d chrome```

## Commandes à effectuer pour lancer la SPA


# Prérequis:
- Il faut préalablement lancer le serveur de l'API pour avoir accès aux données.

# Lancement:
- Déplacez vous dans le dossier `SPA`
- Maintenant lancez la commande
```php -s localhost:8000```




