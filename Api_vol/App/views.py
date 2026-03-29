#from flask import jsonify , abort , make_response , request , url_for
from urllib.parse import unquote

from flask import request

from flask_restx import Resource, Namespace, abort
#from .app import app
from .models import *
from .api_models import *

ns = Namespace('api')


############## AEROPORT ################# ✅​

#trouve pas id_ville
@ns.route('/aeroports')
class AeroportList(Resource):
    @ns.marshal_list_with(aeroport_model)
    def get(self): #✅​
        return get_all_aeroports()
    
    @ns.expect(aeroport_input_model)
    @ns.marshal_with(aeroport_model)
    def post(self): #✅​
        data = ns.payload
        if get_aeroport(data['nom_aeroport']):
            abort(400, "Aeroport déjà existant")
        for ville in get_all_villes():
            if ville.id_ville == data['id_ville']:
                aeroport = create_aeroport(data['nom_aeroport'], data['id_ville'])
                return aeroport, 201
        abort (400, "id_ville innexistant")

@ns.route('/aeroports/<string:nom_aeroport>')
class AeroportItem(Resource):
    # @ns.expect(aeroport_input_model)
    @ns.marshal_with(aeroport_model)
    def get(self,nom_aeroport): #✅​
        if not get_aeroport(nom_aeroport) :
            abort (404, "Aéroport introuvable")
        return get_aeroport(nom_aeroport)
    
    @ns.expect(aeroport_input_model)
    @ns.marshal_with(aeroport_model)
    def put(self, nom_aeroport): #✅​
        data = ns.payload # Le JSON envoyé par le client
        if get_aeroport(data['nom_aeroport']) and data['nom_aeroport'] != nom_aeroport:
            abort(400, "Aeroport déjà existant")
        for ville in get_all_villes():
            if ville.id_ville == data['id_ville']:
                aero_modifie = modify_aeroport(
                    nom_aeroport = nom_aeroport,
                    nvo_nom_aeroport = data.get('nom_aeroport'),
                    id_ville = data.get('id_ville')
                )
        
                if not aero_modifie:
                    abort(404, "Aéroport non trouvé")
                    
                return aero_modifie
        abort (400, "id_ville innexistant")
    
    @ns.marshal_with(aeroport_model)
    def delete(self, nom_aeroport): #✅​
        if not supp_aeroport(nom_aeroport):
            abort(404)
        return None, 204




############## COMPAGNIE ################# ✅​

@ns.route('/compagnies')
class CompagnieList(Resource):
    @ns.marshal_list_with(compagnie_model)
    def get(self): #✅​
        return get_all_compagnies()
    
    @ns.expect(compagnie_input_model)
    @ns.marshal_with(compagnie_model)
    def post(self): #✅​
        data = ns.payload
        if get_compagnie(data['nom_compagnie']):
            abort(400, "Compagnie déjà existante")
        compagnie = create_compagnie(data["nom_compagnie"])
        return compagnie, 201

@ns.route('/compagnies/<string:nom_compagnie>')
class CompagnieItem(Resource):
    @ns.marshal_with(compagnie_model)
    def get(self, nom_compagnie): #✅​
        if not get_compagnie(nom_compagnie) :
            abort (404, "Compagnie introuvable")
        return get_compagnie(nom_compagnie)
    
    @ns.expect(compagnie_input_model)
    @ns.marshal_with(compagnie_model)
    def put(self, nom_compagnie): #✅​
        data = ns.payload
        if get_compagnie(data['nom_compagnie']) and data['nom_compagnie'] != nom_compagnie:
            abort(400, "Compagnie déjà existante")
        compagnie_modifie = modif_compagnie(
            nom_compagnie = nom_compagnie,
            nvo_nom_compagnie = data.get('nom_compagnie'),
        )
        
        if not compagnie_modifie:
            abort(404, "Compagnie introuvable")
            
        return compagnie_modifie
    
    def delete(self, nom_compagnie): #✅​
        if not supp_compagnie(nom_compagnie):
            abort(404)
        return None, 204
    



