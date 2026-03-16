import json 
from .app import db

class Pays(db.Model):
    __tablename__ = 'pays'
    id_pays = db.Column(db.Integer, primary_key=True)
    nom_pays = db.Column(db.String(200))


    def __init__(self, id_pays, nom_pays):
        self.id_pays = id_pays
        self.nom_pays = nom_pays
    
class Ville (db.Model):
    __tablename__ = 'ville'
    id_ville = db.Column(db.Integer, primary_key=True)
    nom_ville = db.Column(db.String(200))
    
    id_pays = db.relationship("Pays", backref="ville", lazy = True)


    def __init__(self, id_ville, nom_ville):
        self.id_ville = id_ville
        self.nom_ville = nom_ville
        self.id_pays = ""


class Aeroport (db.Model):
    __tablename__ = 'aeroport'
    
    nom_aeroport = db.Column(db.String(200), primary_key=True)
    
    id_ville = db.relationship("Ville", backref="ville", lazy = True)


    def __init__(self, id_ville, nom_aeroport):
        self.id_ville = id_ville
        self.nom_aeroport = nom_aeroport

class Terminal (db.Model):
    __tablename__ = 'terminal'
    #TODO a revoir pck clé composé
    nom_terminal = db.Column(db.String(200), primary_key=True)
    nom_aeroport = db.relationship("Aeroport", backref="aeroport", lazy = True, primary_key=True)


    def __init__(self, nom_terminal, nom_aeroport):
        self.nom_terminal = nom_terminal
        self.nom_aeroport = nom_aeroport

class Vol (db.Model):
    __tablename__ = 'vol'
 #TODO revoir syntaxe pour element non null
    nom_compagnie = db.Column(db.String(200), primary_key=True)
    num_vol = db.Column(db.Integer, primary_key=True)
    date_heure_depart = db.Column(db.String(200), primary_key=True)
    date_heure_arrive_prevue = db.Column(db.String(200))
    nom_aeroport_1 = db.Column(db.String(200))
    nom_aeroport_2 = db.Column(db.String(200))
    nom_terminal_1 = db.Column(db.String(200))
    nom_terminal_2 = db.Column(db.String(200))


    def __init__(self,nom_compagnie, num_vol, date_heure_depart, date_heure_arrive_prevue, nom_aeroport_1,nom_aeroport_2, nom_terminal_1, nom_terminal_2):
    
        self. nom_compagnie= nom_compagnie
        self. num_vol= num_vol
        self.date_heure_depart= date_heure_depart
        self.date_heure_arrive_prevue= date_heure_arrive_prevue
        self.nom_aeroport_1= db.relationship("Aeroport", backref="aeroport", lazy = True)
        self.nom_aeroport_2=db.relationship("Aeroport", backref="aeroport", lazy = True)
        self.nom_terminal_1= db.relationship("Aeroport", backref="aeroport", lazy = True)
        self.nom_terminal_2=db.relationship("Terminal", backref="terminal", lazy = True)

