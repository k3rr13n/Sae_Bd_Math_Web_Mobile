from .extensions import db
from .app import app
from .models import *

@app.cli.command()
def syncdb():
    db.drop_all()
    db.create_all ()

    db.session.commit() 
    print("Base de données créée")