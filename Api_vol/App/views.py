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


@ns.route('/compagnies')
class CompagnieList(Resource):
    @ns.marshal_list_with(compagnie_model)
    def get(self):
        return get_all_compagnies()
#soucis
@ns.route('/ville')
class VilleList(Resource):
    @ns.marshal_list_with(ville_model)
    def get(self):
        return get_all_villes()

#soucis
@ns.route('/villes/<int:id>')
class Ville(Resource):
    @ns.marshal_with(ville_model)
    def get(self, id):
        return get_ville(id)
    
@ns.route('/pays')
class PaysList(Resource):
    @ns.marshal_list_with(pays_model)
    def get(self):
        return get_all_pays()
 
#trouve pas ville_id
@ns.route('/aeroports')
class AeroportListe(Resource):
    @ns.marshal_list_with(aeroport_model)
    def get(self):
        return get_all_aeroports()

#revoir ordre des champs dans bd a revoir
@ns.route('/terminals')
class TerminalListe(Resource):
    @ns.marshal_list_with(terminal_model)
    def get(self):
        return get_all_terminals()
 