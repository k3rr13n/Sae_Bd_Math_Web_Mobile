#from flask import jsonify , abort , make_response , request , url_for
from flask_restx import Resource, Namespace, abort
#from .app import app
from .models import *
from .api_models import *

ns = Namespace('api')

@ns.route('/vols')
class VolList(Resource):
    @ns.marshal_list_with(vol_model)
    def get(self):
        return get_all_vols()

    