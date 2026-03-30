from App.models import Terminal

def test_terminal_init():
    terminal = Terminal("Shanghai-Pudong", "F")
    assert terminal.nom_aeroport == "Shanghai-Pudong"
    assert terminal.nom_terminal == "F"

def test_terminal_repr(testapp): #testapp est la fixture définie dans conftest.py
    with testapp.app_context():
        terminal=Terminal.query.get(("Charle de gaulle", "E"))
        assert repr(terminal) == "< Le terminal E de l'aeroport Charle de gaulle>"