############## PAYS ################# ✅​

@ns.route('/pays')
class PaysList(Resource):
    @ns.marshal_list_with(pays_model)
    def get(self): #✅​
        return get_all_pays()
    
#Mettre verif pour le nom que 2 lettres en majuscule, pas de chiffres, pas de caractères spéciaux, pas d'espaces
    @ns.expect(pays_input_model)
    @ns.marshal_with(pays_model)
    def post(self): #✅​
        data = ns.payload
        for pays in get_all_pays():
            if pays.nom_pays == data['nom_pays']:
                abort(404, "Pays déjà existant")
        pays = create_pays(data['nom_pays'])
        return pays, 201


@ns.route('/pays/<int:id_pays>')
class PaysItem(Resource):
    @ns.marshal_with(pays_model)
    def get(self, id_pays): #✅​
        if not get_pays(id_pays) :
            abort (404, "Pays introuvable")
        return get_pays(id_pays)
    
    @ns.expect(pays_input_model)
    @ns.marshal_with(pays_model)
    def put(self, id_pays): #✅​
        data = ns.payload 
        for pays in get_all_pays():
            if pays.nom_pays == data['nom_pays']:
                if data['nom_pays'] != get_pays(id_pays).nom_pays:
                    abort(404, "Pays déjà existant")
        pays_modifie = modify_pays(
            id_pays = id_pays,
            nom_pays = data.get('nom_pays'),
        )
        
        if not pays_modifie:
            abort(404, "Pays introuvable")
            
        return pays_modifie
    
    def delete(self, id_pays): #✅​
        if not supp_pays(id_pays):
            abort(404, "Pays introuvable")
        return None, 204

    


############## TERMINAL ################# ✅​

@ns.route('/terminaux')
class TerminalListe(Resource):
    @ns.marshal_list_with(terminal_model)
    def get(self): #✅​
        return get_all_terminaux()
 
    @ns.expect(terminal_input_model)
    @ns.marshal_with(terminal_model)
    def post(self): #✅​
        data = ns.payload
        if get_terminal(data['nom_aeroport'], data['nom_terminal']):
            abort(400, "Terminal déjà existant")
        for aeroport in get_all_aeroports():
            if aeroport.nom_aeroport == data['nom_aeroport']:
                terminal = create_terminal(data['nom_aeroport'], data['nom_terminal'])
                return terminal, 201
        abort (400, "nom_aeroport innexistant")

    
@ns.route('/terminaux/<string:nom_aeroport>/<string:nom_terminal>')
class TerminalItem(Resource):
    @ns.marshal_with(terminal_model)
    def get(self, nom_aeroport, nom_terminal): #✅​
        if not get_terminal(nom_aeroport, nom_terminal) :
            abort (404, "Terminal introuvable")
        return get_terminal(nom_aeroport, nom_terminal)
    
    @ns.expect(terminal_input_put_model) # Pour les routes avec des clés étrangeres, enlever la fk du playload
    @ns.marshal_with(terminal_model)
    def put(self, nom_aeroport, nom_terminal): #✅​
        data = ns.payload 
        if get_terminal(nom_aeroport, data['nom_terminal']) and data['nom_terminal'] != nom_terminal:
            abort(400, "Terminal déjà existant")

        terminal_modifie = modif_terminal(
            nom_terminal = nom_terminal,
            nvo_nom_terminal = data.get('nom_terminal'),
            nom_aeroport = nom_aeroport,
        )
        
        if not terminal_modifie:
            abort(404, "Terminal introuvable")
            
        return terminal_modifie

    def delete(self, nom_aeroport, nom_terminal): #✅​
        if not supp_terminal(nom_aeroport, nom_terminal):
            abort(404, "Terminal introuvable")
        return None, 204




############## VILLE ################# ✅​

