from App.models import Compagnie

def test_compagnie_init():
    compagnie = Compagnie("Aircalin")
    assert compagnie.nom_compagnie == "Aircalin"

def test_compagnie_repr(testapp): #testapp est la fixture définie dans conftest.py
    with testapp.app_context():
        compagnie=Compagnie.query.get("Air france")
        assert repr(compagnie) == "< La compagnie Air france>"