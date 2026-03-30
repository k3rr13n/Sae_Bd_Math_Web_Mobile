from App.models import Pays

def test_pays_init():
    pays = Pays("BR", 2)
    assert pays.nom_pays == "BR"
    assert pays.id_pays == 2

def test_pays_repr(testapp): #testapp est la fixture définie dans conftest.py
    with testapp.app_context():
        pays=Pays.query.get(1)
        assert repr(pays) == "<L'id du pays FR est 1>"