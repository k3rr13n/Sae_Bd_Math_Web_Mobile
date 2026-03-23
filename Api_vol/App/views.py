#from flask import jsonify , abort , make_response , request , url_for
from flask_restx import Resource, Namespace, abort
from ..app import app
from.models import *

ns = Namespace('vols')

@ns.route('/')
class VolList(Resource):
    def get(self):
        # Implementation for getting all flights
        pass
def get_vol() :
    pass