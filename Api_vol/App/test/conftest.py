import pytest
from App import app, db
from App.models import *
from datetime import datetime

@pytest.fixture()
def testapp():
    app.config.update({"TESTING":True,"SQLALCHEMY_DATABASE_URI":
    "sqlite:///:memory:","WTF_CSRF_ENABLED": False})
    
    with app.app_context():
        db.create_all()
        # Ajouter une compagnie de test
        compagnie = Compagnie(nom_compagnie="Air france")
        db.session.add(compagnie)

        pays = Pays(nom_pays="FR", id_pays=1)
        db.session.add(pays)

        ville = Ville(nom_ville="Paris", id_pays=1, id_ville=1)
        db.session.add(ville)

        aeroport = Aeroport(id_ville=1, nom_aeroport="Charle de gaulle")
        db.session.add(aeroport)

        terminal = Terminal(nom_aeroport="Charle de gaulle", nom_terminal="E")
        db.session.add(terminal)

        vol = Vol(nom_compagnie="Air france", numero_vol=54123, date_heure_depart=datetime.strptime("2025-01-03 15:32:12", '%Y-%m-%d %H:%M:%S'), date_heure_arrive_prevue=datetime.strptime("2025-01-03 19:32:12", '%Y-%m-%d %H:%M:%S'), nom_terminal_1="E", nom_terminal_2="F", nom_aeroport_1="Charle de gaulle", nom_aeroport_2="Shanghai-Pudong")
        db.session.add(vol)

        db.session.commit()
    yield app

    # Cleanup après les tests
    with app.app_context():
        db.drop_all()

@pytest.fixture
def client(testapp):
    return testapp.test_client()