@ns.route('/villes')
class VilleList(Resource):
    @ns.marshal_list_with(ville_model)
    def get(self): #✅​
        return get_all_villes()
    
    @ns.expect(ville_input_model)
    @ns.marshal_with(ville_model)
    def post(self): #✅​
        data = ns.payload
        if not get_pays(data['id_pays']):
            abort(404, "Pays introuvable")
        ville = create_ville(data['id_pays'], data['nom_ville'])
        return ville, 201


@ns.route('/villes/<int:id_ville>')
class VilleItem(Resource):
    @ns.marshal_with(ville_model)
    def get(self, id_ville): #✅​
        if not get_ville(id_ville) :
            abort (404, "Ville introuvable")
        return get_ville(id_ville)
    
    @ns.expect(ville_input_model)
    @ns.marshal_with(ville_model)
    def put(self, id_ville): #✅​
        data = ns.payload 
        if not get_pays(data['id_pays']):
            abort(404, "Pays introuvable")
        ville_modifie = modify_ville(
            id_ville = id_ville,
            id_pays = data.get('id_pays'),
            nom_ville = data.get('nom_ville'),
        )
        
        if not ville_modifie:
            abort(404, "Ville introuvable")
            
        return ville_modifie
    
    def delete(self, id_ville): #✅​
        if not supp_ville(id_ville):
            abort(404, "Ville introuvable")
        return None, 204
    



############## VOL #################

@ns.route('/vols')
class VolList(Resource):
    @ns.marshal_list_with(vol_model)
    def get(self): #✅​
        return get_all_vols()
    
    @ns.expect(vol_input_model)
    @ns.marshal_with(vol_model)
    def post(self):
        data = ns.payload
        if not get_compagnie(data['nom_compagnie']):
            abort(404, "Compagnie introuvable")
        if not get_terminal(data['nom_aeroport_1'], data['nom_terminal_1']):
            abort(404, "Aeroport et terminal de départ ne concordent pas")
        if not get_terminal(data['nom_aeroport_2'], data['nom_terminal_2']):
            abort(404, "Aeroport et terminal d'arrivée ne concordent pas")
        vol = create_vol(data['nom_compagnie'], data['numero_vol'],data['date_heure_depart'],
                        data['date_heure_arrive_prevue'], data['nom_aeroport_1'], data['nom_aeroport_2'], 
                        data['nom_terminal_1'], data['nom_terminal_2'])    
        return vol, 201


@ns.route('/vols/<string:nom_compagnie>/<int:numero_vol>/<string:date_heure_depart>')
class VolItem(Resource):
    @ns.marshal_with(vol_model)
    def get(self, nom_compagnie, numero_vol, date_heure_depart):
        
        vol=get_vol(nom_compagnie, numero_vol, date_heure_depart)
        if not vol:
            abort (404, "Vol introuvable")
        return vol
    
    @ns.expect(vol_input_model)
    @ns.marshal_with(vol_model)
    def put(self, nom_compagnie, numero_vol, date_heure_depart):
        data = ns.payload
        if not get_compagnie(data['nom_compagnie']):
            abort(404, "Compagnie introuvable")
        if not get_terminal(data['nom_aeroport_1'], data['nom_terminal_1']):
            abort(404, "Aeroport et terminal de départ ne concordent pas")
        if not get_terminal(data['nom_aeroport_2'], data['nom_terminal_2']):
            abort(404, "Aeroport et terminal d'arrivée ne concordent pas")
        vol = modify_vol(nom_compagnie, numero_vol, date_heure_depart, data)

        if not vol:
            abort(404, "Vol introuvable ou erreur de mise à jour")
            
        return vol
    
    def delete(self, nom_compagnie, numero_vol, date_heure_depart):
        if supp_vol(nom_compagnie, numero_vol, date_heure_depart):
            return '', 204
        abort(404, "Vol introuvable, suppression impossible.")