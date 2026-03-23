from flask_restx import fields
from .extensions import api


compagnie_model = api.model('Compagnie', {
    "nom_compagnie": fields.String
})

compagnie_input_model = api.model('CompagnieInput', {
    "nom_compagnie":fields.String
})

aeroport_model = api.model("Aeroport", {
    "nom_aeroport": fields.String,
    "ville_id": fields.Integer #a revoir
})

# aeroport_input_model = api.model("AeroportInput",  {
#     "nom_aeroport": fields.String,
#     "ville_id": fields.Integer #a revoir
# })

vol_model = api.model("Vol", {
    "nom_compagnie" : fields.String,
    "numero_vol" : fields.Integer,
    "date_heure_depart" : fields.DateTime,
    "date_heure_arrive_prevue" : fields.DateTime,
    "nom_aeroport_1" : fields.String,
    "nom_aeroport_2" : fields.String,
    "nom_terminal_1" : fields.String,
    "nom_terminal_2" : fields.String
    }
)