from App.models import Ville

def test_ville_init():
    ville = Ville("Shanghai", 2, 2)
    assert ville.nom_ville == "Shanghai"
    assert ville.id_pays == 2
    assert ville.id_ville == 2

def test_ville_repr(testapp): #testapp est la fixture définie dans conftest.py
    with testapp.app_context():
        ville=Ville.query.get(1)
        assert repr(ville) == "< La Ville Paris a pour id 1>"