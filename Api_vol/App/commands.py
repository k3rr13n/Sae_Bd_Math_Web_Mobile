from .extensions import db
from .app import app
from .models import *
from sqlalchemy import text 
import os

@app.cli.command()
def syncdb():
    db.drop_all()
    db.create_all ()

    sql_file_path = os.path.join(os.path.dirname(__file__), "../../data/script_bd/insertion_bd.sql")

    if os.path.exists(sql_file_path):
        with open(sql_file_path, "r", encoding="utf-8") as f:
            sql_commands = f.read().split(';')
            
            for command in sql_commands:
                if command.strip(): 
                    db.session.execute(text(command))
            
            db.session.commit()
            print("Données du fichier SQL insérées avec succès !")
    else:
        print(f"Erreur : Le fichier {sql_file_path} est introuvable.")

    db.session.commit() 
    print("Base de données créée")