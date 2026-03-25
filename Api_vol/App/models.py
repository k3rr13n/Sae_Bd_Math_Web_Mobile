from .extensions import db


class Pays(db.Model):
    __tablename__ = 'pays'
    id_pays = db.Column(db.Integer, primary_key=True, nullable=False)
    nom_pays = db.Column(db.String(5))


    def __init__(self, id_pays, nom_pays):
        self.id_pays = id_pays
        self.nom_pays = nom_pays

    def __repr__(self):
        return f"<L'id du pays {self.nom_pays} est {self.id_pays}>"

    
class Ville (db.Model):
    __tablename__ = 'ville'

    id_ville = db.Column(db.Integer, primary_key=True)
    id_pays = db.Column(db.Integer, db.ForeignKey('pays.id_pays'), nullable=False)
    nom_ville = db.Column(db.String(50))

        
    aeroports = db.relationship("Aeroport", backref="ville", lazy = True)


    def __init__(self, id_ville, nom_ville, id_pays):
        self.id_ville = id_ville
        self.id_pays = id_pays
        self.nom_ville = nom_ville
        

    def __repr__(self):
        return f"< La Ville {self.nom_ville} a pour id {self.id_ville}>"


class Aeroport (db.Model):
    __tablename__ = 'aeroport'
    
    nom_aeroport = db.Column(db.String(50), primary_key=True, nullable =False)
    
    id_ville = db.Column(db.Integer, db.ForeignKey('ville.id_ville'), nullable=False)
    
    terminal= db.relationship("Terminal", backref="aeroport", lazy =True)


    def __init__(self, id_ville, nom_aeroport):
        
        self.nom_aeroport = nom_aeroport
        self.id_ville = id_ville

    def __repr__(self):
        return f"< L'aeroport {self.nom_aeroport} a pour id {self.id_ville}>"

class Terminal (db.Model):
    __tablename__ = 'terminal'

    nom_aeroport = db.Column(db.String(50), db.ForeignKey('aeroport.nom_aeroport'), primary_key=True)
    nom_terminal = db.Column(db.String(15), primary_key=True)
    
    def __init__(self, nom_aeroport,nom_terminal):
        self.nom_aeroport = nom_aeroport
        self.nom_terminal = nom_terminal
        

    def __repr__(self):
        return f"< Le terminal {self.nom_terminal} de l'aeroport {self.nom_aeroport}>"

class Vol (db.Model):
    __tablename__ = 'vol'

    #nom_compagnie = db.Column(db.String(50), primary_key=True)
    nom_compagnie =db.Column(db.String(50), db.ForeignKey('compagnie.nom_compagnie'), primary_key=True)
    numero_vol = db.Column(db.Integer, primary_key=True)
    date_heure_depart = db.Column(db.DateTime, primary_key=True)

    date_heure_arrive_prevue = db.Column(db.DateTime)
    
    #Départ
    nom_aeroport_1 = db.Column(db.String(50))
    nom_terminal_1 = db.Column(db.String(15))

    #Arrivée
    nom_aeroport_2 = db.Column(db.String(50))
    nom_terminal_2 = db.Column(db.String(15))


    __table_args__ = (
        db.ForeignKeyConstraint(
            ['nom_aeroport_1', 'nom_terminal_1'],
            ['terminal.nom_aeroport', 'terminal.nom_terminal'],
        ),
        db.ForeignKeyConstraint(
            ['nom_aeroport_2', 'nom_terminal_2'],
            ['terminal.nom_aeroport', 'terminal.nom_terminal'],
        ),
    )

    terminal_depart = db.relationship("Terminal", foreign_keys=[nom_aeroport_1, nom_terminal_1], backref="vol_depart", lazy=True)
    
    terminal_arrivee = db.relationship("Terminal", foreign_keys=[nom_aeroport_2, nom_terminal_2], backref="vol_arrivee", lazy=True)

    def __init__(self,nom_compagnie, numero_vol, date_heure_depart, date_heure_arrive_prevue, nom_aeroport_1,nom_aeroport_2, nom_terminal_1, nom_terminal_2):
    
        self. nom_compagnie= nom_compagnie
        self. numero_vol= numero_vol
        self.date_heure_depart= date_heure_depart
        self.date_heure_arrive_prevue= date_heure_arrive_prevue
        self.nom_aeroport_1= nom_aeroport_1
        self.nom_aeroport_2= nom_aeroport_2
        self.nom_terminal_1= nom_terminal_1
        self.nom_terminal_2= nom_terminal_2

    def __repr__(self):
        return f"< Le vol {self.numero_vol} de la compagnie {self.nom_compagnie} partant de l'aeroport {self.nom_aeroport_1} et arrivant à l'aeroport {self.nom_aeroport_2}>"

class Compagnie (db.Model):
    __tablename__ = 'compagnie'

    nom_compagnie = db.Column(db.String(50), primary_key=True)

    def __init__(self, nom_compagnie):
        self.nom_compagnie = nom_compagnie

    def __repr__(self):
        return f"< La compagnie {self.nom_compagnie}>"
    
    
##########  VOL  ##############

def get_all_vols():
    return Vol.query.all()

def get_vol(nom_compagnie, numero_vol, date_heure_depart):
    return Vol.query.get((nom_compagnie, numero_vol, date_heure_depart))

def create_vol(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrive_prevue, 
               nom_aeroport_1,nom_aeroport_2, nom_terminal_1, nom_terminal_2):
    
    vol = Vol(nom_compagnie=nom_compagnie, numero_vol=numero_vol, date_heure_depart=date_heure_depart,
              date_heure_arrive_prevue=date_heure_arrive_prevue, nom_aeroport_1=nom_aeroport_1, 
              nom_aeroport_2=nom_aeroport_2, nom_terminal_1=nom_terminal_1, nom_terminal_2=nom_terminal_2)
    db.session.add(vol)
    db.session.commit()
    return vol

def get_all_compagnies():
    return Compagnie.query.all()

def get_compagnie(nom_compagnie):
    return Compagnie.query.get(nom_compagnie)

def get_all_aeroports():
    return Aeroport.query.all()

def get_aeroport(nom_aeroport):
    return Aeroport.query.get(nom_aeroport)

def get_all_villes():
    return Ville.query.all()

def get_ville(id_ville):
    return Ville.query.get(id_ville)

def get_all_pays():
    return Pays.query.all()

def get_pays(id_pays):
    return Pays.query.get(id_pays)

def get_all_terminals():
    return Terminal.query.all()

def get_terminal(nom_terminal, nom_aeroport):
    return Terminal.query.get((nom_terminal, nom_aeroport))