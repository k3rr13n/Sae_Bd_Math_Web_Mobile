from App.models import Vol
from datetime import datetime

def test_vol_init():
    vol = Vol("Aircalin", 98963, "2025-09-15 12:02:56", "2025-09-15 13:32:12", "2AB", "B", "Rio de Janeiro-Galeão", "Newark")
    assert vol.nom_compagnie == "Aircalin"
    assert vol.numero_vol == 98963
    assert vol.date_heure_depart == "2025-09-15 12:02:56"
    assert vol.date_heure_arrive_prevue == "2025-09-15 13:32:12"
    assert vol.nom_terminal_1 == "2AB"
    assert vol.nom_terminal_2 == "B"
    assert vol.nom_aeroport_1 == "Rio de Janeiro-Galeão"
    assert vol.nom_aeroport_2 == "Newark"

def test_vol_repr(testapp): #testapp est la fixture définie dans conftest.py
    with testapp.app_context():
        vol=Vol.query.get(("Air france", 54123, datetime.strptime("2025-01-03 15:32:12", '%Y-%m-%d %H:%M:%S')))
        assert repr(vol) == "< Le vol 54123 de la compagnie Air france partant de l'aeroport Charle de gaulle et arrivant à l'aeroport Shanghai-Pudong>"

# nom_compagnie="Air france", numero_vol=54123, date_heure_depart="2025-01-03 15:32:12", 
# date_heure_arrive_prevue="2025-01-03 19:32:12", nom_terminal_1="E", nom_terminal_2="F", 
# nom_aeroport_1="Charle de gaulle", nom_aeroport_2="Shanghai-Pudong"