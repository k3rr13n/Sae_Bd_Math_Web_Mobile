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