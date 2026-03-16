from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
def mkpath (p) :
    return os.path.normpath (
    os.path.join (
        os.path.dirname ( __file__ ) ,p)
    )
app = Flask ( __name__ )
app. config ['SQLALCHEMY_DATABASE_URI'] = ('sqlite:///'+ mkpath ('../quiz.db') )
app. config ["SQLALCHEMY_ECHO"] = True

cors = CORS(app, resources={r"/todo/api/v1.0/*": {"origines": "*"}})

db = SQLAlchemy (app)