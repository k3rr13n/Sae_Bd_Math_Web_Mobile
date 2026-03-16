from .app import app ,db
from . models import create_quest

@app.cli.command()
def syncdb():
    db.drop_all()
    db.create_all ()
    qz1 = create_quest ("Maths")
    db.session.commit() 
    print("Base de données créée")