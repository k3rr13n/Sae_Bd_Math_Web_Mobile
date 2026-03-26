#from flask import jsonify , abort , make_response , request , url_for
from flask_restx import Resource, Namespace, abort
#from .app import app
from .models import *
from .api_models import *

ns = Namespace('api')



############## VOL #################

@ns.route('/vols')
class VolList(Resource):
    @ns.marshal_list_with(vol_model)
    def get(self):
        return get_all_vols()
    
    @ns.expect(vol_input_model)
    @ns.marshal_with(vol_model)
    def post(self):
        data = ns.payload
        vol = create_vol(data['nom_compagnie'], data['numero_vol'],data['date_heure_depart'],
                        data['date_heure_arrive_prevue'], data['nom_aeroport_1'], data['nom_aeroport_2'], 
                        data['nom_terminal_1'], data['nom_terminal_2'])    
        return vol, 201


############## COMPAGNIE #################

@ns.route('/compagnies')
class CompagnieList(Resource):
    @ns.marshal_list_with(compagnie_model)
    def get(self):
        return get_all_compagnies()
    
    @ns.expect(compagnie_input_model)
    @ns.marshal_with(compagnie_model)
    def post(self):
        data = ns.payload
        ville = create_compagnie(data['id_ville'], data['id_pays'], data['nom_ville'])
        return ville, 201

    

############## VILLE #################

@ns.route('/villes')
class VilleList(Resource):
    @ns.marshal_list_with(ville_model)
    def get(self):
        return get_all_villes()
    
    @ns.expect(ville_input_model)
    @ns.marshal_with(ville_model)
    def post(self):
        data = ns.payload
        compagnie = create_ville(data['nom_compagnie'])
        return compagnie, 201


@ns.route('/villes/<int:id>')
class VilleItem(Resource):
    @ns.marshal_with(ville_model)
    def get(self, id):
        if not get_ville(id) :
            abort (404, "Ville introuvable")
        return get_ville(id)
    
    def delete(self, id):
        if supp_ville(id):
            return {"message": "Ville supprimée"}, 204
        abort(404, "Ville introuvable")
    

############## PAYS #################

@ns.route('/pays')
class PaysList(Resource):
    @ns.marshal_list_with(pays_model)
    def get(self):
        return get_all_pays()
    
    @ns.expect(pays_input_model)
    @ns.marshal_with(pays_model)
    def post(self):
        data = ns.payload
        pays = create_pays(data['id_pay'], data['nom_pays'])
        return pays, 201
 
############## AEROPORT #################

#trouve pas ville_id
@ns.route('/aeroports')
class AeroportListe(Resource):
    @ns.marshal_list_with(aeroport_model)
    def get(self):
        return get_all_aeroports()
    
    @ns.expect(aeroport_input_model)
    @ns.marshal_with(aeroport_model)
    def post(self):
        data = ns.payload
        aeroport = create_aeroport(data['nom_aeroport'], data['ville_id'])
        return aeroport, 201

@ns.route('/aeroports/<string:nom_actuel>')
class AeroportResource(Resource):
    @ns.expect(aeroport_input_model)
    @ns.marshal_with(aeroport_model)
    def put(self, nom_actuel):
        data = ns.payload # Le JSON envoyé par le client
        aero_modifie = modify_aeroport(
            nom_aeroport=nom_actuel,
            nvo_nom_aeroport=data.get('nom_aeroport'),
            id_ville=data.get('ville_id')
        )
        
        if not aero_modifie:
            abort(404, "Aéroport non trouvé")
            
        return aero_modifie
    


############## TERMINAL #################

@ns.route('/terminaux')
class TerminalListe(Resource):
    @ns.marshal_list_with(terminal_model)
    def get(self):
        return get_all_terminaux()
 
    @ns.expect(terminal_input_model)
    @ns.marshal_with(terminal_model)
    def post(self):
        data = ns.payload
        terminal = create_aeroport(data['nom_aeroport'], data['nom_terminal'])
        return terminal, 201