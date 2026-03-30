from App.models import Aeroport

def test_aeroport_init():
    aeroport = Aeroport(2, "Shanghai-Pudong")
    assert aeroport.id_ville == 2
    assert aeroport.nom_aeroport == "Shanghai-Pudong"

def test_aeroport_repr(testapp): #testapp est la fixture définie dans conftest.py
    with testapp.app_context():
        aeroport=Aeroport.query.get("Charle de gaulle")
        assert repr(aeroport) == "< L'aeroport Charle de gaulle a pour id 1>"