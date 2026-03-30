from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .extensions import api, db
from .views import ns

import os
def mkpath (p) :
    return os.path.normpath (
    os.path.join (
        os.path.dirname ( __file__ ) ,p)
    )
app = Flask ( __name__ )
app.config ['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite3"
#app.config ["SQLALCHEMY_ECHO"] = True

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

#»db = SQLAlchemy (app)
api.init_app(app)
db.init_app(app)
api.add_namespace(ns)